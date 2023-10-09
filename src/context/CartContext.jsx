import { createContext, useState } from "react";
import { get } from "../firebase/db/dbOperations";

export const CartCtx = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = async (productId, amount) => {        
        console.log(`Se van a agregar ${amount} del producto ${productId} al carrito`);
        console.log(cart);

        if(cart.find(prod => prod.id === productId)){
            console.log('Existe en el carrito');
            const updatedCart = cart.map( prod => prod.id === productId 
                    ? {...prod, quantity: amount} 
                    : prod
                );
            setCart(updatedCart);
        } else {
            const product = await get('productos', productId);
            console.log('No existe en el carrito', product);
            setCart([...cart, {...product, quantity: amount}])
        }

        console.log(`Ahora hay ${cart.length} en el carrito`);
    }

    return (
        <CartCtx.Provider value={{cart, addToCart}}>
            {children}
        </CartCtx.Provider>
    );
}

export default CartContext;