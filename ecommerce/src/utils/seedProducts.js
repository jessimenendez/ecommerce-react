import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  { name: "Remera", img: "imagen1.jpg", price: 19.99, category: "verano", description: "Este es un producto de ejemplo para un ecommerce.", stock: 10 },
  { name: "Campera", img: "imagen2.jpg", price: 29.99, category: "invierno", description: "Otro producto de ejemplo para un ecommerce.", stock: 15 },
  { name: "Sandalia", img: "imagen3.jpg", price: 39.99, category: "calzado", description: "Un producto más para el ecommerce.", stock: 20 },
  { name: "Short", img: "imagen4.jpg", price: 39.99, category: "verano", description: "Un producto más para el ecommerce.", stock: 5 },
];

export const seedProducts = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};
