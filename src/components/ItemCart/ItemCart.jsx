import { useContext, useEffect, useState } from "react"
import SelectStock from "../SelectStock/SelectStock"
import { Button } from "@mui/material";
import { CartCtx } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/functions";


const ItemCart = ({product}) => {
    const [ quantity, setQuantity ] = useState(product.quantity);
    const { removeItem, changeItemCount } = useContext(CartCtx);

    useEffect(() => { changeItemCount(product.id, quantity) }, [quantity]);

    const deleteHandler = () => {
        removeItem(product.id, product.quantity);
    }

    return (
        <div className="w-full flex flex-col items-start sm:flex-row sm:items-stretch gap-2 p-2 border rounded-md bg-white">
           <div className="w-full flex-1 h-20 flex">
                <picture className="h-full w-20">
                    <img src={product.image} className="w-full h-full object-contain" />
                </picture>
                <div className="flex-1 flex flex-col px-4">
                    <div>                    
                        <p className="text-sm overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">{product.name}</p>
                    </div>
                    <div className="mt-auto flex gap-2">
                        <Button variant="text" color="warning" size="small" onClick={deleteHandler}>Eliminar</Button>
                        <Link to={`/item/${product.id}`}>
                            <Button variant="text" color="info" size="small">Detalle</Button>
                        </Link>
                    </div>
                </div>
           </div>
            <div className="w-full sm:w-24 bg-neutral-50 sm:bg-white flex flex-col items-center">
                <span className="hidden sm:inline">Cant.</span>
                <SelectStock stock={product.stock} itemsCount={quantity} setItemsCount={setQuantity} />
            </div>
            <div className="m-auto font-bold text-center">{formatPrice(product.price * quantity)}</div>
        </div>
    )
}

export default ItemCart