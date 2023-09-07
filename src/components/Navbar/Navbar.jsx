import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Navbar = () => {
    return(
        <div className="app-navbar">
            <header>
                <h1>Second Chance</h1>
                <span style={{fontStyle: 'italic'}}>ecommerce</span>
            </header>
            <div className="app-navbar-options">
                <ItemListContainer/>
                <CartWidget/>
            </div>
        </div>
    )
}

export default Navbar;