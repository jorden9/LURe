import { PRODUCT_URL } from "../constants.js";
import { apiSLice } from "./slices";

export const productApiSlice = apiSLice.injectEndpoints({
    endpoints :(builder) =>({
        getProduct: builder.query({
            query :()=> ({
                url: PRODUCT_URL,

            }),
            keepUnusedDataFor:5
        }),
        getProductDEtails: builder.query({
                query:(productId) =>({
                    url: `${productId}` 
                })
        })

    })
})
export const { useGetProductQuery , useGetProductDEtailsQuery} = productApiSlice;