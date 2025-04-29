import { baseApi } from "../api/baseApi";

const getDashboardFaqApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getDashboardApi: builder.query({
            query: ()=> ({
                url: `/get-faqs`
            })
        })
    })
})


export const {useGetDashboardApiQuery} = getDashboardFaqApi;