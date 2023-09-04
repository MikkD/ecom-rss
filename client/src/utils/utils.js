export const priceFilterOptions = [
    {
        value: 'Price (Lowest-to-Highest)',
        type: 'LTH',
    },
    {
        value: 'Price (Highest-to-Lowest)',
        type: 'HTL',
    },
];

export const getCategoryProductTypes = (categoryProducts = []) => {
    if (!categoryProducts[0]?.type) return [];
    return [...new Set(categoryProducts?.map(({ type }) => type))].map((type) => type);
};

export const getProductsPriceRange = (categoryProducts = []) => {
    const categoryProductsPrices = categoryProducts?.map(({ price }) => price);
    const maxPrice = Math.max(...categoryProductsPrices);
    const minPrice = Math.min(...categoryProductsPrices);
    return [minPrice, maxPrice];
};

export const sortByPrice = (arr = [], sortVal) => {
    if (!arr.length) return;
    if (sortVal === 'HTL') return [...arr].sort((a, b) => b.price - a.price);
    return [...arr].sort((a, b) => a.price - b.price);
};

export const sortByPriceRange = (arr = [], sortVal) =>
    arr.filter(({ price }) => price <= sortVal);

export const filterByType = (arrToFilter, activeFiltersArr) =>
    arrToFilter.filter((product) => activeFiltersArr.includes(product.type));

export const featuredProductsDescription = `New Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,suscipit numquam at non dolore obcaecati fuga, tempore nesciunt, odit
quidem ad repellendus voluptatem veritatis quaerat neque nam magni
exercitationem itaque`;
export const trendingProductsDescription = `Trending Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,suscipit numquam at non dolore obcaecati fuga, tempore nesciunt, odit
quidem ad repellendus voluptatem veritatis quaerat neque nam magni
exercitationem itaque`;

// Pagination
export const NUM_OF_PRODUCTS_PER_PAGE = 10;
export const PLP_PAGE_SIZE = 10;
export const generatePagintationNumbers = (totalNumOfPages) => [
    ...Array(totalNumOfPages).keys(),
];
