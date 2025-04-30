import { baseApi } from "../api/baseApi";

const DashboardFaqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postDashboardFaqApi: builder.mutation({
            query: () => ({
                url: `/get-faqs`
            }),
            providesTags: ['faq']
        }),
        getDashboardFaqApi: builder.query({
            query: () => ({
                url: `/get-faqs`
            }),
            providesTags: ['faq']
        }),
        deleteDashboardFaqApi: builder.mutation({
            query: (id) => ({
                url: `/delete-faq?faq_id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['faq']
        }),
        updateDashboardFaqApi: builder.mutation({
            query: () => ({
                url: `/get-faqs`
            }),
            providesTags: ['faq']
        }),
    })
})


export const {usePostDashboardFaqApiMutation,useGetDashboardFaqApiQuery,useDeleteDashboardFaqApiMutation,useUpdateDashboardFaqApiMutation } = DashboardFaqApi;