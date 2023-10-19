import { save } from "./db/db-service";

//Category: Mujer, Hombre, Calzado, Pijamas
const products = [
    {
        name: 'Pantalón Palazzo Billabong Cintura Elástica Out Night Mujer',
        price: 12599,
        category: 'mujer',
        description: 'No importa dónde estés o lo que hagas. Cuando te pones este palazzo Out Night las vacaciones van con vos a donde sea. Confeccionado con fibrana estampada, inspirada en una linea donde las flores toman protagonismo con fondos oscuros. En esta temporada, relaja y disfruta de este modelo con caída holgada, fresca y con movimiento creando un look fantástico para cualquier ocasión. Expresa tu autenticidad de la mejor manera, y llévalo con vos a tus salidas, citas o momentos especiales.',
        stock: 14,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/pantalon-palazzo-billabong.webp?alt=media&token=14899fe3-9fb2-4d47-a875-e3575671d934'
    },
    {
        name: 'Zapatillas De Mujer Livianas Comodas Moda Nadin',
        price: 14999.04,
        category: 'calzado',
        description: ' En el modelo Nadin, el material puede variar dependiendo el color, en algunos tonos el material corresponde a gamuza, y en otros tonos el material corresponde a cuero ecologico.',
        stock: 2663,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/zapatilla-mujer-nadin.webp?alt=media&token=d1f5786b-7d99-4fc5-8dbf-9aec93667cc5'
    },
    {
        name: 'Campera Basical De Algodón Mujer 47 Street',
        price: 19999,
        category: 'mujer',
        description: 'Campera basica de frisa liviana. Bolsillo canguro. Cierre metalico color crudo. Cordon color crudo con puntera metalica. Largo a la primer cadera.',
        stock: 9,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/campera-mujer-47street.webp?alt=media&token=84438c5d-ce9c-4f50-8638-89bce5a60a11'
    },
    {
        name: 'Pijama Bloom Pompavana Manga Larga Morley Invierno Mujer',
        price: 27000,
        category: 'pijama',
        description: 'PIJAMA BLOOM POMPAVANA 2 PIEZAS DE MORLEY LIVIANO.Remera manga larga de morley.Pantalón de morley elastizado en cintura.Largo al tobillo. Detalle de bordado POMPALOVE.',
        stock: 40,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/pijama-mujer-invierno.webp?alt=media&token=8412d4c7-c7e0-437b-b21d-9d1ef7a5324a'
    },
    {
        name: 'Pack X3 Remera Deportiva Mujer Gdo Fit Running Ciclista',
        price: 9990,
        category: 'mujer',
        description: 'remera deportiva de mujer manga corta Gol De Oro fit® (corte femenino). Sirven para toda disciplina deportiva. entranamiento funcional, running, ciclismo, futbol, basquet, voley y mucho mas.',
        stock: 556,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/remera-deportiva-x3.webp?alt=media&token=6a0b0d8f-da13-4ac5-ba53-c6e1b1b3b72a'
    },
    {
        name: 'Zapatilla De Hombre Lacoste 45sma0150',
        price: 85000,
        category: 'calzado',
        description: 'No habra quien te pare con nuestras zapatillas Run Spin Evo. Inspiradas en el movimiento. Hechas para el movimiento. Lo ultimo en sofisticacion tecnica. Con el añadido de Lacoste.',
        stock: 86,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/zapatilla-hombre-lacoste.webp?alt=media&token=91c1bd7f-195e-47e6-a0d0-9d4e988344b5'
    },
    {
        name: 'Remera De Hombre Azul Lacoste Th2054',
        price: 22500,
        category: 'hombre',
        description: 'Remera De Hombre Azul Lacoste Th2054',
        stock: 12,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/remer-hombre-lacoste.webp?alt=media&token=8b1ed7e3-1ff4-4cfa-a721-62c363f34f99'
    },
    {
        name: 'Hoodie Puma Essentials Con Logo En El Pecho Para Hombre',
        price: 25764,
        category: 'hombre',
        description: 'Luce un clásico que es tan atemporal como listo para todos los días con el hoodie Puma con capucha Essentials. Confeccionada con algodón de origen sostenible, con una marca llamativa y todas las características de tu hoodie favorito, hay una razón por la que esta prenda es esencial.',
        stock: 145,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/campera-hombre-puma.webp?alt=media&token=49007410-401d-4739-a8f7-74fcd8ce26bd'
    },
    {
        name: 'Pantalon Puma Essentials Color Gris Con Logo Para Hombre',
        price: 22542,
        category: 'hombre',
        description: 'Cómodos y elegantes. Estos pantalones son todo lo que necesitas en tu armario. Corte normal. Prácticos bolsillos laterales para guardar tus pertenencias. Bajos acanalados. Cinturilla elástica con cordón de ajuste interior para un confort personalizado. Hecho de algodón y poliéster reciclado.',
        stock: 55,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/pantalon-hombre-puma.webp?alt=media&token=365ce310-eafd-4d71-a3b9-e693df0f2d46'
    },
    {
        name: 'Pantalon Puma Essentials Color Gris Con Logo Para Hombre',
        price: 22542,
        category: 'hombre',
        description: 'Cómodos y elegantes. Estos pantalones son todo lo que necesitas en tu armario. Corte normal. Prácticos bolsillos laterales para guardar tus pertenencias. Bajos acanalados. Cinturilla elástica con cordón de ajuste interior para un confort personalizado. Hecho de algodón y poliéster reciclado.',
        stock: 55,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/pantalon-hombre-puma.webp?alt=media&token=365ce310-eafd-4d71-a3b9-e693df0f2d46'
    },
    {
        name: 'Pijama Hombre 100% Algodon Verano',
        price: 7990,
        category: 'pijama',
        description: 'Pijama de hombre verano 100 % Algodón con fantasía. Excelente para los días mas calurosos, super frescos por la composición de la tela. Remera con maga corta en fantasí. Pantalón bermuda liso con bolsillo trasero.',
        stock: 12,
        image: 'https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/pijama-hombre-verano.webp?alt=media&token=f114ae08-7eb7-4d3b-9281-50b5e73321a8'
    },
];

export async function initilizeProductsCollection() {
    for(let prod of products){
        const newProd = await save('products', prod);
    }
}