import React from 'react';
import './ShoppingCart.scss';
import pdpGallery from '../../data/pdpGallery';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const shoppingCartItem = pdpGallery[0];
console.log('🚀 ~ file: ShoppingCart.jsx:4 ~ ProductGallery:', pdpGallery);

const ShoppingCartList = () => {
    return (
        <ul className='shopping-cart-list'>
            <li className='shopping-cart-li'>
                <div className='shopping-cart-li-img'>
                    <img src={shoppingCartItem.imgUrl} alt={shoppingCartItem.name} />
                </div>
                <div className='shopping-cart-li-info'>
                    <h4>Shirt</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                        amet vitae molestiae omnis culpa perferendis, eaque voluptate,
                        sapiente non voluptates ab error adipisci eius nostrum! Accusamus
                        maxime deserunt rerum dolores?
                    </p>
                    <span>1X19$</span>
                </div>
                <div className='shopping-cart-li-rmv-btn'>
                    <DeleteForeverIcon />
                </div>
            </li>
        </ul>
    );
};

function ShoppingCart({ isShoppingCartOpen, setIsShoppingCartActive }) {
    return (
        <div className={`shopping-cart-container ${isShoppingCartOpen ? 'active' : ''}`}>
            <div className='shopping-cart-header'>
                <h4>Products in your Cart</h4>
                <button
                    onClick={() => setIsShoppingCartActive(false)}
                    className='close-cart-btn'>
                    X
                </button>
            </div>
            <div className='sc-main'>
                <ShoppingCartList />
            </div>
            <div className='shopping-cart-footer'>
                <div className='subtotal'>Subtotal:</div>
                <div className='checkout-btn'>
                    <button>Proceed to Checkout</button>
                </div>
                <div className='reset-btn'>
                    <button>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
