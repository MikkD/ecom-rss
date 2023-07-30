import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='links'>
                    <div className='links__categories'>
                        <h5>Categories</h5>
                        <Link to='/category/women'>Women</Link>
                        <Link to='/category/men'>Men</Link>
                        <Link to='/category/accessories'>Accessories</Link>
                        <Link to='/category/trendy'>Trendy</Link>
                        <Link to='/category/new'>New</Link>
                        <Link to='/category/sale'>Sale</Link>
                    </div>
                    <div className='links__pages'>
                        <h5>Links</h5>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Pages</Link>
                        <Link to='/'>Stores</Link>
                        <Link to='/'>Cookies</Link>
                    </div>
                </div>
                <div className='info'>
                    <div className='about'>
                        <h5>About</h5>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsam fuga laborum numquam.
                        </div>
                    </div>
                    <div className='contact'>
                        <h5>Contact</h5>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptas minus corrupti.
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <div className='copyright'>Copyright 2023</div>
                <div className='payments'>
                    <img
                        src='/assets/pay-cards-footer.jpg'
                        width='150px'
                        alt='payments'
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
