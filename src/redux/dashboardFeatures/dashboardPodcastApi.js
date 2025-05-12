import { baseApi } from "../api/baseApi";


const dashboardPodcastApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postDashboardPodcastApi: builder.mutation({
            query: (createPodcast) => ({
                url: `/create-podcast`,
                method:"POST",
                body:createPodcast,
            }),
            invalidatesTags: ['podcast'],
        }),
    })
})


export const {usePostDashboardPodcastApiMutation} = dashboardPodcastApi;