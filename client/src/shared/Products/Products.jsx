import React from 'react';
import './Products.scss';
import Card from '../Card/Card';

function Products({ title, assets, description }) {
    if (!assets?.length) return;

    return (
        <div className='products'>
            {title && description && (
                <div className='products-description'>
                    <h5 className='products-title'>{title} Products</h5>
                    <p className='products-info'>{description}</p>
                </div>
            )}
            <div className='products-cards'>
                {assets.map((product) => (
                    <Card key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
