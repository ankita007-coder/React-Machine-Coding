import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartPage from './CartPage'
import CartProvider from './context/CartProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
    <CartPage/>
    </CartProvider>
  )
}

export default App
