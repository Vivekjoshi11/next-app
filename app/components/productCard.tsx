// 'use client';
import React from 'react'
import AddToCart from './AddToCart';

const productCard = () => {
  return (
    <div>
      {/* <button onClick={() => console.log('Click')}> Add to cart</button> */}
      <AddToCart />
    </div>
  )
}

export default productCard


// basically this file is server side rendering so if we use this directly or we use click event so it will give error
// so we need to use ('use client') thi wil convert this file to client side

// in this file we use another client side component so we use that here so we do not need to make this file as csr