import React, { useState, useEffect } from 'react';
import './Categories.scss';
import categoryAssets from '../../data/categoryAssets.json'; //TODO-REMOVE WHEN DB ADDED
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

function Categories() {
    const [assets, isError, isLoading] = useFetchData({
        url: 'http://localhost:5000/categories-assets',
    });

    if (isError) return <h4>Error...</h4>;

    return isLoading ? (
        <h4>Loading...</h4>
    ) : (
        <div className='categories'>
            <h4 className='category-title'>Categories</h4>
            <div className='categories-grid'>
                {assets.map(({ name, imgUrl, id }) => {
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
