import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Spinner from "../../components/Spinner/Spinner";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/ItemDetail/ItemDetail";
import { PRODUCT_COLLECTION_NAME, get } from "../../firebase/db/db-service";

const ItemDetail = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({}); 

    useEffect(() => {
        
        get(PRODUCT_COLLECTION_NAME,id)
            .then(res => setProduct(res))
            .catch(error => console.warn(error))
            .finally(()=>setIsLoading(false));
    }, [id]);

    return (
        
        isLoading
        ? <Spinner color={'orange'}/>
        :   <Layout>
                <Item product={product}/>
            </Layout>
        
    )
}

export default ItemDetail