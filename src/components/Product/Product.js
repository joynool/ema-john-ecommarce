import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) =>
{
    const { img, name, price, seller, stock, star } = props.products;
    return (
        <div className='flex items-center border-2 border-green-400 rounded-md m-5 p-3'>
            <img className='ml-5' src={img} alt={name} />
            <div className='ml-10'>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <p className='font-thin'>by: {seller}</p>
                <p className='font-thin'>Price: ${price}</p>
                <p className='font-thin'>only {stock} left in stock</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star text-yellow-500"
                    fullSymbol="fas fa-star text-yellow-500"
                    readonly
                >
                </Rating>
                <br />
                <button
                    onClick={() => props.addToCart(props.products)}
                    className='bg-green-500 text-white rounded-md shadow-md mt-5 mr-3 px-5 py-2 hover:bg-green-700'>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add To cart
                </button>
                <button
                    onClick={() => props.removeFromCart(props.products)}
                    className='bg-green-500 text-white rounded-md shadow-md mt-5 px-5 py-2 hover:bg-green-700'>
                    <FontAwesomeIcon icon={faTrash} /> Remove item
                </button>
            </div>
        </div>
    );
};

export default Product;