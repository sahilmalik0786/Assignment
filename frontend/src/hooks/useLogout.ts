import { useMutation} from "@tanstack/react-query"
import { logoutUser } from "../features/queries"

import { queryClient } from "../queryClient"


export const useLogout = ()=>{
    return useMutation({
        mutationFn:logoutUser,
        onSuccess: async()=>{
            queryClient.invalidateQueries({queryKey:['me']})
        }
    })
}