import { useEffect, useState } from "react";
import "./style.css";
import Spinner from "../utils/Spinner/Spinner";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import CategoryListContainer from "../CategoryListContainer/CategoryListContainer";
import ItemList from "../ItemList/ItemList";

//Contenedor de Productos
// Puede tener una categoria, la cual filtra los productos
const ItemListContainer = () => {
    const {name} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setcategories] = useState([]);

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
                setcategories(data);
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
                <CategoryListContainer categories={categories} load={setIsLoading}/>
                <div className="m-8 grid grid-cols-12 grid-flow-row auto-rows-auto gap-8">
                    {
                        products.map( product => (
                            <ItemList key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
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