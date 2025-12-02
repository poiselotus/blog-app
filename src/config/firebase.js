// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0MVJg_aHt2iREMrVyzzhPEpQmxrd_aTo",
  authDomain: "blog-app-ac168.firebaseapp.com",
  projectId: "blog-app-ac168",
  storageBucket: "blog-app-ac168.firebasestorage.app",
  messagingSenderId: "14615044401",
  appId: "1:14615044401:web:f413513126e37928831010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);