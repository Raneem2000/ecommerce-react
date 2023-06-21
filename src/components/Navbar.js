import React from 'react'
import './Navbar.css'
import logo from '../assets/images/girl/logo.png'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
  const {openCart , cartQuantity} = useShoppingCart()
  return (
    <>
  <nav className="navbar">
  <div className="navbar-left">
    <a href="#" className="logo"><img src={logo} alt=""/></a>
  </div>
  <div className="navbar-middle">
    <ul className="nav-links">
      
      <li><Link to="/">Home</Link></li>
      <li><Link to="/store">Store</Link></li>
      <li><Link to="/Contact">Contact Us</Link></li>
      <li className="dropdown">
        <Link to ="/categorey">Categorey</Link>
        <ul className="dropdown-menu">
          <li><a href="#">bags</a></li>
          <li><a href="#">shoes</a></li>
          <li><a href="#">gifts</a></li>
        </ul> 
      </li>
    </ul>
    
  </div>
  <div className="navbar-right">
    <a href="#" className="login-icon">
      <i className="fa fa-shopping-cart" onClick={openCart}>
        <span className ="cart-count">
      {cartQuantity} </span></i></a>
    <Link to ='/login' className="login-icon"><i className="fa fa-user"></i></Link>
  </div>
</nav>

</>
  )
}

export default Navbar