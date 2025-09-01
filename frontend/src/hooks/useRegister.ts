import { useMutation } from "@tanstack/react-query"
import { registerWithOtp } from "../features/queries"
import type { FormData } from "../components/register-form"
import { queryClient } from "../queryClient"

export const useRegister = ()=>{
    return useMutation({
        mutationFn:(credential:FormData)=>registerWithOtp(credential),
        onSuccess:async()=>{
            await queryClient.invalidateQueries({queryKey:['me']})
        }
    })
}
