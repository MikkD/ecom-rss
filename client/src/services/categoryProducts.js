import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/utils';

const generateQueryParams = ({
    categoryName,
    page = 0,
    pageSize = 10,
    productType,
    priceRangeLimit,
    priceFilter,
}) => {
    const url = new URL(`${BASE_URL}category/${categoryName}`);

    const params = {
        page,
        pageSize,
        type: productType,
        priceRangeLimit,
        priceFilter,
    };

    Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value && value.toString()) {
            url.searchParams.append(key, value);
        }
        if (key === 'page' && value === 0) {
            url.searchParams.append(key, value);
        }
    });

    return url.pathname + url.search;
};

// Define a service using a base URL and expected endpoints
export const categoryProductsApi = createApi({
    reducerPath: 'categoryProductsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (params) => generateQueryParams(params),
        }),
    }),
});

export const { useGetProductsByCategoryQuery } = categoryProductsApi;
