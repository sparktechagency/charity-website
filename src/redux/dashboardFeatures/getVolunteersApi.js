import { baseApi } from "../api/baseApi";

const getVoluntersApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllVolunterData : builder.query({
            query:()=>'/get-volunteer?search=&manage_volunteer=Pending&per_page=10&page=10',
            providesTags:["allVolunters"],
        })
    })
})


export const {useGetAllVolunterDataQuery} = getVoluntersApi;