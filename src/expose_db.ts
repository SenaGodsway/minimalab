import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
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
export const BlogService = {
  async getBlogs(): Promise<Blog[]> {
    const snapshot = await getDocs(blogsCollection);
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      // Never let the document body override the Firestore document id.
      // Some docs may contain an `id` field used as a slug, which would break routing.
      const {
        id: _ignoredId,
        createdAt,
        ...rest
      } = (data ?? {}) as Record<string, unknown>;
      void _ignoredId;

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

      return {
        id: doc.id,
        createdAt: formatFirestoreDate(createdAt),
        content,
        title,
        image_url,
        author,
        short_description,
        tags,
      };
    });
  },

  // Fix: Accept id parameter and use it in doc()
  async getBlogById(id: string): Promise<Blog | undefined> {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    console.log("Doc Snap:", docSnap);
    if (!docSnap.exists()) return undefined;
    console.log("Doc Snap exists:", docSnap.exists());
    const data = docSnap.data();
    console.log("Data:", data);
    const {
      id: _ignoredId,
      createdAt,
      ...rest
    } = (data ?? {}) as Record<string, unknown>;
    void _ignoredId;

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

    return {
      id: docSnap.id,
      createdAt: formatFirestoreDate(createdAt),
      content,
      title,
      image_url,
      author,
      short_description,
      tags,
    };
  },
};
