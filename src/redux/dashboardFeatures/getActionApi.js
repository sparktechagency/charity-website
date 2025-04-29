import { baseApi } from "../api/baseApi";

const getActionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAction: builder.query({
            query: ()=> ({
                url: `/get-auction?search&stat`
            })
        })
    })
})

export const {useGetActionQuery} = getActionApi;