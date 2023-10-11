const ItemCart = ({product}) => {

    return (
        <div className="container flex items-center gap-4 mx-auto border">
            <img src={product.image} style={{width: '150px', height: '150px'}} />
            <div>
                <div>{product.price}</div>
                <div>{product.name}</div>
                <div>{product.description}</div>
            </div>
            <div>
                <div>{product.quantity}</div>
            </div>
        </div>
    )
}

export default ItemCart