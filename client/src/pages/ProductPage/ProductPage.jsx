import React, { useState } from 'react';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import { useGetProductDetailsQuery } from '../../services/productDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/reducers/shoppingCartSlice';

const ProductInfo = ({
    product: { name, type, vendor, tag, price, id, skuId, description, gallery },
}) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log('🚀 ~ file: ProductPage.jsx:15 ~ cartItems:', cartItems);

    const addToShoppingCart = () => {
        dispatch(
            addToCart({
                id,
                price,
                qty,
                skuId,
                description,
                imgUrl: gallery[0].imgUrl,
                total: Number(qty * price),
            })
        );
        setQty(1);
    };
    return (
        <div className='product-info'>
            <h4 className='product-type'>{name}</h4>
            <div className='product-price'>{price}$</div>
            <div className='product-description'>{description}</div>
            <div className='shopping-cart-counter'>
                <button
                    disabled={qty <= 1}
                    className='counter-btn'
                    onClick={() => setQty((prevCounter) => prevCounter - 1)}>
                    -
                </button>
                <span className='shopping-cart-counter-value'>{qty}</span>
                <button
                    className='counter-btn'
                    onClick={() => setQty((prevCounter) => prevCounter + 1)}>
                    +
                </button>
            </div>
            <div className='shopping-cart-btn'>
                <button onClick={addToShoppingCart} className='add-to-cart-btn'>
                    Add to Cart
                </button>
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
    const { data, error, isLoading } = useGetProductDetailsQuery(id);
    const product = data?.singleProduct || {};

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
