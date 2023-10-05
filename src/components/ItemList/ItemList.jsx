import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = ({id, title, price, image}) => {

    return (
        <Card className="col-span-12 sm:col-span-6 lg:col-span-3  flex flex-col" raised={true}>
            <CardMedia
                component="img"
                className="mx-auto my-2"
                sx={{height:150, backgroundSize: 'contain', width: 'auto', objectFit: 'fill'}}
                image={image}
                title={title}/>
            <CardContent className="flex-1">
                <Typography gutterBottom variant="h5" component="div">
                    $ {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/item/${id}`}>
                    <Button size="small" variant="contained" color="primary">Detalle</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default ItemList;