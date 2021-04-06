import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <a href="/home"><img className="logo" src={logo} alt="" /></a>
            <nav>
                <li>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/blog">Blog</a>
                </li>
            </nav>
        </div>
    );
};

export default Header;