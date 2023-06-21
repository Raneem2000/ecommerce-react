
import {ProductCard } from '../../components/index';
import products from '../../Data/CardData';
const ProductCards = () => {


    const cards = products.map(card => {
        return <ProductCard key={card.id} imageSrc ={card.imageSrc} price={card.price} description={card.description} productName={card.productName} />
    })

    return (
        {cards}
    )
}

export default ProductCards