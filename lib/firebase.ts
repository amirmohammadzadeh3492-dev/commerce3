import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrcO3Rit3x--P6r_hKh60WiNuUjce5BXs",
  authDomain: "commerce-platform-a1c32.firebaseapp.com",
  databaseURL: "https://commerce-platform-a1c32-default-rtdb.firebaseio.com",
  projectId: "commerce-platform-a1c32",
  storageBucket: "commerce-platform-a1c32.firebasestorage.app",
  messagingSenderId: "185585173109",
  appId: "1:185585173109:web:51294b119e2a4005b8ee3c",
  measurementId: "G-KRQJF9Z27C"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
