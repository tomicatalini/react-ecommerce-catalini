import { Link } from "react-router-dom";

const Item = ({id, title, price, category, description, image}) => {

    return (
        <div className="flex flex-row gap-4 py-8">
            <img src={image} alt="Product Image" className="w-96"/>
            <div>
                <div className="flex-1 my-2 p-2">
                    <p className="font-bold text-2xl">$ {price}</p>
                    <p className="font-bold text-lg">{title}</p>
                    <p className="italic">{category}</p>
                    <p className="my-4">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;