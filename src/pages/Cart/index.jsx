import { useContext } from "react";
import { CartCtx } from "../../context/CartContext";
import Layout from "../../components/Layout/Layout";
import ItemCart from "../../components/ItemCart/ItemCart";
import { Link } from "react-router-dom";

function CartContainer() {
  const {cart} = useContext(CartCtx);

  if(!cart || cart.length === 0){
    return (
      <Layout>
        <div>No hay productos</div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <section>
        {
          cart.map( 
              product => (
                <ItemCart key={product.id} product={product}/>
              )
            )      
        }
      </section>
      <Link to={'/checkout'}>
        <button>Comprar</button>
      </Link>
    </Layout>
  )
}

export default CartContainer;