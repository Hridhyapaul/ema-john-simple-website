const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // Add Quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFromDb = (id) => {
    const storedCard = localStorage.getItem('shopping-cart');
    if(storedCard){
        const shoppingCart = JSON.parse(storedCard);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    const storedCard = localStorage.getItem('shopping-cart');
    if(storedCard){
        shoppingCart = JSON.parse(storedCard);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {addToDb, 
        removeFromDb, 
        getShoppingCart,
        deleteShoppingCart
    }