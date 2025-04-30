import { baseApi } from "../api/baseApi";

const dashboardSubscribersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardSubscribersApi: builder.query({
            query: ({ page = 1, per_page = 10,search = ""  }) => ({
                url: `/get-subscriber?per_page=${per_page}&page=${page}&search=${search}`,
                method:"GET"
            }),
            invalidatesTags: ['subscribers']
        }),
      
    })
})


export const {useGetDashboardSubscribersApiQuery } = dashboardSubscribersApi;