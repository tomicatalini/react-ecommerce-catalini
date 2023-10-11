import { useContext, useState } from "react";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import SelectStock from "../../utils/components/SelectStock/SelectStock";
import { CartCtx } from "../../context/CartContext";

const theme = createTheme({
    palette:{
        primary: {
            main:'#fb923c',
            contrastText: '#fff' 
        },
        secondary: {
            main: '#fff',
            contrastText: '#000'
        },
        dark: {
            main: '#d0d0d0d0',
            contrastText: '#fff' 
        }
    }
});

const ItemDetail = ({product}) => {
    const [ itemsCount , setItemsCount ] = useState(1);
    const { addToCart } = useContext(CartCtx);

    const cartHandler = () => addToCart(product.id, itemsCount);
    
    return (
        <div className="flex flex-col gap-2 bg-neutral-50 py-8 px-4">
            <h2 className="w-3/4 mx-auto text-xs">{product.category}</h2>
            <article className="container mx-auto p-2 w-3/4 flex gap-8 bg-white rounded-lg shadow-md">
                <section className="flex-1 px-4 py-2">
                    <div className="w-full py-12 mt-2 mb-8 bg-white border">
                        <img src={product.image} alt="Product Image" className="w-48 mx-auto border"/>
                    </div>
                    <div className="bg-white border-t my-4 pt-4 pb-8">
                        <div className="flex-1 my-2 p-2">
                            <h3 className="text-2xl text-neutral-400">Descripción</h3>
                            <p className="my-4">{product.description}</p>
                        </div>
                    </div>
                </section>               
                <aside className="w-72 p-4 border rounded-md h-[calc(100vh-8rem)] flex flex-col gap-2">
                    <p className="font-bold text-lg">{product.name}</p>
                    <p className="text-2xl">$ {product.price}</p>
                    <div className="mt-auto">Stock Disponible: {product.stock}</div>
                    <SelectStock stock={product.stock}  itemsCount={itemsCount} setItemsCount={setItemsCount}></SelectStock>
                    <ThemeProvider theme={theme}>
                        <div className="flex flex-col gap-3">
                            <Button className="font-bold" color="primary" variant="contained" onClick={cartHandler}>Agregar al carrito</Button>
                            <Button className="font-bold" color="secondary" variant="contained">Comprar</Button>
                        </div>
                    </ThemeProvider>
                </aside>
            </article>
        </div>
    )
}

export default ItemDetail;