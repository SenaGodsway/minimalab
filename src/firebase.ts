import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import { getFunctions } from 'firebase/functions'
// import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
// 	apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
// 	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
// 	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
// 	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
// 	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
// 	appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
// }

// const app = initializeApp(firebaseConfig)

// const firestore = getFirestore(app)

// // const auth = getAuth(app)

// const functions = getFunctions(app)
//  const db = getFirestore(app);
// const storage = getStorage(app)
// export { firestore, functions, db,storage }
