import { useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const [count, setCount] = useState(1);

    return(
        <Link to={'/'}>
            <IconButton color="warning">
                <Badge badgeContent={count} color="warning">
                    <ShoppingCartOutlinedIcon fontSize="large" color="action"/>
                </Badge>
            </IconButton>
        </Link>
    )
}

export default CartWidget;