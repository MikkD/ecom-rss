import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../services/categoryProducts';
import {
    priceFilterOptions,
    getCategoryProductTypes,
    getProductsPriceRange,
    sortByPrice,
    sortByPriceRange,
    filterByType,
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

    //*PriceRangeFilter
    const [minPrice, maxPrice] = getProductsPriceRange(categoryProducts);

    const [priceRangeFilterValue, setPriceRangeFilterValue] = useState(0);
    const [sortByFilterValue, setSortByFilterValue] = useState(
        priceFilterOptions[0].type
    );
    const [selectedProductTypes, setSelectedProductTypes] = useState([]);
    const fetchedProductName = categoryProducts[0]?.name;

    useEffect(() => {
        const productTypes = getCategoryProductTypes(categoryProducts);
        setSelectedProductTypes(productTypes);
    }, [fetchedProductName, categoryProducts.length]);

    useEffect(() => {
        setPriceRangeFilterValue(maxPrice);
    }, [maxPrice]);

    const filteredProducts = React.useMemo(() => {
        const activeProductTypeFilters = selectedProductTypes
            .map(({ type, isChecked }) => (isChecked ? type : null))
            .filter(Boolean);

        const sortedByPriceRange = sortByPriceRange(
            categoryProducts,
            priceRangeFilterValue
        );

        const sortedByPrice = sortByPrice(sortedByPriceRange, sortByFilterValue);

        if (!activeProductTypeFilters.length) return sortedByPrice;
        return filterByType(sortedByPrice, activeProductTypeFilters);
    }, [
        sortByFilterValue,
        selectedProductTypes,
        categoryProducts,
        priceRangeFilterValue,
    ]);

    return (
        <div className='product-category'>
            <div className='category-sidebar'>
                <h4 className='sidebar-title'>{categoryName}</h4>
                <div className='sidebar-filters'>
                    {!!selectedProductTypes.length && (
                        <ProductTypeFilter
                            setSelectedProductTypes={setSelectedProductTypes}
                            selectedProductTypes={selectedProductTypes}
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
