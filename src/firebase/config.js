// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfYQj8x--7nqVFgF1muK4WZKGKrvzGDWE",
  authDomain: "deneme-1a7ab.firebaseapp.com",
  projectId: "deneme-1a7ab",
  storageBucket: "deneme-1a7ab.appspot.com",
  messagingSenderId: "50056347451",
  appId: "1:50056347451:web:ff1a955704cbd5058a811e",
  measurementId: "G-7JG6WXS7T7",
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export {fb}

