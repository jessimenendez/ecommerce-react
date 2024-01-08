
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { CardItem } from "../CardItem/CardItem";
import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, SimpleGrid, IconButton, CircularProgress } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../context/FirebaseContext";

export const ItemListContainer = () => {
    const {category} = useParams();

    const { product, products, isLoading, getProductsDB, getProductById } = useContext(FirebaseContext);
    const {totalQuantity} = useContext(CartContext);
    // const [products, setProducts] = useState([])
    // const [isLoading, setIsLoading] = useState(true);
    //const [change, setChange] = useState(true)


    // const getProductsDB = (category) => {
    //     // const myProducts = query(collection(db, "products"), where("category", "==", "verano"));
    //     const myProducts = category ? query(collection(db, "products"), where("category", "==", category)) : query(collection(db, "products"))
    //     getDocs(myProducts)
    //         .then((resp) => {
    //             if(resp.size === 0) {
    //                 console.log("No hay productos en la DB")
    //             }
    
    //             const productList = resp.docs.map( doc => {
    //                 const product = {
    //                     id : doc.id,
    //                     ...doc.data()
    //                 }    
    //                 return product;
    //             });                
    //             //console.log("hola, datos de la bd", productList);
    //             setProducts(productList);
    //             setIsLoading(false)
    //         })
    //         .catch(error => console.log(error));
    // } 

  useEffect(() => {
    //setIsLoading(true);
    getProductsDB(category);

  }, [category]);

  return (
     
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>   
            {isLoading ? <CircularProgress isIndeterminate color='green.300' /> : products.map((product) => (
            <CardItem key={product.id} {...product} />                
        ))}
        </SimpleGrid> 
  );   
};
