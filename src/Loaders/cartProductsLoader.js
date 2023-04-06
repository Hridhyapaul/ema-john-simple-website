import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    console.log(products)
    // get shopping cart from local storage.....
    const storedCart = getShoppingCart();
    const saveCart = [];
    console.log(storedCart);
    for(const id in storedCart){
        console.log(id)
        const addedProducts = products.find(pd => pd.id === id)
        console.log(addedProducts)
        if(addedProducts){
            const quantity = storedCart[id];
            console.log(quantity);
            addedProducts.quantity = quantity;
            console.log(addedProducts);
            saveCart.push(addedProducts);
        }
    }
    return saveCart;
}

export default cartProductsLoader;