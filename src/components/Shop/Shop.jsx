import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../Utilitties/FakeDb';
import './shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //Step 1: get id of the added product....
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            //Step 2: get product by using id....
            if(addedProduct){
                //Step 3: added quantity....
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                //step 4: add the added product to the saved cart....
                savedCart.push(addedProduct)
            }
            // console.log(addedProduct)
        }
        // step 5: set the cart....
        setCart(savedCart);
    },[products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to="/order review" className='link'>
                        <button className='review-proceed'>
                            <span>Review Order</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;