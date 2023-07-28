import React from 'react';
import featuredAssets from '../../data/featuredAssets.json';
import './FeaturedProducts.scss';
import Card from '../../shared/Card/Card';

function FeaturedProducts() {
    return (
        <div className='featured-products'>
            <div className='featured-products-description'>
                <h5 className='featured-products-title'>Featured Products</h5>
                <p className='featured-products-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                    suscipit numquam at non dolore obcaecati fuga, tempore nesciunt, odit
                    quidem ad repellendus voluptatem veritatis quaerat neque nam magni
                    exercitationem itaque.
                </p>
            </div>
            <div className='featured-products-cards'>
                {featuredAssets.map((product) => (
                    <Card key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
