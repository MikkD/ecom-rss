import React from 'react';
import Card from '../../shared/Card/Card';
import { useGetProductsByCategoryQuery } from '../../services/categoryProducts';

function MainProducts({ title, description }) {
    //*Data Fetching
    const { data, error, isLoading } = useGetProductsByCategoryQuery(title);
    const { categoryProducts } = data || [];

    if (!categoryProducts?.length) return;
    if (error) return <h4>...Error:{error}</h4>;

    return isLoading ? (
        <h4>Loading...</h4>
    ) : (
        <div className='products'>
            {title && description && (
                <div className='products-description'>
                    <h5 className='products-title'>{title.toUpperCase()} Products</h5>
                    <p className='products-info'>{description}</p>
                </div>
            )}
            <div className='products-cards'>
                {categoryProducts.length &&
                    categoryProducts
                        .slice(0, 8)
                        .map((product) => <Card key={product.id} {...product} />)}
            </div>
        </div>
    );
}

export default MainProducts;
