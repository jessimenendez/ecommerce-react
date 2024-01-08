import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, SimpleGrid, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useCount } from "../../hooks";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CardItem = ({ id, name, price, description, stock }) => {

  const { addItem } = useContext(CartContext);

  const { increment, decrement, count } = useCount(0, stock);

  return (
            <Card maxW='sm' key={id}>
                <CardBody>
                <Image
                    src='https://acdn.mitiendanube.com/stores/001/074/259/products/espana11-c5045aede0e1d6723b16363884334329-640-0.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                    {description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    {price}
                    </Text>
                </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button size='xs' variant='solid' colorScheme='blue' onClick={() => addItem( {id, name, price, description}, count )}>
                    Añadir al carrito
                    </Button>
                    <IconButton
                    size='xs'
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<AddIcon />}
                    onClick={increment}
                    />
                    <Text>{count}</Text>
                    <IconButton
                    size='xs'
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<MinusIcon />}
                    onClick={decrement}
                    />
                </ButtonGroup>
                </CardFooter>
            </Card>


    // <Card sx={{ maxWidth: 345, margin: 1, padding: 3 }}>
    //   <Text variant="h5">{name}</Text>
    //   <Text color="text.secondary">{description}</Text>
    //   <Text color="text.secondary">Precio: ${price}</Text>
    //   <Text color="text.secondary">Stock: {stock}</Text>
    //   <Box display="flex" alignContent="center">
    //     <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={increment}>
    //       +
    //     </Button>
    //     <Text fontSize={30}> {count} </Text>
    //     <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={decrement}>
    //       -
    //     </Button>
    //   </Box>
    //   <Button size="small" color="primary" variant="contained" onClick={() => addItem( {id, name, price}, count )}>
    //     Agregar al carrito
    //   </Button>
    // </Card>
  );
};