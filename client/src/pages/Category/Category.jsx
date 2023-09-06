import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../services/categoryProducts';
import { priceFilterOptions, PLP_PAGE_SIZE } from '../../utils/utils';
import Products from '../../shared/Products/Products';
import PriceRangeFilter from '../../components/PriceRangeFilter/PriceRangeFilter';
import SortByPriceFilter from '../../components/SortByPriceFilter/SortByPriceFilter';
import ProductTypeFilter from '../../components/ProductTypeFilter/ProductTypeFilter';
import Pagination from '../../components/Pagination/Pagination';
import './Category.scss';

// UTILS
function Category() {
    const { name: categoryName } = useParams();
    const [page, setPage] = useState(0);
    const [productTypes, setProductTypes] = useState([]);
    const [priceRangeFilterValue, setPriceRangeFilterValue] = useState(0);
    const [sortByFilterValue, setSortByFilterValue] = useState(
        priceFilterOptions[0].type
    );

    //*Data Fetching
    const {
        data,
        error: isDataError,
        isLoading: isDataLoading,
    } = useGetProductsByCategoryQuery({
        categoryName,
        page,
        pageSize: PLP_PAGE_SIZE,
        productType: productTypes,
        priceRangeLimit: priceRangeFilterValue,
        priceFilter: sortByFilterValue,
    });

    const {
        categoryProducts,
        totalNumOfProducts,
        productTypeOptions,
        minPrice,
        maxPrice,
    } = data || {};

    useEffect(() => {
        setPriceRangeFilterValue(maxPrice);
    }, [maxPrice]);

    return (
        <div className='product-category'>
            <div className='category-sidebar'>
                <h4 className='sidebar-title'>{categoryName}</h4>
                <div className='sidebar-filters'>
                    {!!productTypeOptions?.length && (
                        <ProductTypeFilter
                            productTypeOptions={productTypeOptions}
                            productTypes={productTypes}
                            setProductTypes={setProductTypes}
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
                    <br />
                    Total counter of categoryProducts : {totalNumOfProducts}
                    {isDataError && (
                        <h3>Error: {isDataError.message || 'Something went wrong.'}</h3>
                    )}
                    {isDataLoading ? (
                        <h3>Loading...</h3>
                    ) : (
                        <Products assets={categoryProducts} />
                    )}
                </div>
                {totalNumOfProducts && (
                    <Pagination
                        totalNumOfProducts={totalNumOfProducts}
                        page={page}
                        setPage={setPage}
                    />
                )}
            </div>
        </div>
    );
}

export default Category;
