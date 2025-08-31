import { useMutation } from "@tanstack/react-query"
import { fetchOtpLogin } from "../features/queries"
import type { FormDataLogin } from "../components/login-form"

export const useOtpLogin = ()=>{

 
    return useMutation({
        mutationFn:(credential:FormDataLogin)=> fetchOtpLogin(credential),
    })
 

}