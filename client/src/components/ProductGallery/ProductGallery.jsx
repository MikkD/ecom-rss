import React, { useState } from 'react';
import './ProductGallery.scss';

const ProductGallery = ({ galleryItems }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    return (
        <div className='product-gallery'>
            <div className='gallery-side-list'>
                {galleryItems.map((img, idx) => (
                    <img
                        onMouseEnter={() => setActiveIdx(idx)}
                        className={`product-gallery-side-list-img ${
                            idx === activeIdx ? 'active' : ''
                        }`}
                        key={img.id}
                        src={img.imgUrl}
                        alt={img.name}
                    />
                ))}
            </div>
            <div className='main-gallery-view'>
                <img
                    className='main-gallery-view-img'
                    src={`${galleryItems[activeIdx].imgUrl}`}
                    alt='main-gallery'
                />
            </div>
        </div>
    );
};

export default ProductGallery;
