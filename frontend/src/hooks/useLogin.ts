import { useMutation } from "@tanstack/react-query"
import {  loginWithOtp } from "../features/queries"

import type { FormDataLogin } from "../components/login-form"

export const useLogin = ()=>{
    return useMutation({
        mutationFn:(credential:FormDataLogin)=>loginWithOtp(credential)
    })
}

