import Carousel from "./Carousel";
import a from '../assets/images/bags/bg.jpg'

const slides = [
    'https://www.pexels.com/photo/close-up-photo-of-person-holding-pizza-1653877/',
    'https://www.pexels.com/photo/close-up-photo-of-person-holding-pizza-1653877/',
    'https://www.pexels.com/photo/close-up-photo-of-person-holding-pizza-1653877/',
    'https://www.pexels.com/photo/close-up-photo-of-person-holding-pizza-1653877/',
    
]

export default function ImplementSlider (){
    return (
        <main className="App">
            <div className="max-w-lg">
                <Carousel outoSlide ={true} autoSlideInterval={1000}>
                    {slides.map((s) => (
                        <img src = {s} />
                    ))}
                </Carousel>
            </div>
        </main>
    )
}