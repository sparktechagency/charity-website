import { baseApi } from "../api/baseApi";

const dashboardActionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postDashboardFaqApi: builder.mutation({
            query: (faqInfo) => ({
                url: `/create-faq`,
                method:"POST",
                body:faqInfo,
            }),
            invalidatesTags: ['faq'],
        }),
        getDashboardFaqApi: builder.query({
            query: () => ({
                url: `/get-faqs`,
                method:"GET"
            }),
            providesTags: ['faq']
        }),
    })
})


export const { } = dashboardActionApi;