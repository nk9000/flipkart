import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import CartItemUi from './cartitemui';
const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className='cart'>

    <div className='title'>
    <h1>Your Cart Items</h1>
    </div>

    <div className='products'>
    {PRODUCTS.map((product)=>{
      if(cartItems[product.id]!==0)
      {
        return <CartItemUi data ={product} />
        //we will create seprate file to create those products
      }
    })}
    </div>
    { getTotalCartAmount()>0 ?
    
    <div className='checkout'>
    <p>Subtotal: ${getTotalCartAmount()}</p>
    <button>Continue Shopping</button>
    <button>CheckOut</button>
    </div>
  :
  <h1>Empty</h1>
  
  
  }


    </div>
  )
}

export default Cart