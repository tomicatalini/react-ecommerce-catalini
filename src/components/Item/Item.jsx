import { useContext, useEffect, useState } from "react";
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

const Item = ({product}) => {
    const [count, setCount] = useState(1);
    const {addToCart} = useContext(CartCtx);

    return (
        <div className="flex gap-2 bg-neutral-100 py-8 px-4">
            <section className="w-3/4 rounded-md overflow-hidden">
                <div className="w-full py-8 bg-white shadow-lg">
                    <img src={product.image} alt="Product Image" className="w-48 mx-auto"/>
                </div>
                <div className="bg-white rounded-md shadow-lg">
                    <div className="flex-1 my-2 p-2">
                        <p className="italic">{product.category}</p>
                        <p className="my-4">{product.description}</p>
                    </div>
                </div>
                <div>
                    <div>xs</div>
                    <div>md</div>
                    <div>lg</div>
                    <div>xl</div>
                </div>                
            </section>
            <section className="w-1/4 bg-slate-200 h-[calc(100vh-4rem)]">
                <p className="font-bold text-lg">{product.title}</p>
                <p className="font-bold text-2xl">$ {product.price}</p>
                <div>Disponible: {product.stock}</div>
                <SelectStock stock={product.stock} setAmount={setCount}></SelectStock>
                <ThemeProvider theme={theme}>
                    <div className="flex flex-col gap-3">
                        <Button className="font-bold" color="primary" variant="contained" onClick={() => addToCart(product.id, count)}>Agregar al carrito</Button>
                        <Button className="font-bold" color="secondary" variant="contained">Comprar</Button>
                    </div>
                </ThemeProvider>
            </section>
        </div>
    )
}

export default Item;