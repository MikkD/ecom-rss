import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const categoryProductsApi = createApi({
    reducerPath: 'categoryProductsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/category/' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: ({ categoryName, page = 0, pageSize = 10, productType }) => {
                // Append the page and pageSize query parameters to your API endpoint
                return `${categoryName}?page=${page}&pageSize=${pageSize}&type=${productType}`;
            },
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByCategoryQuery } = categoryProductsApi;
