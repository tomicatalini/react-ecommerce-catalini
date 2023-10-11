import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ItemListContainer, ItemDetailContainer, Checkout } from '../pages'
import Home from '../pages/Home';
import CartContainer from '../pages/Cart';

const routes = createBrowserRouter([
    { path: '/', element: <Home />},
    { path: '/item/:id', element: <ItemDetailContainer />},
    { path: '/category/:name', element: <ItemListContainer />},
    { path: '/cart', element: <CartContainer />},
    { path: '/checkout', element: <Checkout />},
])

const Navigation = () => {

    return (
        <RouterProvider router={routes}/>
    )
}

export default Navigation;