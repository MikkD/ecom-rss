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
                {categoryAssets.map(({ name, imgUrl, id }) => {
                    return (
                        <Link
                            className={`grid-item ${name}`}
                            key={id}
                            to={`category/${name}`}>
                            <img src={imgUrl} alt={name} />
                            <div className='category-name'>{name}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Categories;
