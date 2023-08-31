import React, { useContext } from 'react'
import './shop.css'
import { ShopContext } from '../../context/shop-context';

const Productui = ({data}) => {
    const {id , productName , price , thumbnail , description , brand , category } = data;
    const { addToCart , cartItems } = useContext(ShopContext);
    const amount = cartItems[id];
  return (
    <div className='product'>
        <img src={thumbnail} />
    <div className='description'>
        <p>
           <h2><i>{brand}</i></h2> 
        </p>
        <p>
            <b><h2>{productName}</h2></b>
        </p>
        <p>
            <h3>Category:{category}</h3> 
        </p>
        <p>
            ${price}
        </p>
        <button className='addToCartBttn' onClick={()=>addToCart(id)} >
            Add to Cart 
            {amount>0 && <div>({amount})</div>}
        </button>
        <p>
            {description}
        </p>
    </div>   
    </div>
    
  )
}

export default Productui