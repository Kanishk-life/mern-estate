// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-6db70.firebaseapp.com",
  projectId: "mern-state-6db70",
  storageBucket: "mern-state-6db70.appspot.com",
  messagingSenderId: "388395804250",
  appId: "1:388395804250:web:afe0917dba9338acbc9a63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);