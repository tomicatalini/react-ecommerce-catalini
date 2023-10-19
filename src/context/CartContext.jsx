import { createContext, useEffect, useState } from "react";
import { PRODUCT_COLLECTION_NAME, get } from "../firebase/db/db-service";

export const CartCtx = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateCartItems();
        calculateTotalCartAmount();
    }, [cart]);

    const addToCart = async (productId, quantity) => {
        let prod = cart.find(prod => prod.id === productId) || null;
        
        if(prod){
            prod['quantity'] = Number(quantity);
            setCart([...cart])
        } else {
            const product = await get(PRODUCT_COLLECTION_NAME, productId)
            .catch(err => console.warn(err));

            setCart([...cart, {...product, quantity: Number(quantity)}]);
        }
    }

    const removeItem = (productId) => {
        const index = cart.findIndex( prod => prod.id === productId);

        if(index >= 0){
            cart.splice(index,1);
            setCart([...cart]);
        }

        calculateCartItems();
        calculateTotalCartAmount();
    }

    const changeItemCount = (productId, quantity) => {
        try {
            let prod = cart.find(prod => prod.id === productId);
            prod['quantity'] = Number(quantity);
            setCart([...cart]);

        } catch (error) {
            console.warn('Ocurrio un error al actualizar la cantidad');
        }

    }

    const resetCart = () => {
        setCart([]);
        setItemsCount(0);
        setTotal(0);
    }

    const calculateCartItems = () => {
        let total = 0;
        cart.forEach(prod => total += prod.quantity);
        
        setItemsCount( total );
    }

    const calculateTotalCartAmount = () => {
        let total = 0;
        cart.forEach(item => total += item.quantity * item.price);

        setTotal(total);
    }

    return (
        <CartCtx.Provider value={{cart, itemsCount, total, addToCart, removeItem, setItemsCount, changeItemCount, resetCart }}>
            {children}
        </CartCtx.Provider>
    );
}

export default CartContext;