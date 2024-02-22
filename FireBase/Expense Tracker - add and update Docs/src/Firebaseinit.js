// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOS0Diq8ULZR1rGBNJvx8H9zO4KYGz7q8",
  authDomain: "expense-tracker-f5f2b.firebaseapp.com",
  projectId: "expense-tracker-f5f2b",
  storageBucket: "expense-tracker-f5f2b.appspot.com",
  messagingSenderId: "341364868199",
  appId: "1:341364868199:web:1f2f90ce497f9d97ae80c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);