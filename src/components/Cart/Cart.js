import React from 'react';

const Cart = (props) =>
{
    let quantity = 0;
    let total = 0;
    let shipping = 0;

    for (const product of props.cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }

    const tax = (total * 0.02);
    const grandTotal = (total + shipping + tax);
    return (
        <div className='border-2 border-green-400 rounded-md m-5 p-3 xl:fixed'>
            <h1 className='text-lg font-semibold text-center border-b-2 mb-3'>Order Summary</h1>
            <div className='ml-3'>
                <h2>Ordered Items: {quantity}</h2>
                <p>Items Price: ${total.toFixed(2)}</p>
                <p>Shipping Cost: ${shipping.toFixed(2)}</p>
                <p>Items Tax: ${tax.toFixed(2)}</p>
            </div>
            <h2 className='text-lg font-semibold text-center text-red-500 border-t-2 mt-3'>Order Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;