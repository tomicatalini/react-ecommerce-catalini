import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ItemListContainer, ItemDetailContainer, Checkout, ErrorPage } from '../pages'
import Home from '../pages/Home';
import CartContainer from '../pages/Cart';

const routes = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <ErrorPage />},
    { path: '/item/:id', element: <ItemDetailContainer />, errorElement: <ErrorPage />},
    { path: '/category/:name', element: <ItemListContainer />, errorElement: <ErrorPage />},
    { path: '/cart', element: <CartContainer />, errorElement: <ErrorPage />},
    { path: '/checkout', element: <Checkout />, errorElement: <ErrorPage />},
])

const Navigation = () => {

    return (
        <RouterProvider router={routes}/>
    )
}

export default Navigation;