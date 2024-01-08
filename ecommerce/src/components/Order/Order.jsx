import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"
import { Text } from '@chakra-ui/react';

export const Order = () => {

  const addOrderDB = async (cartProducts, userData, total) => { 
      const newOrder = {
        buyer: userData,
        items: cartProducts,
        data: serverTimestamp(),
        total
      };
      
      addDoc( collection(db, "orders"), newOrder );
   }

  return (
    <Text>Orden generada</Text>
  )
}
