import { useMutation } from "@tanstack/react-query"
import {  fetchOtpRegister } from "../features/queries"
import type { FormData } from "../components/register-form"


export const useOtpRegister = ()=>{
  
    return useMutation({
        mutationFn: (credential:FormData)=> fetchOtpRegister(credential),
    })



}