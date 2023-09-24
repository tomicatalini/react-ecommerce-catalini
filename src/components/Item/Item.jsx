import { Link } from "react-router-dom";
import './style.css';

const Item = ({clase, id, title, price, category, description, image}) => {

    return (
        <div className={clase}>
            <img src={image} alt="Product Image" />
            <div className="item-detail">
                <h2>{title}</h2>
                <p className="italic ">{category}</p>
                <p className="font-bold text-lg">$ {price}</p>
                <p className="my-4">{description}</p>
                <Link className="p-1 font-bold text-white rounded-lg flex align-center justify-center bg-violet-500" to={`/item/${id}`}>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item;