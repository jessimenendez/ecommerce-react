const products = [
    { id: "1", name: "Remera", img: "imagen1.jpg", price: 19.99, category: "verano", description: "Este es un producto de ejemplo para un ecommerce.", stock: 10 },
    { id: "2", name: "Campera", img: "imagen2.jpg", price: 29.99, category: "invierno", description: "Otro producto de ejemplo para un ecommerce.", stock: 15 },
    { id: "3", name: "Sandalia", img: "imagen3.jpg", price: 39.99, category: "calzado", description: "Un producto más para el ecommerce.", stock: 20 },
    { id: "4", name: "Short", img: "imagen4.jpg", price: 39.99, category: "verano", description: "Un producto más para el ecommerce.", stock: 5 },
  ];


  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };
