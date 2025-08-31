import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
interface notesResponse {
    message:string,
    notes:any
}

export const useNotes = ()=>{
      return useQuery({
        queryKey:['notes' ],
        queryFn: async()=>{
           const res = await apiClient.get<notesResponse>('/api/notes/getNotes')
           return res.data
        }
      })
}