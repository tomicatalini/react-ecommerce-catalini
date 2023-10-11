import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
// import { Avatar } from "@mui/material";

const Navbar = () => {
    const menues = [
        {id: 1, name: 'Inicio', active: false},
        {id: 2, name: 'Mujer', active: false},
        {id: 3, name: 'Hombre', active: false},
        {id: 4, name: 'Accesorios', active: false},
        {id: 5, name: 'Contacto', active: false},
    ]
    
    return(
        <header className="w-full h-16 px-4 flex flex-row items-center justify-between shadow-md">
            
            <Link to={'/'} className="flex flex-col text-orange-400">
                <h1 className="font-[family: 'Signika'] text-2xl tracking-wider">SECOND CHANCE</h1>
                <span className="m-0 ml-1 -mt-1 italic text-xs">ecommerce</span>
            </Link>

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
                <div className="flex flex-row gap-4">
                    <CartWidget/>
                    {/* <Avatar sx={{ bgcolor: deepOrange[400] }}>N</Avatar> */}
                </div>
            </div>
        </header>
    )
}

export default Navbar;