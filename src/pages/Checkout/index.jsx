import { useState } from "react"
import { Link } from "react-router-dom"
import Spinner from "../../utils/components/Spinner/Spinner";
import Layout from "../../components/Layout/Layout";

const order = {
  buyer: { name: 'John Doe',
    phone: '1155488965',
    email: 'johndoe@example.com'
  },
  items: [],
  total: 0
}

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    isLoading
    ? <Spinner text={'loading...'}/>
    : <Layout>
        
      </Layout>
  )
}

export default Checkout