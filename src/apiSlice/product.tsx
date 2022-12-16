import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../interfaces/product'
export const productApi = createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        getProduct: builder.query<IProduct[], string>({
            query: () => "/product",
        }),
    }),
})

export const { useGetProductQuery } = productApi