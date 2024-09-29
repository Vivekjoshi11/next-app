
import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';


const productCard = () => {
  return (
    <div className={styles.card}>
      
      <AddToCart />
    </div>
    
  )
}

export default productCard

// {/* <button onClick={() => console.log('Click')}> Add to cart</button> */}

// basically this file is server side rendering so if we use this directly or we use click event so it will give error
// so we need to use ('use client') thi wil convert this file to client side

// in this file we use another client side component so we use that here so we do not need to make this file as csr