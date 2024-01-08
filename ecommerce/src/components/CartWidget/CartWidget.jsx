import { TfiShoppingCart } from "react-icons/tfi";
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';

export default function CartWidget() {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className='d-flex'>
            <TfiShoppingCart size={25}/> 
            <p className='mx-2' color='green'>+{totalQuantity}</p>
        </div>
    );
};

