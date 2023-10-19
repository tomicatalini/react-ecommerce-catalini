import { Link } from "react-router-dom"
import { EmptyCartSvg } from "../../assets/svg/EmptyCartSvg"

const EmptyCart = () => {
  return (
    <div className={'w-full h-[calc(100vh-8rem)] container mx-auto flex flex-col md:flex-row items-center justify-center gap-8'}>
      <picture className="w-60">
        <EmptyCartSvg fillColor="fill-orange-200" stokeColor="stroke-orange-200" />
      </picture>
      <div className="flex flex-col gap-2 text-center ">
        <div className={'text-3xl font-bold'}>El carrito esta <strong>vacio</strong></div>
        <div className={'text-lg mt-auto'}>Visitá <Link to={'/'} className="text-orange-400 font-semibold underline decoration-2 decoration-orange-400">nuestro catálogo</Link> y suma productos al carrito!</div>
      </div>
    </div>
  )
}

export default EmptyCart