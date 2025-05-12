import { baseApi } from "../api/baseApi";

const getDashboardChartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getChart: builder.query({
            query: ()=> ({
                url: `/dashboard`,
                method:"GET",
            }),
            providesTags:["chart"],
        }),

    })
})

export const {useGetChartQuery} = getDashboardChartApi;