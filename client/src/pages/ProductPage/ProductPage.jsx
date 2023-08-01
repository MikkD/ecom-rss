import React, { useState } from 'react';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import pdpGallery from '../../data/pdpGallery';
import ProductGallery from '../../components/ProductGallery/ProductGallery';

function ProductPage() {
    // TODO ADD BE CALL TO GET SINGLE PRODUCT DATA
    const { id } = useParams();
    console.log('🚀 ~ file: ProductPage.jsx:7 ~ ProductPage ~ name:', id);
    return (
        <div className='product-details-container'>
            <ProductGallery galleryItems={pdpGallery} />
            <div className='product-info'>
                <h4 className='product-type'>Long Sleeve</h4>
                <div className='product-price'>20$</div>
                <div className='product-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                    soluta, architecto dolores, fugit veritatis praesentium impedit
                    consectetur recusandae corrupti non incidunt amet rem culpa nemo
                    eveniet nobis! Quos, ullam nisi?
                </div>
                <div className='shopping-cart-counter'>
                    <button className='counter-btn'>-</button>
                    <span className='shopping-cart-counter-value'>1</span>
                    <button className='counter-btn'>+</button>
                </div>
                <div className='shopping-cart-btn'>
                    <button className='add-to-cart-btn'>Add to Cart</button>
                </div>
                <div className='product-extra-info'>
                    <p>Vendor:Polo</p>
                    <p>Product Type:Polo</p>
                    <p>Tag:T-shirt,Men</p>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
