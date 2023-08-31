import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

const CartItemUi = ({data}) => {
    const {id , productName , price , thumbnail , description , brand , category } = data;
    const { cartItems ,addToCart , removeFromCart , updateCartItemCount } = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={thumbnail} />
        <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>
           ${price}
        </p>
        <div className='countHandler'>
        <button onClick={()=>removeFromCart(id)}>-</button>
        <input value={cartItems[id]}  onChange={(e)=> updateCartItemCount(Number(e.target.value) , id)} />
        <button onClick={()=>addToCart(id)}>+</button>
        </div>
        </div>
    </div>
  )
}

export default CartItemUi