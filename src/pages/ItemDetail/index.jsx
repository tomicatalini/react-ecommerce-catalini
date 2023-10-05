import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Spinner from "../../components/utils/Spinner/Spinner";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/Item/Item";
import { db } from '../../firebase/db/db'
import { doc, getDoc} from "firebase/firestore";

const ItemDetail = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({}); 

    useEffect(() => {

        const productRef = doc(db,"productos",id);

        getDoc(productRef)
            .then(res => {
                res.exists() && setProduct({id: res.id, ...res.data()});
                // if(res.exists()){
                //     const product = {id: res.id, ...res.data()}
                //     console.log(product);
                // }
            })
            .finally(()=>setIsLoading(false));

        // fetch(`https://fakestoreapi.com/products/${id}`)
        //     .then(res=>res.json())
        //     .then(data=>{
        //         data && setProduct(data);
        //     })
        //     .catch(err => console.warn(err))
        //     .finally(() => setIsLoading(false));
    }, []);

    return (
        
        isLoading
        ? <Spinner text={'loading...'}/>
        :   <Layout>
                <Item
                    id={product.id}
                    title={product.name}
                    price={product.price}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                />
            </Layout>
        
    )
}

export default ItemDetail