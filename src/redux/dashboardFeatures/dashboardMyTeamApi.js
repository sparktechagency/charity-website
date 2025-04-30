import { baseApi } from "../api/baseApi";

const dashboardMyTeamApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postDashboardMyTeamApi: builder.mutation({
            query: (faqInfo) => ({
                url: `/create-faq`,
                method:"POST",
                body:faqInfo,
            }),
            invalidatesTags: ['my-team'],
        }),
        // getDashboardFaqApi: builder.query({
        //     query: () => ({
        //         url: `/get-faqs`,
        //         method:"GET"
        //     }),
        //     invalidatesTags: ['faq']
        // }),
        // deleteDashboardFaqApi: builder.mutation({
        //     query: (id) => ({
        //         url: `/delete-faq?faq_id=${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ['faq'],
        // }),
        // updateDashboardFaqApi: builder.mutation({
        //     query: ({id,faqInfo}) => ({
        //         url: `/update-faq?faq_id=${id}`,
        //         method:"PUT",
        //         body:faqInfo,
        //     }),
        //     invalidatesTags: ['faq'],
        // }),
    })
})


export const {usePostDashboardMyTeamApiMutation} = dashboardMyTeamApi;