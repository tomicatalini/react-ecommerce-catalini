import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {    
    return(
        <header className="relative z-50 shadow-md w-full h-16 px-4 flex flex-row items-center justify-between bg-white">
            
            <Link to={'/'} className="flex flex-col text-orange-400">
                <h1 className="font-[family: 'Signika'] text-2xl tracking-wider">SECOND CHANCE</h1>
                <span className="m-0 ml-1 -mt-1 italic text-xs">ecommerce</span>
            </Link>

            <div className="app-navbar-options">                
                <div className="flex flex-row gap-4">
                    <CartWidget/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;