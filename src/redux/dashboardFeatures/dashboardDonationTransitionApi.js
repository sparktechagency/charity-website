import { baseApi } from "../api/baseApi";

const dashboardDonationTransitionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardDonationTransitionApi: builder.query({
            query: () => ({
                url: `/donate-transations?per_page=10&page`,
                method: "GET"
            }),
            providesTags: ['donationTransition'],
        }),

    })
})


export const {useGetDashboardDonationTransitionApiQuery} = dashboardDonationTransitionApi;