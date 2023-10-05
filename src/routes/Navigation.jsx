import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ItemListContainer, ItemDetailContainer } from '../pages'
import Home from '../pages/Home';

const routes = createBrowserRouter([
    { path: '/', element: <Home />},
    { path: '/item/:id', element: <ItemDetailContainer />},
    { path: '/category/:name', element: <ItemListContainer />},
])

const Navigation = () => {

    return (
        <RouterProvider router={routes}/>
    )
}

export default Navigation;