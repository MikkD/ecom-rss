import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, price, name, imgUrl, isNew, type }) => {
    return (
        <Link to={`/product/${id}`}>
            <div className='card'>
                <div className='card-img-wrapper'>
                    <img className='card-img' src={imgUrl} alt={name} />
                    {isNew && <div className='new-product-label'>New Product</div>}
                </div>
                <div className='card-info'>
                    <p>Type: {type}</p>
                    <p>{name}</p>
                    <span>{price}$</span>
                </div>
            </div>
        </Link>
    );
};
export default Card;
