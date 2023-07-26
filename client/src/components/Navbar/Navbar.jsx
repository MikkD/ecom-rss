import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss';

function Navbar() {
    return (
        <header>
            <nav className='nav-wrapper'>
                <div className='nav-wrapper__categories'>
                    <Link to='/women'>Women</Link>
                    <Link to='/men'>Men</Link>
                    <Link to='/accessories'>Accessories</Link>
                </div>
                <div className='nav-wrapper__logo'>Kickbox</div>
                <div className='nav-wrapper__pages'>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/stores'>Stores</Link>
                    <div className='icons'>
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className='cart-icon'>
                            <ShoppingCartIcon />
                            <div className='cart-icon-counter'>1</div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
