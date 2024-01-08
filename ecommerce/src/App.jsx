import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/Products/ItemListContainer"
import { Cart } from "./components/Cart/Cart"
import { CartContextProvider } from "./context/CartContext"
import { FirebaseContextProvider } from "./context/FirebaseContext"
import { Formulario } from "./components/Form/Form"
function App() {
 
  return (
    <FirebaseContextProvider>
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />    
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/cart" element={<Formulario/>} /> */}
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </FirebaseContextProvider>

    
  )
}

export default App
