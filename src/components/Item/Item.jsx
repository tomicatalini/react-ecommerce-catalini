import { Link } from "react-router-dom";

const Item = ({id, title, price, category, description, image}) => {

    return (
        <div>
            <img style={{width: '150px'}} src={image} alt="Product Image" />
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <p>{price}</p>
            <Link to={`/item/${id}`}>Ver Detalle del Producto</Link>
        </div>
    )
}

export default Item;