import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import menCategoryAssets from '../../data/menCategoryAssets.json';//TODO Remove after migration
// import womenCategoryAssets from '../../data/womenCategoryAssets.json';//TODO Remove after migration
// import trendyCategoryAssets from '../../data/trendyCategoryAssets.json';//TODO Remove after migration
// import saleCategoryAssets from '../../data/saleCategoryAssets.json';//TODO Remove after migration
// import accessoriesCategoryAssets from '../../data/accessoriesCategoryAssets.json';//TODO Remove after migration
// import newCategoryAssets from '../../data/newCategoryAssets.json';//TODO Remove after migration
import Products from '../../shared/Products/Products';
import './Category.scss';
import { useSelector, useDispatch } from 'react-redux';
import useFetchProducts from '../../hooks/useFetchProducts';

// UTILS
// const getCategoryProducts = (name) => {
//     switch (name) {
//         case 'men':
//             return menCategoryAssets;
//         case 'women':
//             return womenCategoryAssets;
//         case 'new':
//             return newCategoryAssets;
//         case 'trendy':
//             return trendyCategoryAssets;
//         case 'sale':
//             return saleCategoryAssets;
//         case 'accessories':
//             return accessoriesCategoryAssets;
//         default:
//             return [];
//     }
// };

// SHARED
const CheckBox = ({ type }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label htmlFor={type}>
            <input
                name={type}
                id={type}
                type='checkbox'
                defaultChecked={false}
                onChange={() => setIsChecked(!isChecked)}
                value={isChecked}
            />
            {type}
        </label>
    );
};

const ProductTypeFilter = ({ productTypes }) => {
    return (
        !!productTypes.length && (
            <div className='product-type-filter'>
                <h5 className='product-type-filter-title'>Product Types</h5>
                <div className='product-type-filter-box'>
                    {productTypes.map((type) => (
                        <CheckBox key={type} type={type} />
                    ))}
                </div>
            </div>
        )
    );
};

const PriceRangeFilter = ({ minPrice, maxPrice }) => {
    const [filterNumber, setFilterNumber] = useState(0);
    return (
        <div className='price-range-filter'>
            <h5 className='price-range-filter-title'>Filter by Price</h5>
            <label htmlFor='price-filter'>{filterNumber}</label>
            <input
                value={filterNumber}
                id='price-filter'
                onChange={(e) => setFilterNumber(e.target.value)}
                min={minPrice}
                max={maxPrice}
                type='range'
            />
        </div>
    );
};

// SORT BY
const SortByFilter = () => {
    const filterOptions = [
        {
            value: 'Price (Lowest-to-Highest)',
            type: 'LTH',
        },
        {
            value: 'Price (Highest-to-Lowest)',
            type: 'HTL',
        },
    ];
    const [sortByFilterValue, setSortByFilterValue] = useState(filterOptions[0].type);

    return (
        <div className='sort-by-filter'>
            <h5 className='sort-by-filter-title'>Sort By:</h5>
            {filterOptions.map(({ value, type }) => (
                <div key={type} className='sort-by-filter-radio-block'>
                    <input
                        value={type}
                        id={type}
                        type='radio'
                        checked={sortByFilterValue === type}
                        onChange={() => setSortByFilterValue(type)}
                    />
                    <label htmlFor={type}>{value}</label>
                </div>
            ))}
        </div>
    );
};

function Category() {
    //*React-router-dom
    const { name: categoryName } = useParams();

    //*Fetch
    const url = `http://localhost:5000/category/${categoryName}`;
    useFetchProducts({ url, categoryName });

    //*Redux
    const categoryProducts = useSelector((state) => state.categoryProducts[categoryName]);
    const isDataLoading = useSelector((state) => state.categoryProducts.isLoading);
    const isDataError = useSelector((state) => state.categoryProducts.isError);

    //*ProductTypeFilter
    const productTypes = [...new Set(categoryProducts.map(({ type }) => type))].filter(
        Boolean
    );

    //*PriceRangeFilter
    const maxPrice = Math.max(...categoryProducts.map(({ price }) => price));
    const minPrice = Math.min(...categoryProducts.map(({ price }) => price));

    return (
        <div className='product-category'>
            <div className='category-sidebar'>
                <h4 className='sidebar-title'>{categoryName}</h4>
                <div className='sidebar-filters'>
                    <ProductTypeFilter productTypes={productTypes} />
                    <PriceRangeFilter maxPrice={maxPrice} minPrice={minPrice} />
                    <SortByFilter />
                </div>
            </div>
            <div className='category-main'>
                <div className='category-tile'>
                    <img
                        className='category-tile-img'
                        src='https://assets.vogue.com/photos/61e9c42f201fe8db0bc39899/4:3/w_1600%2Cc_limit/00_promo.jpg'
                        alt='category-hero-tile'
                    />
                </div>
                <div className='category-product-list'>
                    {isDataError && <h3>Error...</h3>}
                    {isDataLoading ? (
                        <h3>Loading...</h3>
                    ) : (
                        <Products assets={categoryProducts} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Category;
