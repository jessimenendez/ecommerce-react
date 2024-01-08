// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo3YMXtE137XR0HoLaHOujC5DH-gpPgKU",
  authDomain: "ecommerce-coderhouse-55ae7.firebaseapp.com",
  projectId: "ecommerce-coderhouse-55ae7",
  storageBucket: "ecommerce-coderhouse-55ae7.appspot.com",
  messagingSenderId: "541528530173",
  appId: "1:541528530173:web:625ff45d54a2404917f294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);