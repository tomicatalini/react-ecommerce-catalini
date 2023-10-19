export const formatPrice = (number) => {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number)

    return formattedPrice;
}