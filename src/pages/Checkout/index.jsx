import { Link } from "react-router-dom"

const Checkout = () => {
  return (
    <>
        <h1>Checkout Page</h1>
        <Link to={'/product/1'}>Detalle del Producto</Link>
        <br />
        <Link to={'/'}>Home</Link>
    </>
  )
}

export default Checkout