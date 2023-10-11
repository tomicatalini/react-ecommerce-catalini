import { useContext } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { CartCtx } from "../../context/CartContext";

const CartWidget = () => {
    const { itemsCount } = useContext(CartCtx);

    return(
        <Link to={'/cart'}>
            <IconButton color="warning">
                <Badge badgeContent={itemsCount} color="warning">
                    <ShoppingCartOutlinedIcon fontSize="large" color="action"/>
                </Badge>
            </IconButton>
        </Link>
    )
}

export default CartWidget;