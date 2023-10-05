import { createContext, useState } from "react";

export const CartCtx = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    return (
        <CartCtx.Provider value={{cart, setCart, products, setProducts}}>
            {children}
        </CartCtx.Provider>
    );
}

export default CartContext;