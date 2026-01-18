import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import AppHeader from "../../components/header";
import Footer from "../../components/footer";
import { db } from "../../firebase";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import type { PostCreateAccount, Blog } from "../blogs/types";
import { BlogService } from "../../expose_db";

type FieldErrors = Partial<
  Record<
    | "title"
    | "author"
    | "short_description"
    | "image_url"
    | "tags"
    | "content"
    | "form",
    string
  >
>;

function isValidUrl(value: string): boolean {
  try {
    // Allow absolute URLs only; keep validation intentionally lightweight.
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function parseTags(value: string): string[] | undefined {
  const tags = value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  return tags.length ? Array.from(new Set(tags)) : undefined;
}

export default function CreateBlogPage() {
  const [contentMode, setContentMode] = useState<"markdown" | "preview">("markdown");
  const [account, setAccount] = useState<PostCreateAccount | null>(null);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [content, setContent] = useState("");

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSaving, setIsSaving] = useState(false);
  const [createdId, setCreatedId] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const tags = useMemo(() => parseTags(tagsInput), [tagsInput]);

  // Fetch blogs when authenticated
  useEffect(() => {
    if (account) {
      setIsLoadingBlogs(true);
      BlogService.getBlogs()
        .then((fetchedBlogs) => {
          // Sort blogs by createdAtTimestamp (newest first)
          const sorted = [...fetchedBlogs].sort((a, b) => {
            if (a.createdAtTimestamp && b.createdAtTimestamp) {
              return b.createdAtTimestamp - a.createdAtTimestamp;
            }
            if (a.createdAtTimestamp && !b.createdAtTimestamp) return -1;
            if (!a.createdAtTimestamp && b.createdAtTimestamp) return 1;
            return 0;
          });
          setBlogs(sorted);
        })
        .catch((err) => {
          console.error("Failed to fetch blogs:", err);
        })
        .finally(() => {
          setIsLoadingBlogs(false);
        });
    }
  }, [account]);

  // Handler to populate form with selected blog data
  const handleBlogSelect = (blog: Blog) => {
    setSelectedBlogId(blog.id);
    setTitle(blog.title || "");
    setAuthor(blog.author || "");
    setShortDescription(blog.short_description || "");
    setImageUrl(blog.image_url || "");
    setTagsInput(blog.tags ? blog.tags.join(", ") : "");
    setContent(blog.content || "");
    setErrors({});
    setCreatedId(null);
  };

  // Handler to clear the form
  const handleClearForm = () => {
    setSelectedBlogId(null);
    setTitle("");
    setAuthor("");
    setShortDescription("");
    setImageUrl("");
    setTagsInput("");
    setContent("");
    setErrors({});
    setCreatedId(null);
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};

    if (!title.trim()) next.title = "Title is required.";
    if (!content.trim()) next.content = "Content is required.";

    if (shortDescription.trim() && shortDescription.trim().length < 20) {
      next.short_description = "Short description should be at least 20 characters (or leave it empty).";
    }

    if (imageUrl.trim() && !isValidUrl(imageUrl.trim())) {
      next.image_url = "Image URL must be a valid http(s) URL.";
    }

    if (tagsInput.includes(",,")) {
      next.tags = "Tags should be comma-separated (avoid empty entries).";
    }

    return next;
  };

  const verifyCredentials = async () => {
    if (isAuthLoading) return;

    const username = loginUsername.trim();
    const password = loginPassword;
    if (!username || !password) {
      setAuthError("Username and password are required.");
      return;
    }

    setAuthError(null);
    setIsAuthLoading(true);
    try {
      const accountsCollection = collection(db, "post-create-accounts");
      const q = query(accountsCollection, where("username", "==", username), limit(1));
      const snap = await getDocs(q);
      if (snap.empty) {
        setAuthError("Invalid username or password.");
        return;
      }

      const d = snap.docs[0];
      const data = (d.data() ?? {}) as Record<string, unknown>;
      const storedPassword = typeof data.password === "string" ? data.password : "";
      if (storedPassword !== password) {
        setAuthError("Invalid username or password.");
        return;
      }

      const nextAccount: PostCreateAccount = {
        id: d.id,
        username: typeof data.username === "string" ? data.username : username,
        password: storedPassword,
        role: typeof data.role === "string" ? data.role : "",
        name: typeof data.name === "string" ? data.name : "",
      };

      setAccount(nextAccount);
      setLoginPassword("");
      setAuthError(null);
    } catch (e) {
      console.error("CreateBlogPage: failed to verify credentials", e);
      setAuthError("Could not verify credentials. Please try again.");
    } finally {
      setIsAuthLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;

    setCreatedId(null);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSaving(true);
    try {
      const blogsCollection = collection(db, "blogs");

      // Create the blog document first, then set `id` to the Firestore document id.
      // This matches the existing reader logic without changing it.
      const docRef = await addDoc(blogsCollection, {
        title: title.trim(),
        author: author.trim() || undefined,
        short_description: shortDescription.trim() || undefined,
        image_url: imageUrl.trim() || undefined,
        tags,
        content: content.trim(),
        createdAt: serverTimestamp(),
      });

      await updateDoc(doc(db, "blogs", docRef.id), {
        id: docRef.id,
      });

      setCreatedId(docRef.id);
      setTitle("");
      setAuthor("");
      setShortDescription("");
      setImageUrl("");
      setTagsInput("");
      setContent("");
      setErrors({});
      setSelectedBlogId(null);

      // Refresh the blog list
      BlogService.getBlogs()
        .then((fetchedBlogs) => {
          const sorted = [...fetchedBlogs].sort((a, b) => {
            if (a.createdAtTimestamp && b.createdAtTimestamp) {
              return b.createdAtTimestamp - a.createdAtTimestamp;
            }
            if (a.createdAtTimestamp && !b.createdAtTimestamp) return -1;
            if (!a.createdAtTimestamp && b.createdAtTimestamp) return 1;
            return 0;
          });
          setBlogs(sorted);
        })
        .catch((err) => {
          console.error("Failed to refresh blogs:", err);
        });
    } catch (err) {
      console.error("CreateBlogPage: failed to save blog", err);
      setErrors({
        form: "Failed to save blog. Please check your Firebase config/permissions and try again.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <AppHeader />
      <main className="mx-auto w-11/12 py-12 pt-32 md:w-10/12">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Create Blog</h1>
            <p className="mt-2 text-neutral-600">
              Write your post in markdown and save it to the Firebase <span className="font-semibold">blogs</span>{" "}
            .
            </p>
          </div>
        </div>

        {!account ? (
          <div className="rounded-lg border-2 border-slate-200 bg-white p-5">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-neutral-900">Admin access</h2>
              <p className="mt-1 text-sm text-neutral-600">
                Enter your username and password to access the blog creator.
              </p>
            </div>

            {authError ? (
              <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {authError}
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-neutral-800">Username</label>
                <input
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  autoComplete="username"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-black"
                  placeholder="username"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-neutral-800">Password</label>
                <input
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-black"
                  placeholder="password"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <Link to="/blogs" className="text-sm font-semibold text-neutral-700 hover:text-black">
                Back to blogs
              </Link>
              <button
                type="button"
                disabled={isAuthLoading}
                onClick={verifyCredentials}
                className="rounded-md bg-black px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isAuthLoading ? "Verifying…" : "Continue"}
              </button>
            </div>
          </div>
        ) : null}

        {account ? (
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Sidebar with blog list */}
          <aside className="w-full lg:w-80 lg:flex-shrink-0">
            <div className="rounded-lg border-2 border-slate-200 bg-white p-4">
              <h2 className="mb-4 text-lg font-semibold text-neutral-900">Your Blogs</h2>
              {isLoadingBlogs ? (
                <div className="py-8 text-center text-sm text-neutral-500">Loading blogs...</div>
              ) : blogs.length === 0 ? (
                <div className="py-8 text-center text-sm text-neutral-500">No blogs found</div>
              ) : (
                <div className="max-h-[calc(100vh-16rem)] overflow-y-auto">
                  <ul className="space-y-2">
                    {blogs.map((blog) => (
                      <li key={blog.id}>
                        <button
                          type="button"
                          onClick={() => handleBlogSelect(blog)}
                          className={[
                            "w-full rounded-md border px-3 py-2 text-left transition-colors",
                            selectedBlogId === blog.id
                              ? "border-black bg-neutral-100"
                              : "border-slate-200 bg-white hover:bg-slate-50",
                          ].join(" ")}
                        >
                          <div className="flex gap-3">
                            {/* Image preview */}
                            <div className="flex-shrink-0">
                              {blog.image_url ? (
                                <img
                                  src={blog.image_url}
                                  alt={blog.title || "Blog preview"}
                                  className="h-16 w-16 rounded-md object-cover"
                                  onError={(e) => {
                                    // Hide image on error
                                    (e.target as HTMLImageElement).style.display = "none";
                                  }}
                                />
                              ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-slate-100 text-xs text-neutral-400">
                                  No image
                                </div>
                              )}
                            </div>

                            {/* Text content */}
                            <div className="min-w-0 flex-1">
                              <div className="truncate font-semibold text-sm text-neutral-900">
                                {blog.title || "Untitled"}
                              </div>
                              {blog.short_description && (
                                <div className="mt-1 line-clamp-2 text-xs text-neutral-600">
                                  {blog.short_description}
                                </div>
                              )}
                              {blog.createdAt && (
                                <div className="mt-1 text-xs text-neutral-500">
                                  {(() => {
                                    try {
                                      const date = new Date(blog.createdAt);
                                      return isNaN(date.getTime()) ? blog.createdAt : date.toLocaleDateString();
                                    } catch {
                                      return blog.createdAt;
                                    }
                                  })()}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>

          {/* Main editor form */}
          <div className="flex-1">
        <form onSubmit={onSubmit} className="rounded-lg border-2 border-slate-200 bg-white p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Signed in{account.name ? ` as ${account.name}` : ""}{account.role ? ` (${account.role})` : ""}
              </p>
              <p className="text-xs text-neutral-600">You can now create a blog post.</p>
            </div>
            <div className="flex gap-2">
              {selectedBlogId && (
                <button
                  type="button"
                  className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-900 hover:bg-slate-50"
                  onClick={handleClearForm}
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-900 hover:bg-slate-50"
                onClick={() => {
                  setAccount(null);
                  setAuthError(null);
                  setLoginPassword("");
                  handleClearForm();
                }}
              >
                Sign out
              </button>
            </div>
          </div>

          {errors.form ? (
            <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {errors.form}
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-neutral-800">Title *</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-black"
                placeholder="e.g. How we shipped X in 2 weeks"
              />
              {errors.title ? <p className="mt-1 text-sm text-red-600">{errors.title}</p> : null}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-neutral-800">Author</label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-black"
                  placeholder="Your name"
                />
                {errors.author ? <p className="mt-1 text-sm text-red-600">{errors.author}</p> : null}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-neutral-800">Image URL</label>
                <input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-black"
                  placeholder="https://..."
                />
                {errors.image_url ? <p className="mt-1 text-sm text-red-600">{errors.image_url}</p> : null}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-neutral-800">Short description</label>
              <input
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-black"
                placeholder="Shown in the blog list preview"
              />
              {errors.short_description ? (
                <p className="mt-1 text-sm text-red-600">{errors.short_description}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-neutral-800">Tags</label>
              <input
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-black"
                placeholder="e.g. firebase, react, devops"
              />
              {errors.tags ? <p className="mt-1 text-sm text-red-600">{errors.tags}</p> : null}
            </div>

            <div>
              <label className="mb-1 text-sm font-semibold text-neutral-800 flex items-center gap-2 justify-between">
                {contentMode === "markdown" ? "Content (markdown) *" : "Content preview"}
                <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setContentMode("markdown")}
              className={[
                "rounded-md px-3 py-1.5 text-sm font-semibold",
                contentMode === "markdown"
                  ? "bg-black text-white"
                  : "bg-white text-neutral-800 hover:bg-slate-50",
              ].join(" ")}
              aria-pressed={contentMode === "markdown"}
            >
              Markdown
            </button>
            <button
              type="button"
              onClick={() => setContentMode("preview")}
              className={[
                "rounded-md px-3 py-1.5 text-sm font-semibold",
                contentMode === "preview"
                  ? "bg-black text-white"
                  : "bg-white text-neutral-800 hover:bg-slate-50",
              ].join(" ")}
              aria-pressed={contentMode === "preview"}
            >
              Preview
            </button>
          </div>
              </label>

              {contentMode === "markdown" ? (
                <>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={14}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 font-mono text-sm outline-none focus:border-black"
                    placeholder={"# Heading\n\nWrite your blog in **markdown**...\n"}
                  />
                  {errors.content ? <p className="mt-1 text-sm text-red-600">{errors.content}</p> : null}
                </>
              ) : (
                <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-4">
                  {content.trim() ? (
                    <div className="prose prose-lg max-w-none prose-pre:bg-transparent prose-pre:text-black">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                        {content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm text-neutral-500">
                      Nothing to preview yet. Switch back to <span className="font-semibold">Markdown</span> and start
                      writing.
                    </p>
                  )}
                </div>
              )}
            </div>

            {createdId ? (
          <div className="mb-8 rounded-lg border-2 border-green-200 bg-green-50 px-5 py-4 text-green-900">
            <p className="font-semibold">Blog saved successfully.</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                to={`/blogs/${createdId}`}
                className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
              >
                View blog
              </Link>
              <Link
                to="/blogs"
                className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900"
              >
                Back to blogs
              </Link>
            </div>
          </div>
        ) : null}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Link to="/blogs" className="text-sm font-semibold text-neutral-700 hover:text-black">
                Back to blogs
              </Link>

              <button
                type="submit"
                disabled={isSaving}
                className="rounded-md bg-black px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSaving ? "Saving…" : "Save blog"}
              </button>
            </div>
          </div>
        </form>
          </div>
        </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
}