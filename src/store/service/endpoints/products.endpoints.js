import { ApiService } from "../ApiService";

const productsEndpoint = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        products: builder.query({
            query: () => "products",
            providesTags: ["product"]
        }),
        limit: builder.query({
            query: (arg) => `products?limit=${arg}`,
            providesTags: ["product"]
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`,
            providesTags: ["product"]
        }),
        getAllCategories: builder.query({
            query: () => "products/categories",
            providesTags: ["product"]
        }),
        getSingleCategory: builder.query({
            query: (arg) => `/products/category/${arg}`,
            providesTags: ["product"]
        })
    })
})

export const {
    useProductsQuery,
    useLimitQuery,
    useGetProductQuery,
    useGetAllCategoriesQuery,
    useGetSingleCategoryQuery } = productsEndpoint;