import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Spinner from "../../utils/components/Spinner/Spinner";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/ItemDetail/ItemDetail";
import { get } from "../../firebase/db/db-service";

const ItemDetail = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({}); 

    useEffect(() => {
        
        get("productos",id)
            .then(res => setProduct(res))
            .catch(error => console.warn(error))
            .finally(()=>setIsLoading(false));
    }, [id]);

    return (
        
        isLoading
        ? <Spinner text={'loading...'}/>
        :   <Layout>
                <Item product={product}/>
            </Layout>
        
    )
}

export default ItemDetail