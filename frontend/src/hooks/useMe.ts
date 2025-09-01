import { useQuery } from "@tanstack/react-query"
import { fetchMe } from "../features/queries"

export const useMe = ()=>{
     return useQuery({
        queryKey:['me'],
        queryFn:async ()=> await fetchMe,
        retry:false
     })
}