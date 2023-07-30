import React from 'react';
import { useParams } from 'react-router-dom';
import menCategoryAssests from '../../data/menCategoryAssets.json';
console.log('🚀 ~ file: Category.jsx:4 ~ menCategoryAssests:', menCategoryAssests);

function Category() {
    const { name } = useParams();

    return (
        <div className='product-category'>
            <div className='category-sidebar'></div>
            <div className='category-main'></div>
            {name}
        </div>
    );
}

export default Category;
