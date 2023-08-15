const PriceRangeFilter = ({
    priceRangeFilterValue,
    setPriceRangeFilterValue,
    minPrice,
    maxPrice,
}) => {
    if (priceRangeFilterValue === -Infinity) return <h3>Loading...</h3>;
    return (
        <div className='price-range-filter'>
            <h5 className='price-range-filter-title'>
                Filter by Price : {priceRangeFilterValue}
            </h5>
            <label htmlFor='price-filter'>{priceRangeFilterValue}</label>
            <input
                value={priceRangeFilterValue}
                id='price-filter'
                onChange={(e) => setPriceRangeFilterValue(e.target.value)}
                min={minPrice}
                max={maxPrice}
                type='range'
            />
        </div>
    );
};

export default PriceRangeFilter;
