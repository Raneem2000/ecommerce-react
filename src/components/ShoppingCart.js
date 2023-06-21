import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import formatCurrency from './formatCurrency'
import storeItems from '../data/discountItems.json'
import most from '../data/mostPopularItems.json'

const ShoppingCart = ({isOpen}) => {
    const {cartItems , closeCart} = useShoppingCart()
  return ( 
    <Offcanvas show ={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title> 
        </Offcanvas.Header>
        <Offcanvas.Body>
    {cartItems.map((item) => (
        <CartItem key ={item.id} {...item}/>
    ))}
    
    {formatCurrency (
        cartItems.reduce((total , cartItems) => {
                const item = storeItems.find((i) => i.id === cartItems.id) ||  most.find ((i) => i.id === cartItems.id)
                return total + (item?.price || 0) * cartItems.quantity;
        } , 0)
    )}
        </Offcanvas.Body>
    </Offcanvas>
  )
}
// [ to show total price */]

export default ShoppingCart
