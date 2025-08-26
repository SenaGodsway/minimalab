import { db } from "./firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

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
console.log("messageCollection:", messageCollection);

export const UserService = {
  async getQuoteMessages(): Promise<Quote[]> {
    const snapshot = await getDocs(messageCollection);
    console.log(
      "Fetched quotes:",
      snapshot.docs.map((doc) => doc.data())
    );
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      email: doc.data().email,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      message: doc.data().message,
      phone: doc.data().phone,
      service: doc.data().service || "",
    }));
    console.log(
      "Email TO:",
      snapshot.docs.map((doc) => doc.data().email)
    );
  },

  async addQuote(quote: Omit<Quote, "id">): Promise<string> {
    const docRef = await addDoc(messageCollection, quote);
    return docRef.id;
  },
};
