import { useMutation } from "@tanstack/react-query"
import {  loginWithOtp } from "../features/queries"

import type { FormDataLogin } from "../components/login-form"
import { queryClient } from "../queryClient"
import { useNavigate } from "@tanstack/react-router"

export const useLogin = ()=>{
    const navigate = useNavigate()
    return useMutation({
        mutationFn:(credential:FormDataLogin)=>loginWithOtp(credential),
        onSuccess: async()=>{
            await queryClient.invalidateQueries({queryKey:['me']})
            navigate({to:'/dashboard'})
        }
    })
}

