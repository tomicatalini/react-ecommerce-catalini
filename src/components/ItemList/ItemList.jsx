import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { formatPrice } from "../../utils/functions";

const ItemList = ({id, name, price, image}) => {
    const [fav, setFav] = useState(false);

    const addToFav = () => setFav(!fav);

    return (
        <Card className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col select-none hover:shadow-2xl" raised={true}>
            <CardMedia
                component="img"
                className="mx-auto my-2"
                sx={{height:150, backgroundSize: 'contain', width: 'auto', objectFit: 'fill'}}
                image={image}
                title={name}/>
            <CardContent className="flex-1">
                <Typography gutterBottom variant="h5" component="div">
                    { formatPrice(price) }
                </Typography>
                <Typography variant="body2" color="text.secondary" className="overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/item/${id}`}>
                    <Button size="small" variant="contained" color="primary">Detalle</Button>
                </Link>
                <IconButton color="primary" onClick={addToFav}>
                    {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ItemList;