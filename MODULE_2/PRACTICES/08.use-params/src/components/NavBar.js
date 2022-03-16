import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/foods'>Foods</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;