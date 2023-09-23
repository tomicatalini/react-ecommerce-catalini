import "./style.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    const menues = [
        {id: 1, name: 'Inicio', active: true},
        {id: 2, name: 'Mujer', active: true},
        {id: 3, name: 'Hombre', active: true},
        {id: 4, name: 'Accesorios', active: true},
        {id: 5, name: 'Contacto', active: true},
    ]
    
    return(
        <div className="app-navbar">
            <header>
                <h1>Second Chance</h1>
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