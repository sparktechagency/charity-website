import { baseApi } from "../api/baseApi";


const dashboardAdminProfileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postDashboardAdminProfileApi: builder.mutation({
            query: () => ({
                url: `/create-new-password`,
                method:"POST",
            }),
            invalidatesTags: ['admin-profile'],
        }),
        getDashboardAdminProfileApi: builder.query({
            query: () => ({
                url: `/profile`,
                method:"GET"
            }),
            providesTags: ['admin-profile'],
        }),
    })
})


export const {useGetDashboardAdminProfileApiQuery,usePostDashboardAdminProfileApiMutation } = dashboardAdminProfileApi;