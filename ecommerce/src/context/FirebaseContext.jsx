import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [idOrder, setIdOrder] = useState(null);

  const getProductsDB = (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      if (resp.size === 0) {
        console.log("No hay productos en la base de datos");
      }
      const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
      setIsLoading(false);
    });
  };

  const getProductById = (id) => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
      }
    });
  };

  const discountStock = async (product) => { 
    const productRef = doc( db, "products", product.id );
    const newStock = product.stock - 1;
    await updateDoc(productRef, { stock: newStock } )
    
 }

 const addOrderDB = (cartProducts, userData, total) => { 
  const newOrder = {
    buyer: userData,
    items: cartProducts,
    data: serverTimestamp(),
    total
  }
  try {
    const docRef = addDoc(collection(db, 'orders'), newOrder);
    setIdOrder(docRef.id)
  } catch (error) {
    console.error('Error al agregar la orden a Firestore:', error);
    throw new Error('Error al agregar la orden a Firestore');
  }
}

  const objetValue = {
    products,
    product,
    isLoading,
    getProductsDB,
    getProductById,
    discountStock,
    addOrderDB,
    idOrder
  };

  return <FirebaseContext.Provider value={objetValue}> {children} </FirebaseContext.Provider>;
};
