'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
      <button onClick={() => console.log('Click')}> Add to cart</button>
    </div>
  )
}

export default AddToCart


// or else if you want to use that file as a ssr so u make file liek this and make a component so you don't have to use csr to that file 
// from this file you can use this component  to that file