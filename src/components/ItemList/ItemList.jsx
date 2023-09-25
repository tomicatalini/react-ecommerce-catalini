import { Link } from "react-router-dom";

const ItemList = ({id, title, price, image}) => {

    return (
        <div className={'py-4 flex flex-col shadow-lg rounder-md col-span-3 h-80 hover:scale-110'}>
            <img src={image} alt="Product Image" className="h-1/2 mx-auto"/>
            <div className="flex-1 my-2 p-2 border-t ">
                <p className="font-bold text-xl">$ {price}</p>
                <p className="text-sm">{title}</p>
            </div>
            <div className="px-4">
                <Link className="p-1 font-bold text-white rounded-sm flex align-center justify-center bg-violet-500" to={`/item/${id}`}>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default ItemList;