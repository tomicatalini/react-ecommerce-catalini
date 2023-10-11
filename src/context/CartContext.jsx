import { createContext, useState } from "react";
import { get } from "../firebase/db/db-service";

export const CartCtx = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [itemsCount, setItemsCount] = useState(0); 

    const addToCart = (productId, amount) => {
        let amount2 = Number.parseInt(amount);
        let prod = cart.find(prod => prod.id === productId) || null;
        
        if(prod){
            let quantity = amount2 + Number.parseInt(prod.quantity);
            prod['quantity'] = quantity > prod.stock ? prod.stock : quantity;
            // setCart(cart);
            getTotalItems();
        } else {
            get('productos', productId)
            .then(product => {
                setCart([...cart, {...product, quantity: amount2}]);
                setItemsCount( itemsCount + amount2);
            })
            .catch(err => console.warn(err));
            // .finally(() => );
        }
        
    }

    // const removeItem = async (productId) => {
    //     const product = await get('productos', productId);

    // }

    const getTotalItems = () => {
        let total = 0;
        cart.forEach(prod => total += prod.quantity);
        setItemsCount(total);
    }

    return (
        <CartCtx.Provider value={{cart, itemsCount, addToCart}}>
            {children}
        </CartCtx.Provider>
    );
}

export default CartContext;