import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null);
// in this file we make add to cart and remove from cart function and we can use this later
const getDefaultCart = () => {
    let cart = []
    //isko bada se change karke dekho
    // cart is empty object
    for(let i = 1; i<PRODUCTS.length+1 ; ++i)
    {
        cart[i] = 0
        //initially in our cart every shoping accesories is not present
    }
    return cart;
}



const ShopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart());
//setcartitems is an object here in which initially nothing is present
//on first click itemid changes from 0 to 1
    const addToCart = (itemid) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            updatedCart[itemid] = prev[itemid] + 1;
            return updatedCart;
            
        })
    }
// this commented add to cart aloes does the same thing
    // const addToCart = (itemid) => {
    //     setCartItems((prev) => {
    //         return(
    //             {...prev , [itemid]: prev[itemid] + 1}
    //         )
    //     })
    // }

    const removeFromCart =(itemid)=> {
        setCartItems((prev) => {
            return(
                {...prev , [itemid]: prev[itemid] - 1}
            )
        })
    }

    const updateCartItemCount =(newAmount , itemid)=>{
        setCartItems((prev) =>({...prev , [itemid]:newAmount}));
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = PRODUCTS.find((product)=>product.id === Number(item))
                total+= cartItems[item] * itemInfo.price
            }
        }
        return total;
    }


    const contextValue = {cartItems,addToCart,removeFromCart  , updateCartItemCount  ,  getTotalCartAmount }
    //feature pass karne ke liye aisa karna hota hai ,raat lo,object wagera se lena dena nhi hai

    console.log(cartItems);
  return (
    <ShopContext.Provider  value={contextValue} >
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider