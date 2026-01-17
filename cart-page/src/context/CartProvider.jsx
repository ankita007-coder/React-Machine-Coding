import React, { createContext, useContext, useState } from 'react'
import { productList } from '../utils/product';

const CartContext = createContext()

export const useCart = ()=> useContext(CartContext)

const CartProvider = ({children}) => {

    const [cartItems,setCartItems] = useState(productList);

    const updateQuantity = (id,qty)=>{
      setCartItems(prev=>prev.map(item=>item.id===id? {...item,qty}:item))
    }

    const removeItem = (id)=>{
        setCartItems(prev=>prev.filter(item=>item.id!==id))
    }
  return (
    <CartContext.Provider value={{cartItems,updateQuantity,removeItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
