import CartItemList from './components/CartItemList'
import PriceSummary from './components/PriceSummary'
import Checkout from './components/Checkout'
import { useCart } from './context/CartProvider'

const CartPage = () => {
    const {cartItems} = useCart()
  return (
    <div className='cart'>
        <div className='list'>
            <CartItemList cartItems={cartItems}/>
        </div>  
        <div className='aside'>
            <PriceSummary/>
            <Checkout/>
        </div>    
    </div>
  )
}

export default CartPage
