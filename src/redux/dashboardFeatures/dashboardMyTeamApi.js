import { baseApi } from "../api/baseApi";

const dashboardMyTeamApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postDashboardMyTeamApi: builder.mutation({
            query: (createTeam) => ({
                url: `/create-team`,
                method:"POST",
                body:createTeam,
            }),
            invalidatesTags: ['team'],
        }),
        getDashboardMyTeamApi: builder.query({
            query: () => ({
                url: `/get-team?search`,
                method:"GET"
            }),
            providesTags: ['team'],
        }),
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


export const {usePostDashboardMyTeamApiMutation,useGetDashboardMyTeamApiQuery} = dashboardMyTeamApi;