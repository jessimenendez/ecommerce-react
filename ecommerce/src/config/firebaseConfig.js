// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQdZLeR-gRvac8mdYGzceYR7-7j3ojzTo",
  authDomain: "ecommerce-curso-reactjs.firebaseapp.com",
  projectId: "ecommerce-curso-reactjs",
  storageBucket: "ecommerce-curso-reactjs.appspot.com",
  messagingSenderId: "559464020368",
  appId: "1:559464020368:web:ac59d2f4120f45cada1b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);