// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD79JVPevEZ8b8W_MXvkVTO85E0XiJrR08",
  authDomain: "blogging-app-5e7e5.firebaseapp.com",
  projectId: "blogging-app-5e7e5",
  storageBucket: "blogging-app-5e7e5.appspot.com",
  messagingSenderId: "192853014273",
  appId: "1:192853014273:web:da758050b98306e4628d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);