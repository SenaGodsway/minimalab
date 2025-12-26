import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  query,
  where,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";
import { Blog } from "./pages/blogs/types";

function formatFirestoreDate(value: unknown): string | undefined {
  // Firestore Timestamp has a toDate() method. Some data may already be a string.
  if (value && typeof value === "object" && "toDate" in value) {
    const maybeTs = value as { toDate: () => Date };
    const d = maybeTs.toDate();
    if (d instanceof Date && !Number.isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }
  if (typeof value === "string") return value;
  return undefined;
}

interface Quote {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
  service: string;
}

const messageCollection = collection(db, "customer-quotes");

export const UserService = {
  async getQuoteMessages(): Promise<Quote[]> {
    const snapshot = await getDocs(messageCollection);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      email: doc.data().email,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      message: doc.data().message,
      phone: doc.data().phone,
      service: doc.data().service || "",
    }));
  },

  async addQuote(quote: Omit<Quote, "id">): Promise<string> {
    const docRef = await addDoc(messageCollection, quote);
    return docRef.id;
  },
};

const blogsCollection = collection(db, "blogs");
console.log("Blogs Collection:", blogsCollection);

function toBlog(docId: string, data: Record<string, unknown>): Blog {
  // Never let the document body override the Firestore document id.
  // Some docs may contain an `id` field used as a slug, which would break routing.
  const {
    id: legacyId,
    slug,
    createdAt,
    ...rest
  } = (data ?? {}) as Record<string, unknown>;

  const content = typeof rest.content === "string" ? rest.content : "";
  const title = typeof rest.title === "string" ? rest.title : undefined;
  const image_url =
    typeof rest.image_url === "string" ? rest.image_url : undefined;
  const author = typeof rest.author === "string" ? rest.author : undefined;
  const short_description =
    typeof rest.short_description === "string"
      ? rest.short_description
      : undefined;
  const tags = Array.isArray(rest.tags)
    ? (rest.tags.filter((t) => typeof t === "string") as string[])
    : undefined;

  // Prefer explicit `slug` field, otherwise keep legacy `id` field as slug.
  const resolvedSlug =
    typeof slug === "string"
      ? slug
      : typeof legacyId === "string"
      ? legacyId
      : undefined;

  return {
    id: docId,
    slug: resolvedSlug,
    createdAt: formatFirestoreDate(createdAt),
    content,
    title,
    image_url,
    author,
    short_description,
    tags,
  };
}

export const BlogService = {
  async getBlogs(): Promise<Blog[]> {
    const snapshot = await getDocs(blogsCollection);
    return snapshot.docs.map((doc) => {
      const data = (doc.data() ?? {}) as Record<string, unknown>;
      return toBlog(doc.id, data);
    });
  },

  // Fix: Accept id parameter and use it in doc()
  async getBlogById(id: string): Promise<Blog | undefined> {
    if (!id || typeof id !== "string") return undefined;
    try {
      // Use the collection reference instead of a path string
      const docRef = doc(blogsCollection, id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        console.warn(`getBlogById: No document found with ID: ${id}`);
        return undefined;
      }
      const data = (docSnap.data() ?? {}) as Record<string, unknown>;
      return toBlog(docSnap.id, data);
    } catch (error) {
      console.error(`getBlogById: Error fetching blog by ID (${id}):`, error);
      return undefined;
    }
  },

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    if (!slug || typeof slug !== "string") return undefined;
    try {
      // Support both legacy `id` field and explicit `slug` field.
      const byLegacyIdQ = query(
        blogsCollection,
        where("id", "==", slug),
        limit(1)
      );
      const byLegacyIdSnap = await getDocs(byLegacyIdQ);
      if (!byLegacyIdSnap.empty) {
        const d = byLegacyIdSnap.docs[0];
        return toBlog(d.id, (d.data() ?? {}) as Record<string, unknown>);
      }

      const bySlugQ = query(
        blogsCollection,
        where("slug", "==", slug),
        limit(1)
      );
      const bySlugSnap = await getDocs(bySlugQ);
      if (!bySlugSnap.empty) {
        const d = bySlugSnap.docs[0];
        return toBlog(d.id, (d.data() ?? {}) as Record<string, unknown>);
      }

      console.warn(
        `getBlogBySlug: No document found with slug/legacy ID: ${slug}`
      );
      return undefined;
    } catch (error) {
      console.error(
        `getBlogBySlug: Error fetching blog by slug (${slug}):`,
        error
      );
      return undefined;
    }
  },

  /**
   * Resolve a blog by either Firestore document id (preferred) or by slug.
   * This makes direct `/blogs/{id}` loads work even if `{id}` is actually a slug.
   */
  async getBlogByIdentifier(identifier: string): Promise<Blog | undefined> {
    const cleanId = (identifier || "").trim();
    console.log(`getBlogByIdentifier: Attempting to resolve "${cleanId}"`);

    // 1. Try by Document ID
    const byDocId = await this.getBlogById(cleanId);
    if (byDocId) {
      console.log(`getBlogByIdentifier: Resolved by Document ID`);
      return byDocId;
    }

    // 2. Try by Slug/Legacy ID
    const bySlug = await this.getBlogBySlug(cleanId);
    if (bySlug) {
      console.log(`getBlogByIdentifier: Resolved by Slug`);
      return bySlug;
    }

    // 3. Last resort fallback: Fetch all blogs and search manually.
    try {
      console.log(
        `getBlogByIdentifier: Direct lookups failed. Trying list fallback...`
      );
      const allBlogs = await this.getBlogs();
      console.log(
        `getBlogByIdentifier: List fallback fetched ${allBlogs.length} blogs.`
      );

      // Log the IDs we found to see if there's a mismatch
      if (allBlogs.length > 0) {
        console.log(
          "Available IDs:",
          allBlogs.map((b) => b.id)
        );
      }

      const found = allBlogs.find(
        (b) => b.id === cleanId || b.slug === cleanId
      );
      if (found) {
        console.log(`getBlogByIdentifier: Resolved via list fallback!`, found);
        return found;
      }
    } catch (e) {
      console.error(`getBlogByIdentifier: List fallback failed:`, e);
    }

    console.error(
      `getBlogByIdentifier: Failed to resolve blog for "${cleanId}"`
    );
    return undefined;
  },
};
