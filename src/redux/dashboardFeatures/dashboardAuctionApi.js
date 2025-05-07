import { baseApi } from "../api/baseApi";

const dashboardAuctionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardAuctionApi: builder.query({
            query: ({search:searchText,status:status}) => ({
                url: `/get-auction?search=${searchText}&status=${status}`,
                method:"GET"
            }),
            providesTags: ['auction']
        }),
    })
})


export const {useGetDashboardAuctionApiQuery} = dashboardAuctionApi;