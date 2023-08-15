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

export const getCategoryProductTypes = (categoryProducts) =>
    [...new Set(categoryProducts?.map(({ type }) => type))].filter(Boolean);

export const getProductsPriceRange = (categoryProducts) => {
    const categoryProductsPrices = categoryProducts?.map(({ price }) => price);
    const maxPrice = Math.max(...categoryProductsPrices);
    const minPrice = Math.min(...categoryProductsPrices);

    return [minPrice, maxPrice];
};
