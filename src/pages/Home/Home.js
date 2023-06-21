import './Home.css'
import Hero from '../../sections/Hero/Hero';
import Discount from '../../sections/Discount/Discount';
import MostPopular from '../../sections/MostPopular/MostPopular'

const Home = () => {
    return (
    <>
        <Hero />
        <MostPopular/>
        <Discount/>
    </>
    );
}

export default Home