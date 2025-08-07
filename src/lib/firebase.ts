import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE-9VWjuxImaHxsUCm8cY1Ma1rCghaEtY",
  authDomain: "kayan-app-a3eab.firebaseapp.com",
  projectId: "kayan-app-a3eab",
  storageBucket: "kayan-app-a3eab.firebasestorage.app",
  messagingSenderId: "87760775248",
  appId: "1:87760775248:web:0cb989245c1b59d6d4c955"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);