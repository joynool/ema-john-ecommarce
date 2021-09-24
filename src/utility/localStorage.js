const addToLS = key =>
{
    const exists = localStorage.getItem('cart');
    let cart = {};
    if (!exists) {
        cart[key] = 1;
    } else {
        cart = JSON.parse(exists);
        if (cart[key]) {
            cart[key] = cart[key] + 1;
        } else {
            cart[key] = 1;
        }
    };
    localStorage.setItem('cart', JSON.stringify(cart));
};

const removeFromLS = key =>
{
    const exists = localStorage.getItem('cart');
    if (!exists) {
        return;
    } else {
        const cart = JSON.parse(exists);
        delete cart[key];
        localStorage.setItem('cart', JSON.stringify(cart));
    };
};

const getStoredCart = () =>
{
    const exists = localStorage.getItem('cart');
    return exists ? JSON.parse(exists) : {};
};

const clearTheCart = () =>
{
    localStorage.removeItem('cart');
};

export { addToLS, removeFromLS, getStoredCart, clearTheCart }