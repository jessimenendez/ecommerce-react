import { Card, CardBody, CardHeader, Heading, CardFooter, Button, Text, Box} from '@chakra-ui/react'
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Formulario } from '../Form/Form';

export const Cart = () => {

  const { cartItems, removeItem, totalCartItems } = useContext(CartContext);
  //console.log(cartItems)
  return (
    <Box>
    {cartItems.map((item) => (
    <Card key={item.id}>      
        <CardHeader>
          <Heading size='md'> {item.name} </Heading>
        </CardHeader>
        <CardBody>
          <Text>Descripcion: {item.description}</Text>
          <Text>Precio: {item.price}</Text>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>Subtotal: {item.subTotal}</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme='red' onClick={() => removeItem(item.id)}>Eliminar</Button>
        </CardFooter>             
    </Card>
    ))}
    <Box>
      <Text>Precio total: ${totalCartItems}</Text>
    </Box>
    <Formulario></Formulario>
    </Box> 
    
)};
