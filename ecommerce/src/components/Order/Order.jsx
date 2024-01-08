import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"

export const Order = () => {

  const addOrderDB = (cartProducts, userData, total) => { 
      const newOrder = {
        buyer: userData,
        items: cartProducts,
        data: serverTimestamp(),
        total
      }
      
      addDoc( collection(db, "orders"), newOrder );
   }
  return (
    <div>Order</div>
  )
}
