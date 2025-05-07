import { baseApi } from "../api/baseApi";

const dashboardSubscribersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardSubscribersApi: builder.query({
            query: ({ page = 1, per_page = 10,}) => ({
                url: `/get-subscriber?per_page=${per_page}&page=${page}`,
                method:"GET"
            }),
            providesTags: ['subscribers']
        }),
      
    })
})


export const {useGetDashboardSubscribersApiQuery } = dashboardSubscribersApi;