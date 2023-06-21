import './Hero.css';
import Store from '../../components/Store';
import girl from './i.jpg';
import Discount from './discount.png';
import mostPopular from './x.png';
import Wave from '../../components/Wave/Wave';

const Hero = () => {
    return (
    <div className='Hero'>
    <div className='hero-main'>
    
        <div className='hero-text'>
        <h2 className='beauty-heading'>@ fashion</h2>
        <div className='our'>
        <div className='mostPopular'>
            <img src={mostPopular} />
            <a href='#most'><h4 className='most-popular'> Most-Buy</h4></a>
        </div>
        <div className='Discount'>
            <img src={Discount} />
            <a href='#dis'><h4 className='Discounts'> Discounts </h4></a>
        </div>
        </div>
        </div>

        <div className= "girl">
            <img src={girl}/>
            </div>
            <div className="social-links">
        <a href="https://www.facebook.com"><i className="fab fa-facebook-f" style={{color:'#416da0'}}></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram" style={{color:'gray'}}></i></a>
        <a href="https://www.whatsapp.com"><i className="fab fa-whatsapp"   style={{color:'indianred'}}></i></a>
            </div>
        </div>
    <Wave/>

    </div>
    )}

export default Hero

{/*  door code
        <div className = 'door'>
        <div className= "door-front">
            <div className= "knob"></div>
        </div>
        <div className= "door-back">
            <div className= "rack"></div>
            <div className= "hat"></div>
            <div className= "jacket"></div>
        </div>
        <div className= "door-mat"></div>
        <div> */}