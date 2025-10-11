import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Blog } from "./pages/blogs/types";

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
      return {
        id: doc.id,
        content: data.content,
        createdAt: data.createdAt,
        image_url: data.image_url,
        tags: data.tags || [],
      };
    });
  },
  async getBlogById(id: string): Promise<Blog | undefined> {
    // Use getDoc for direct document fetch by ID
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      return undefined;
    }
    const data = docSnap.data();
    console.log("The Data",data);
    return {
      id: docSnap.id,
      content: data.content,
      createdAt: data.createdAt,
      image_url: data.image_url,
      tags: data.tags || [],
    };
  },
};

