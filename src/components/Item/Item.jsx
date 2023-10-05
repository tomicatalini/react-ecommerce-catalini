import { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import  AddIcon  from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import SelectStock from "../utils/SelectStock/SelectStock";

function random(max, min){
    const r = Math.random();
    return r == 0 ? min :  Math.floor(Math.random() * 19);
}

const Item = ({title, price, category, description, image}) => {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(1);

    useEffect(() => {
        setStock(random(20,1));
    }, []);


    return (
        <div className="flex gap-2 bg-neutral-100 py-8 px-4">
            <section className="w-3/4 rounded-md overflow-hidden">
                <div className="w-full py-8 bg-white shadow-lg">
                    <img src={image} alt="Product Image" className="w-48 mx-auto"/>
                </div>
                <div className="bg-white rounded-md shadow-lg">
                    <div className="flex-1 my-2 p-2">
                        <p className="italic">{category}</p>
                        <p className="my-4">{description}</p>
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
                <p className="font-bold text-lg">{title}</p>
                <p className="font-bold text-2xl">$ {price}</p>
                <div>Disponible: {stock}</div>
                <div className="flex items-center gap-2">
                    <SelectStock></SelectStock>
                </div>
                <button>Agregar al carrito</button>
                <button>Comprar</button>
            </section>
        </div>
    )
}

export default Item;