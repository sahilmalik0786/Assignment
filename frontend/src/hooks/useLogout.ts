import { useMutation} from "@tanstack/react-query"
import { logoutUser } from "../features/queries"


export const useLogout = ()=>{
    return useMutation({
        mutationFn:logoutUser
    })
}