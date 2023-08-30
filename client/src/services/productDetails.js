import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const productDetailsApi = createApi({
    reducerPath: 'productDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/product/' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getProductDetails: builder.query({
            query: (productId) => `${productId}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductDetailsQuery } = productDetailsApi;
