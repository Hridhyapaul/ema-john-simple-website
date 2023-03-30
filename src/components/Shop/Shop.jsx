import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../Utilitties/FakeDb';
import './shop.css'

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
            console.log(addedProduct)
        }
        // step 5: set the cart....
        setCart(savedCart);
    },[products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;