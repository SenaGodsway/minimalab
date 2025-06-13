import { db } from './firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

interface Quote {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  telephone: string;
}

const messageCollection = collection(db, 'customer-quotes')
console.log('messageCollection:', messageCollection)  



export const UserService = {
  async getQuoteMessages(): Promise<Quote[]> {
    const snapshot = await getDocs(messageCollection)
    console.log('Fetched quotes:', snapshot.docs.map(doc => doc.data()))                              
    return snapshot.docs.map(doc => ({
      id: 'id',
      email: doc.data().email,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      message: doc.data().message,
      telephone: doc.data().telephone,
    }))
    console.log("Email TO:", snapshot.docs.map(doc => doc.data().email))
  },

  async addQuote(quote: Omit<Quote, 'id'>): Promise<string> {
    const docRef = await addDoc(messageCollection, quote)
    return docRef.id
  }
}



// // src/services/userService.ts
// import { db } from './firebase';
// import { addDoc, collection, getDocs } from 'firebase/firestore';
// import { Quotes } from './types';

// // Correct collection reference - just point to 'customer-quotes'
// const messageCollection = collection(db, 'customer-quotes');

// export const UserService = {
//   async getQuoteMessages(): Promise<Quotes[]> {
//     const snapshot = await getDocs(messageCollection);
    
//     const quotes = snapshot.docs.map(doc => {
//       const data = doc.data();
//       return {
//         id: doc.id,
//         email: data.email,
//         firstName: data.firstname, 
//         lastName: data.lastname,  
//         message: data.message,
//         telephone: data.telephone,

//       };
//     });
    
//     console.log('Fetched quotes:', quotes);
//     return quotes;
//   },

//     async addQuote(quote: Omit<Quotes, 'id'>): Promise<string> {
//     const docRef = await addDoc(messageCollection, quote);
//     return docRef.id;
//   }
// };


