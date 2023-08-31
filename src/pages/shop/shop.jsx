import React from 'react'
import { PRODUCTS } from '../../products';
import Productui from './productui';
import './shop.css'

const Shop = () => {
  return (
    <div className='shop'>
    <div className='shopTitle'>
    <h1>ShopMaster</h1>
    </div>

    <div className='products'>
    {PRODUCTS.map((elementofPRODUCTarray)=>{ return <Productui  data ={elementofPRODUCTarray} />})}
    </div>
    </div>
  )
}

export default Shop;