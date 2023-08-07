import React, { useState } from 'react';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import { useGetProductDetailsQuery } from '../../services/productDetails';

const ProductInfo = ({
    product: { name, type, vendor, tag, price, id, skuId, description },
}) => {
    const [counter, setCounter] = useState(1);

    return (
        <div className='product-info'>
            <h4 className='product-type'>{name}</h4>
            <div className='product-price'>{price}$</div>
            <div className='product-description'>{description}</div>
            <div className='shopping-cart-counter'>
                <button
                    disabled={counter === 1}
                    className='counter-btn'
                    onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
                    -
                </button>
                <span className='shopping-cart-counter-value'>{counter}</span>
                <button
                    className='counter-btn'
                    onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
                    +
                </button>
            </div>
            <div className='shopping-cart-btn'>
                <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
            <div className='product-extra-info'>
                <p>Vendor:{vendor}</p>
                <p>Product Type:{type}</p>
                <p>Tag:{tag}</p>
            </div>
        </div>
    );
};

function ProductPage() {
    const { id } = useParams();
    const { data: product, error, isLoading } = useGetProductDetailsQuery(id);

    return error ? (
        <h4>Error...</h4>
    ) : isLoading ? (
        <h4>Loading...</h4>
    ) : (
        <div className='product-details-container'>
            <ProductGallery galleryItems={product.gallery} />
            <ProductInfo product={product} />
        </div>
    );
}

export default ProductPage;
