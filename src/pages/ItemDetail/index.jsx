import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Spinner from "../../components/utils/Spinner/Spinner";
import Item from "../../components/Item/Item";
import Layout from "../../components/Layout/Layout";

const ItemDetail = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({}); 

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>{
                data && setProduct(data);
            })
            .catch(err => console.warn(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        
        isLoading
        ? <Spinner text={'loading...'}/>
        :   <Layout>
                <Item key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                />
            </Layout>
        
    )
}

export default ItemDetail