import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatCurrency from './formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'
import './StoreItem.css'
const StoreItem = ( {id , price , name , imgUrl} ) => {
  const {getItemQuantity, increaseCartQuantity,decreaseCartQuantity, removeItemFromCart} = useShoppingCart ();
  const quantity = getItemQuantity(id);
  return (
    <Card className='h-100'>
        <Card.Img
        src={imgUrl} 
        variant="top" 
        style={{height:"200px" ,objectFit:"cover"}}/>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline'>
                <span className='fs-2'>{name}</span>
                <span>{formatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
              {quantity === 0 ? (
              <Button className='w-100' style={{backgroundColor:'indianred'}} onClick={()=>increaseCartQuantity(id)}>Add To Cart</Button>
            ) : (
              <div className='d-flex align-items-center flex-column'
              style={{gap:'0.5rem'}}>
              <div className='d-flex align-items-center justify-content-center'
              style={{gap:'0.5rem'}}>
                <Button size='sm' style={{backgroundColor:'#416da0'}} onClick={()=>decreaseCartQuantity(id)}>-</Button>
                <span className='fs-3'>{quantity} in Cart</span>
                <Button size='sm'style={{backgroundColor:'#416da0'}} onClick={()=>increaseCartQuantity(id)}>+</Button>
              </div>
              <Button  size='sm' style={{backgroundColor:'red'}} onClick={()=>removeItemFromCart(id)}>
                Remove</Button>
              </div> 
              )}
            </div>
        </Card.Body>
    </Card>
    
  )
}

export default StoreItem