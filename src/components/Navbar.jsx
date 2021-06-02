import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <a href="/" className="brand-logo">Redux-thunk</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Todo list</a></li>
                    <li><a href="/">About us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
