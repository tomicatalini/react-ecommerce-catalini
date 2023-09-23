import { useEffect, useState } from "react";
import "./style.css";
import Spinner from "../utils/Spinner/Spinner";
import Item from "../Item/Item";
import { Link, useParams } from "react-router-dom";

//Contenedor de Productos
// Puede tener una categoria, la cual filtra los productos
const ItemListContainer = () => {
    const {name} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then( data => {
                if(name){
                    console.log(name);
                    setProducts(data.filter( product => product.category === name));
                } else {
                    setProducts(data);
                }
            })
            .catch(err => console.warn(err))
            .finally(() => setIsLoading(false));
    },[name]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data => {
                setCategorys(data);
                console.log(data);
            })
            .catch(err => console.warn(err));
    }, []);

    return (
        isLoading 
        ? <Spinner text={'Loading...'}>
            loading...
        </Spinner>
        : (
            <div>
                <div>
                    {
                        categorys.map( (category, index) => (
                            <Link key={index} to={`/category/${category}`} onClick={() => setIsLoading(true)}>{category}</Link>
                        ))
                    }
                </div>
                <div>
                    {
                        products.map( product => (
                            <Item key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                category={product.category}
                                description={product.description}
                                image={product.image}
                            />
                        ))
                    }
                </div>
            </div>
        )        
    )
}

export default ItemListContainer;