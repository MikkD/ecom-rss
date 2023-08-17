import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Navbar.scss';
import { useSelector } from 'react-redux';

function Navbar() {
    const [isShoppingCartOpen, setIsShoppingCartActive] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalNumberOfCartItems = cartItems.reduce(
        (acc, cartItem) => acc + cartItem.qty,
        0
    );
    const grandTotal = cartItems.reduce((acc, cartItem) => acc + cartItem.total, 0);

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
                        <div
                            className='cart-icon'
                            onClick={() => setIsShoppingCartActive(true)}>
                            <ShoppingCartIcon />
                            <div className='cart-icon-counter'>
                                {totalNumberOfCartItems}
                            </div>
                        </div>
                    </div>
                </div>
                <ShoppingCart
                    grandTotal={grandTotal}
                    cartItems={cartItems}
                    isShoppingCartOpen={isShoppingCartOpen}
                    setIsShoppingCartActive={setIsShoppingCartActive}
                />
            </nav>
        </header>
    );
}

export default Navbar;
