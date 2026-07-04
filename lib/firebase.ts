// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
