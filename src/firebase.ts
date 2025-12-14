import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as
    | string
    | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as
    | string
    | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

const missing = Object.entries(firebaseConfig)
  .filter(([, v]) => !v)
  .map(([k]) => k);

if (missing.length) {
  // In production, this almost always means the values weren't available at build time.
  console.error(
    `Missing Firebase config values: ${missing.join(
      ", "
    )}. For Vite, these must be set at BUILD time (VITE_*).`
  );
}

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
