import { baseApi } from "../api/baseApi";


const dashboardServiceBookApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getdashboardServiceBookApi:builder.query({
            query:({per_page,page})=>({
                url:`/get-book?per_page=${per_page}&page=${page}`,
                method:"GET"
            }),
            providesTags:["service-book"],
        }),
        updatedashboardServiceBookApi:builder.mutation({
           query: ({book_id,book_status}) => ({
                url: `/book-status?book_id=${book_id}&book_status=${book_status}`,
                method: "PATCH",
            }),
            invalidatesTags: ["service-book"],
        })
    }),
})

export const {useGetdashboardServiceBookApiQuery,useUpdatedashboardServiceBookApiMutation} = dashboardServiceBookApi;