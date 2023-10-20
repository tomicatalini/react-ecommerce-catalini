import { useContext, useState } from "react";
import { Button, Paper } from "@mui/material";
import SelectStock from "../SelectStock/SelectStock";
import { CartCtx } from "../../context/CartContext";
import './style.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomSnackbar from "../CustomSnackbar";
import { formatPrice } from "../../utils/functions";

const ItemDetail = ({product}) => {
    const [ itemsCount , setItemsCount ] = useState(1);
    const [ openSnackbar, setOpenSnackbar] = useState(false);
    const [ message, setMessage] = useState('');
    const { addToCart } = useContext(CartCtx);
    const history = useNavigate();
    
    const cartHandler = () => {
        addToCart(product.id, itemsCount);
        setMessage(`Se agregaron ${itemsCount} al carrito!`);
        handleClickSnackbar();
    };

    const handleBuyClick = () => {
        addToCart(product.id, itemsCount);
        history('/cart');
    }

    const handleClickSnackbar = () => setOpenSnackbar(true);
    const handleCloseSnackbar = () => setOpenSnackbar(false);
    
    return (
        <div className="flex flex-col gap-2 bg-zinc-100 py-8 px-4 bg-image">
            <h2 className="text-xs font-medium"><Link className="text-black" to={'/'}>VOLVER</Link> | <Link className="text-orange-600" to={`/category/${product.category}`}>{product.category.toUpperCase()}</Link></h2>
            
            <Paper elevation={3} className="py-4 px-2 grid grid-template-areas">
                
                <div className="[grid-area:galery]  bg-white">
                    <picture className="w-3/4 h-full mx-auto">
                        <img src={product.image} alt="Product Image" className="object-contain h-full mx-auto"/>
                    </picture>
                </div>

                <div className="[grid-area:desc] bg-white border-t my-4 pt-4 pb-8">
                    <div className="flex-1 my-2 p-2">
                        <h3 className="text-2xl text-neutral-400">Descripción</h3>
                        <p className="my-4">{product.description}</p>
                    </div>
                </div>
                           
                <aside className="[grid-area:aside] p-4 border rounded-md flex flex-col gap-2">
                    <p className="font-bold text-lg">{product.name}</p>
                    <p className="text-2xl">{formatPrice(product.price)}</p>
                    <div className="mt-auto">Stock Disponible: {product.stock}</div>

                    <SelectStock stock={product.stock} itemsCount={itemsCount} setItemsCount={setItemsCount}></SelectStock>  

                    <div className="flex flex-col gap-3">
                        <Button className="font-bold" color="primary" variant="contained" onClick={cartHandler}>Agregar al carrito</Button>
                        <Button className="font-bold" color="secondary" variant="contained" onClick={handleBuyClick}>Comprar</Button>
                    </div>
                </aside>
            </Paper>

            <CustomSnackbar open={openSnackbar} handleClick={handleClickSnackbar} handleClose={handleCloseSnackbar} message={message} severity="success"/>
        </div>
    )
}

export default ItemDetail;