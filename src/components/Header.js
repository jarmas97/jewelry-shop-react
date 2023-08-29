import React, { useState } from 'react';
import '../style.css';

import { Link } from 'react-router-dom';

export default function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (

        <header className="header">

            <Link to="/"> <img className="logo" src="logo.png" alt="logo" /> </Link>

            <nav className="menu">

            <Link className='link-button' to="/">Home</Link>

            <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>

                <Link className='link-button'>Categories</Link>

                {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link className='link-button' to="/rings">Rings</Link></li>
                            <li><Link className='link-button' to="/earrings">Earrings</Link></li>
                            <li><Link className='link-button' to="/necklaces">Necklaces</Link></li>
                            <li><Link className='link-button' to="/bracelets">Bracelets</Link></li>
                        </ul>
                    )
                }

            </div>

            <Link className='link-button' to="/collections">Collections</Link>

            <Link className='link-button' to="/about">About</Link>

          </nav>

        </header>
      );
}

