import React from 'react';
import logo from '../../images/logo.png';

const Header = () =>
{
    return (
        <div className='flex items-center justify-between bg-green-300 my-3 p-3'>
            <img className='h-14 ml-16' src={logo} alt="" />
            <nav>
                <a className='mr-2 text-2xl font-light hover:bg-gray-50 rounded p-2' href="/home">Home</a>
                <a className='mr-2 text-2xl font-light hover:bg-gray-50 rounded p-2' href="/register">Register</a>
                <a className='mr-2 text-2xl font-light hover:bg-gray-50 rounded p-2' href="/contact">Contact</a>
                <a className='mr-10 text-2xl font-light hover:bg-gray-50 rounded p-2' href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;