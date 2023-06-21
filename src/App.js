import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import Store from './components/Store';
import About from './components/About';
import Contact from './components/Contact';
import Categorey from './components/Categorey';
// import {Navbar} from 'react-bootstrap';
import Navbar from './components/Navbar';
import ShoppingCartProvider from './context/ShoppingCartContext';
import Slider from './components/Slider/Slider';
import LoginForm from './components/Login/LoginForm';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <ShoppingCartProvider>
     {/* <Header/> */}
    <Navbar/>
    <Container className ="mb-4">
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login'  element={<LoginForm/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/contact' element={<ImageSlider/>}/> */}
        <Route path='/categorey' element={<Slider/>}/>

      </Routes>
    </Container>
     {/* <Footer/> */}
    </ShoppingCartProvider>
    </Router>
    
  )
}

export default App;
