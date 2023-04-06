import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const cart = useLoaderData();
    // console.log(product)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h3>This is Order page: {cart.length}</h3>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;