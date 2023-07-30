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
                    <Link to='/category/women'>Women</Link>
                    <Link to='/category/men'>Men</Link>
                    <Link to='/category/accessories'>Accessories</Link>
                    <Link to='/category/trendy'>Trendy</Link>
                    <Link to='/category/new'>New</Link>
                    <Link to='/category/sale'>Sale</Link>
                </div>
                <div className='nav-wrapper__logo'>
                    <Link to='/'>Kickbox</Link>
                </div>
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
