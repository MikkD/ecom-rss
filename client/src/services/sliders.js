import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const slidersApi = createApi({
    reducerPath: 'slidersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getSliders: builder.query({
            query: () => `slider-assets`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSlidersQuery } = slidersApi;
