import {Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";
import { useToast } from '@chakra-ui/react'

export const Formulario = () => {
  const { addOrderDB, idOrder } = useContext(FirebaseContext);
  const {cartItems, totalCartItems, clearCartItems } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();


  const handleForm = (e) => {
    e.preventDefault();
    addOrderDB(cartItems, {name, email}, totalCartItems);    
    setName("");
    setEmail("");
    toast({
      title: 'Orden creada',
      description: `La orden ha sido creada con el ID ${idOrder} `,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    clearCartItems()
  };

  return (
    <Box p={4}>
          <FormControl mb={4}>
            <FormLabel htmlFor="nombre">Nombre:</FormLabel>
            <Input type="text" id="nombre" placeholder="Ingrese su nombre" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="email">Correo electrónico:</FormLabel>
            <Input type="email" id="email" placeholder="Ingrese su correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>

          <Button colorScheme="green" onClick={handleForm}>
            Finalizar compra
          </Button>
    </Box>

  );
};