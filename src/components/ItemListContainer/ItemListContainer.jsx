import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import CategoryListContainer from "../CategoryListContainer/CategoryListContainer";
import ItemList from "../ItemList/ItemList";
import { CATEGORY_COLLECTION_NAME, PRODUCT_COLLECTION_NAME, getAll, getByFilter } from "../../firebase/db/db-service";


//Contenedor de Productos
// Puede tener una categoria, la cual filtra los productos
const ItemListContainer = () => {
    const {name} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        if(name){
            getByFilter(PRODUCT_COLLECTION_NAME, 'category', name)
            .then(persistedProducts => {
                setProducts(persistedProducts);            
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
            
        } else {

            getAll(PRODUCT_COLLECTION_NAME)
            .then(persistedProducts => {
                setProducts(persistedProducts);            
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

        }
    },[name]);

    useEffect(() => {
        getAll(CATEGORY_COLLECTION_NAME)
        .then(persistedCategories => {
            setcategories(persistedCategories);      
        })
        .catch(err => console.log(err));
    },[]);

    return (
        isLoading 
        ? <Spinner color={'orange'}/>
        : (
            <div>
                <CategoryListContainer current={name} categories={categories} load={setIsLoading} />
                <div className="container mx-auto my-8 px-24 grid grid-cols-12 grid-flow-row auto-rows-auto gap-8 transition-all ">
                        {
                            products.map( product => ( product.stock > 0 &&
                                <ItemList key={product.id}
                                    id={product.id}
                                    name={product.name}
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