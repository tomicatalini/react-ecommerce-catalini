import { useContext } from "react";
import { CartCtx } from "../../context/CartContext";
import Layout from "../../components/Layout/Layout";
import ItemCart from "../../components/ItemCart/ItemCart";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { formatPrice } from "../../utils/functions";
import { EmptyCart } from "../../components";

function CartContainer() {
  const { cart, total } = useContext(CartCtx);

  if(!cart || cart.length === 0){
    return (
      <Layout>
        <EmptyCart />
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container w-full md:min-h-[calc(100vh-4rem)] mx-auto p-4 flex flex-col md:flex-row gap-2 bg-white">
        <section className="w-full flex-1 md:flex-initial flex flex-col gap-2">
          {
            cart.map( 
                product => (
                  <ItemCart key={product.id} product={product}/>
                )
              )
          }
        </section>
        <section className="border w-full md:min-w-[250px] md:w-auto p-4 self-start rounded-md">
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex justify-between">Subtotal <span>{formatPrice(total)}</span></div>
            <div className="flex justify-between">Envio <span>Gratis</span></div>
            <div className="flex justify-between text-xl font-bold border-t pt-2 mt-4">Total <span>{formatPrice(total)}</span></div>
          </div>
          <Link to={'/checkout'}>
            <Button variant="contained" className="w-full">Comprar</Button>
          </Link>
        </section>
      </div>
    </Layout>
  )
}

export default CartContainer;