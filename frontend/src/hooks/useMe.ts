import { useQuery } from "@tanstack/react-query"
import { fetchMe } from "../features/queries"

export const useMe = ()=>{
     return useQuery({
        queryKey:['me'],
        queryFn:fetchMe,
        retry:false
     })
}