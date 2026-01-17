import React from 'react'
import { useCart } from '../context/CartProvider'

const PriceSummary = () => {

  const {cartItems}=useCart();

  const subTotalPrice = cartItems.reduce((acc,item)=>acc+(item.price*item.qty),0);
  const tax = (subTotalPrice*0.05).toFixed(2)
  const totalPrice = Number(subTotalPrice)+Number(tax)
  return (
    <div className='price-card'>
      <p>Subtotal: Rs.{subTotalPrice}</p>
      <p>Tax: {tax}</p>
      <h3>Total: {totalPrice}</h3>
    </div>
  )
}

export default PriceSummary
