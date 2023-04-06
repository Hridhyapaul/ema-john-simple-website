import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../Utilitties/FakeDb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();

    }
    // console.log(product)
    return (
        <div className='review-container'>
            <div className='items-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to="/proceedCheckout" className='link'>
                        <button className='review-proceed'>
                            <span>Checkout</span>
                            <FontAwesomeIcon icon={faMoneyCheckAlt} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;