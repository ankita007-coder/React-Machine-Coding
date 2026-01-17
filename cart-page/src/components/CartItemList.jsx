import React from 'react'
import CartItem from './CartItem'

const CartItemList = ({cartItems}) => {

    
  return (
    <div>
      {
        cartItems.map((item)=><CartItem key={item.id} {...item}/>)
      }
    </div>
  )
}

export default CartItemList
