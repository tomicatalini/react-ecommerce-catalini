import "./style.css"
import { useState } from "react";

const CartWidget = () => {
    const [cant] = useState(15);

    return(
        <div className="cart-container">
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className="cant-badge">{cant}</div>
        </div>
    )
}

export default CartWidget;