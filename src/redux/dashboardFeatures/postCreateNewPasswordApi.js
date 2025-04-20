import { baseApi } from "../api/baseApi";

const postCreateNewPassword = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        createNewPassword : builder.mutation({
            query:(data) =>{
                return{
                    url:"/create-new-password",
                    method:"POST",
                    body:data,
                }
            },
            invalidatesTags:['create-newPassword']
        })
    })
})

export const {useCreateNewPasswordMutation} = postCreateNewPassword;