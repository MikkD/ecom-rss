import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const categoryProductsApi = createApi({
    reducerPath: 'categoryProductsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/category/' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (categoryName) => `${categoryName}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByCategoryQuery } = categoryProductsApi;
