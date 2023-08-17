import React from 'react';
import { clearCart } from '../../redux/reducers/shoppingCartSlice';
import './ShoppingCart.scss';
import { useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeFromCart } from '../../redux/reducers/shoppingCartSlice';

const ShoppingCartList = ({ cartItems, dispatch }) => {
    return (
        <ul className='shopping-cart-list'>
            {cartItems.map((cartItem) => (
                <li key={cartItem.id} className='shopping-cart-li'>
                    <div className='shopping-cart-li-img'>
                        <img src={cartItem.imgUrl} alt={cartItem.name} />
                    </div>
                    <div className='shopping-cart-li-info'>
                        <h4>{cartItem.name}</h4>
                        <p>{cartItem.description}</p>
                        <span>
                            {cartItem.qty} X {cartItem.price}$
                        </span>
                    </div>
                    <div
                        onClick={() => dispatch(removeFromCart(cartItem.id))}
                        className='shopping-cart-li-rmv-btn'>
                        <DeleteForeverIcon />
                    </div>
                </li>
            ))}
        </ul>
    );
};

function ShoppingCart({
    isShoppingCartOpen,
    setIsShoppingCartActive,
    cartItems,
    grandTotal,
}) {
    const dispatch = useDispatch();

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
                <ShoppingCartList cartItems={cartItems} dispatch={dispatch} />
            </div>
            <div className='shopping-cart-footer'>
                <div className='subtotal'>Subtotal:{grandTotal}</div>
                <div className='checkout-btn'>
                    <button disabled={!cartItems.length}>Proceed to Checkout</button>
                </div>
                <div className='reset-btn'>
                    <button onClick={() => dispatch(clearCart())}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
