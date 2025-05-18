import { baseApi } from "../api/baseApi";

const GetDashboardContibutorsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardContibutorsApi: builder.query({
            query: () => ({
                url: `/get-contributor`,
                method:"GET"
            }),
            providesTags: ['contibutor']
        }),
        singleGetDashboardContibutorsApi: builder.query({
            query: ({id}) => ({
                url: `/contributor-details?id=${id}`,
                method:"GET"
            }),
            providesTags: ['contibutor'] 
        }),
        singleGetDashboardContibutorsAuctionApi: builder.query({
            query: ({auction_id}) => ({
                url: `/single-contributor-auction?auction_id=${auction_id}`,
                method:"GET"
            }),
            providesTags: ['contibutor'] 
        }),
    })
})


export const {useGetDashboardContibutorsApiQuery,useSingleGetDashboardContibutorsApiQuery,useSingleGetDashboardContibutorsAuctionApiQuery} = GetDashboardContibutorsApi;