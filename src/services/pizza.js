import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68' }),
    endpoints: (builder) => ({
        getAllPizza: builder.query({
            query: () => '',
        }),
    }),
})

// auto-genrated hook that hold the data and is exported to be used in other components
export const { useGetAllPizzaQuery } = pizzaApi