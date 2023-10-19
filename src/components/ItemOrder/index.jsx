import { formatPrice } from "../../utils/functions";

const ItemOrder = ({product}) => {
  return (
    <div className="h-20 flex items-center gap-2 p-2 text-sm">
        <picture className="h-full w-20">
            <img src={product.image} className="w-full h-full object-contain" />
        </picture>
        <div>
            <p>{product.name}</p>
            <p className="text-gray-500">Cantidad: {product.quantity}</p>
            <p className="text-gray-500 mt-2">{formatPrice(product.price)} c/u</p>
        </div>
    </div>
  )
}

export default ItemOrder;
