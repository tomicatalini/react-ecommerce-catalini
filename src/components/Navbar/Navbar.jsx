import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    const menues = [
        {id: 1, name: 'Inicio', active: false},
        {id: 2, name: 'Mujer', active: false},
        {id: 3, name: 'Hombre', active: false},
        {id: 4, name: 'Accesorios', active: false},
        {id: 5, name: 'Contacto', active: false},
    ]
    
    return(
        <div className="app-navbar bg-violet-700">
            <header className="flex flex-row items-center gap-2">
                <h1 className="font-bold text-xl"><Link to={'/'}>Second Chance</Link></h1>
                <span style={{fontStyle: 'italic'}}>ecommerce</span>
            </header>
            <div className="app-navbar-options">
                <nav className="app-nav">
                    <ul>
                    {
                        menues.map( menu => {
                            if(menu.active){
                                return <li key={menu.id}>{menu.name}</li> 
                            }
                        })
                    }
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </div>
    )
}

export default Navbar;