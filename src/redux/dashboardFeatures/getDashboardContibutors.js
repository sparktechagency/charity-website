import { baseApi } from "../api/baseApi";

const GetDashboardContibutorsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardContibutorsApi: builder.query({
            query: () => ({
                url: `/get-contributor?search&status=&per_page=10&page=1`,
                method:"GET"
            }),
            providesTags: ['contibutor']
        }),
    })
})


export const {useGetDashboardContibutorsApiQuery,useUpdateDashboardContibutorsApiMutation} = GetDashboardContibutorsApi;