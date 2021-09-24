import React, { useEffect, useState } from 'react';
import { addToLS, getStoredCart, removeFromLS } from '../../utility/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () =>
{
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() =>
    {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data =>
            {
                setProducts(data);
                setDisplayProducts(data)
            });
    }, []);

    useEffect(() =>
    {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const items = products.find(product => product.key === key);
                if (items) {
                    items.quantity = savedCart[key];
                    storedCart.push(items);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    const addToCart = product =>
    {
        setCart([...cart, product]);
        addToLS(product.key);
    }

    const removeFromCart = product =>
    {
        removeFromLS(product.key);
        setCart([]);
    }

    const handleSearch = event =>
    {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProduct);
    }

    return (
        <>
            <div className='ml-80'>
                <input
                    className=' w-2/5 border-2 border-green-500 rounded-md p-1 m-2'
                    type="text"
                    placeholder="search products"
                    onChange={handleSearch} />
            </div>
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            products={product}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />)
                    }
                </div>
                <div className='col-span-3 border-l-2 border-gray-300'>
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    );
};

export default Shop;