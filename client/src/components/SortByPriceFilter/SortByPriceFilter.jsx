const SortByPriceFilter = ({
    filterOptions,
    sortByFilterValue,
    setSortByFilterValue,
}) => {
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

export default SortByPriceFilter;
