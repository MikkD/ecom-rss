import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../services/categoryProducts';
import {
    priceFilterOptions,
    getCategoryProductTypes,
    getProductsPriceRange,
} from '../../utils/utils';
import Products from '../../shared/Products/Products';
import PriceRangeFilter from '../../components/PriceRangeFilter/PriceRangeFilter';
import SortByPriceFilter from '../../components/SortByPriceFilter/SortByPriceFilter';
import ProductTypeFilter from '../../components/ProductTypeFilter/ProductTypeFilter';
import './Category.scss';

function Category() {
    const { name: categoryName } = useParams();

    //*Data Fetching
    const {
        data: categoryProducts = [],
        error: isDataError,
        isLoading: isDataLoading,
    } = useGetProductsByCategoryQuery(categoryName);

    console.log('categoryProducts', categoryProducts);
    //*ProductTypeFilter
    const productTypes = getCategoryProductTypes(categoryProducts);

    //*PriceRangeFilter
    const [minPrice, maxPrice] = getProductsPriceRange(categoryProducts);

    const [checkBoxes, setCheckBoxes] = useState({});
    const [priceRangeFilterValue, setPriceRangeFilterValue] = useState(0);
    const [sortByFilterValue, setSortByFilterValue] = useState(
        priceFilterOptions[0].type
    );

    useEffect(() => {
        setCheckBoxes(
            productTypes.reduce((acc, type) => ({ ...acc, [type]: false }), {})
        );
    }, [categoryProducts]);

    useEffect(() => {
        setPriceRangeFilterValue(maxPrice);
    }, [maxPrice]);

    const sortByPrice = (arr = [], sortVal) => {
        if (!arr.length) return;
        if (sortVal === 'HTL') return arr.sort((a, b) => b.price - a.price);
        return arr.sort((a, b) => a.price - b.price);
    };

    const sortByPriceRange = (arr = [], sortVal) =>
        arr.filter(({ price }) => price < sortVal);

    const filteredProducts = React.useMemo(() => {
        //TODO REFACTOR BELOW?
        const activeProductTypeFilters = Object.entries(checkBoxes)
            .map(([type, isChecked]) => (isChecked ? type : null))
            .filter(Boolean);

        if (activeProductTypeFilters.length) {
            const filteredByTypeProducts = categoryProducts.filter((product) =>
                activeProductTypeFilters.includes(product.type)
            );
            return sortByPrice(filteredByTypeProducts, priceRangeFilterValue);
        }

        const sortedByPriceRange = sortByPriceRange(
            categoryProducts,
            priceRangeFilterValue
        );
        const sortedByPrice = sortByPrice(sortedByPriceRange, sortByFilterValue);
        return sortedByPrice;
    }, [productTypes, checkBoxes, categoryProducts, priceRangeFilterValue]);

    return (
        <div className='product-category'>
            <div className='category-sidebar'>
                <h4 className='sidebar-title'>{categoryName}</h4>
                <div className='sidebar-filters'>
                    {!!productTypes.length && (
                        <ProductTypeFilter
                            setCheckBoxes={setCheckBoxes}
                            checkBoxes={checkBoxes}
                        />
                    )}

                    <PriceRangeFilter
                        maxPrice={maxPrice}
                        minPrice={minPrice}
                        priceRangeFilterValue={priceRangeFilterValue}
                        setPriceRangeFilterValue={setPriceRangeFilterValue}
                    />
                    <SortByPriceFilter
                        filterOptions={priceFilterOptions}
                        setSortByFilterValue={setSortByFilterValue}
                        sortByFilterValue={sortByFilterValue}
                    />
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
                        <Products assets={filteredProducts} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Category;
