import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { CartCtx } from "../../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartCtx);
  

  return (
    <Layout>
      <div>Checkout</div>
      <h1>TODO</h1>
      <ul>
        <li>Listar todos los productos</li>
        <li>Totalizar</li>
        <li>
            Crear order
            <ul>
              <li>Pedir datos</li>
              <li>Obtener Id Orden</li>
            </ul>
        </li>
        <li>Mostar ID Orden</li>
      </ul>
    </Layout>
  )
}

export default Checkout