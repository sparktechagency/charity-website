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
        getDashboardPodcastApi: builder.query({
            query: () => ({
                url: `/get-podcast?search=&per_page=10&page=1`,
                method:"GET",
              
            }),
            providesTags: ['podcast'],
        }),
        deleteDashboardPodcastApi: builder.mutation({
            query: ({podcast_id}) => ({
                url: `/delete-podcast?podcast_id=${podcast_id}`,
                method:"DELETE",
              
            }),
            invalidatesTags: ['podcast'],
        }),
        // updateDashboardPodcastApi: builder.query({
        //     query: () => ({
        //         url: `/get-podcast?search=&per_page=10&page=1`,
        //         method:"GET",
              
        //     }),
        //     invalidatesTags: ['podcast'],
        // }),
    })
})


export const {usePostDashboardPodcastApiMutation,useGetDashboardPodcastApiQuery,useDeleteDashboardPodcastApiMutation} = dashboardPodcastApi;