import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="head-section">
            <h2>Alamin cheating room</h2>
            <nav>
                <a href="/post">Home</a>
                <a href="/about">About</a>
            </nav>
            
        </div>
    );
};

export default Header;