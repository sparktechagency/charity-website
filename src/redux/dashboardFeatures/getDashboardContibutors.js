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
        // getDashboardContibutorsApi: builder.query({
        //     query: ({search="",status,per_page,page}) => ({
        //         url: `/get-contributor?search=${search}&status=${status}&per_page=${per_page}&page=${page}`,
        //         method:"GET"
        //     }),
        //     providesTags: ['contibutor']   // {search="",status,per_page,page}
        // }),
    })
})


export const {useGetDashboardContibutorsApiQuery} = GetDashboardContibutorsApi;