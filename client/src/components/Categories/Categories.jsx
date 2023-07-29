import React from 'react';
import './Categories.scss';
import categoryAssets from '../../data/categoryAssets.json';
import { Link } from 'react-router-dom';
console.log('🚀 ~ file: Categories.jsx:4 ~ categoryAssets:', categoryAssets);

function Categories() {
    return (
        <div className='categories'>
            <h4 className='category-title'>Categories</h4>
            <div className='categories-grid'>
                {categoryAssets.map((category) => {
                    return (
                        <Link
                            className={`grid-item ${category.name}`}
                            key={category.id}
                            to={`category/${category.name}`}>
                            <img src={category.imgUrl} alt={category.name} />
                            <div className='category-name'>{category.name}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Categories;
