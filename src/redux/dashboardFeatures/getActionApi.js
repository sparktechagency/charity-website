import { baseApi } from "../api/baseApi";

const getActionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAction: builder.query({
            query: ()=> ({
                url: `/get-auction?search&stat`,
                method:"GET",
            }),
            providesTags:["autcion"],
        }),
        deleteAction: builder.mutation({
            query: ({id})=> ({
                url: `/delete-auction?id=${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["autcion"],
        }),
        updateAction: builder.mutation({
            query: ({updateInfo,auction_id})=> ({
                url: `/assign-budget?auction_id=${auction_id}`,
                method:"PUT",
                body:updateInfo,
            }),
            invalidatesTags:["autcion"],
        })
    })
})

export const {useGetActionQuery,useDeleteActionMutation,useUpdateActionMutation} = getActionApi;