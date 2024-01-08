import {Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";

export const Formulario = () => {
  const { addOrderDB } = useContext(FirebaseContext);
  const {cartItems, totalCartItems } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    addOrderDB(cartItems, {name, email}, totalCartItems);    
    setName("");
    setEmail("");
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