import { useMutation } from "@tanstack/react-query"
import { registerWithOtp } from "../features/queries"
import type { FormData } from "../components/register-form"
import { queryClient } from "../queryClient"
import { useNavigate } from "@tanstack/react-router"

export const useRegister = ()=>{
    const navigate = useNavigate()
    return useMutation({
        mutationFn:(credential:FormData)=>registerWithOtp(credential),
        onSuccess:async()=>{
            // await queryClient.invalidateQueries({queryKey:['me']})
            navigate({to:'/dashboard'})
        }
    })
}
