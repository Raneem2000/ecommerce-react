import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItems from '../data/discountItems.json'
import most from '../data/mostPopularItems.json'
import formatCurrency from './formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

const CartItem = ({id , quantity}) => {
    const {removeItemFromCart} = useShoppingCart()
    const item = storeItems.find ((i) => i.id === id) ||  most.find ((i) => i.id === id)
    if  (item==null) return
  return (
    <Stack 
    direction="horizontal" 
    className="d-flex align-item-center"
    gap ={2}>
    
    <img src ={item.imgUrl} alt='cart-img'
    style ={{ width :'75px' , height : '75px' ,objectFit : 'cover'}}
    />
    <div className='me-auto'>
        {item.name}
        {quantity > 1 && 
        (
        <span className='text-muted' style={{fontSize : '0.65rem'}}> *{quantity}</span>
        )}
        <div className='text-muted' style={{fontSize : "0.75rem"}} >
            {formatCurrency(item.price)}
        </div>
        <div>
            {formatCurrency(item.price * quantity)}
        </div>
    </div>
    <Button 
    variant='outline-danger' 
    size='sm' 
    onClick={()=>removeItemFromCart(id)}>
        &times;
    </Button>
    </Stack>
  )
}

export default CartItem