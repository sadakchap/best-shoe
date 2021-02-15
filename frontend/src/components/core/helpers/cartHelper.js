export const loadCart = () => {
    if(typeof window !== undefined){
        const cart = JSON.parse(localStorage.getItem('cart'));
        return cart ? cart : [];
    }
};

export const addItemToCart = (product) => { 
    let cart = [];
    if(typeof window !== undefined){
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        cart.push({
            ...product,
            count: 1
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

export const removeItemFromCart = (product) => {
    let cart = [];
    if(typeof window !== undefined){
        cart = JSON.parse(localStorage.getItem('cart'));
        cart = cart.filter(item => item._id !== product._id);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

export const itemInCart = (productId) => {
    let cart = loadCart();
    if(!cart){
        return false;
    }
    for (let idx = 0; idx < cart.length; idx++) {
        const item = cart[idx];
        if(item._id === productId){
            return true;
        }
    }
    return false;
};

export const getTotalAmount = () => {
    const cart = loadCart();
    if(!cart){
        return 0;
    }
    let totalAmount = 0;
    for (let idx = 0; idx < cart.length; idx++) {
        const item = cart[idx];
        totalAmount += parseInt(item.price);
    }
    return totalAmount;
};

export const emptyCart = () => {
    if(typeof window !== undefined){
        return localStorage.removeItem('cart');
    }
};