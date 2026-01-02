import "dotenv/config";

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

type FirebaseWebConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
};

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(
      `Missing required env var "${name}" for server Firebase initialization`
    );
  }
  return v;
}

/**
 * Server-safe Firebase initialization.
 *
 * Uses the Firebase Web SDK so you can access Firestore from Node
 * with the same project configuration as the client.
 */
export const firebaseConfig: FirebaseWebConfig = {
  apiKey:
    process.env.VITE_FIREBASE_API_KEY ??
    process.env.FIREBASE_API_KEY ??
    requiredEnv("VITE_FIREBASE_API_KEY"),
  authDomain:
    process.env.VITE_FIREBASE_AUTH_DOMAIN ??
    process.env.FIREBASE_AUTH_DOMAIN ??
    requiredEnv("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId:
    process.env.VITE_FIREBASE_PROJECT_ID ??
    process.env.FIREBASE_PROJECT_ID ??
    requiredEnv("VITE_FIREBASE_PROJECT_ID"),
  storageBucket:
    process.env.VITE_FIREBASE_STORAGE_BUCKET ??
    process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.VITE_FIREBASE_MESSAGING_SENDER_ID ??
    process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID ?? process.env.FIREBASE_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
