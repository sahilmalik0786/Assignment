import { useMutation } from "@tanstack/react-query"
import { createNote } from "../features/queries"
import { queryClient } from "../queryClient"
import type { FormDataNotes } from "../components/Dashboard/modal"



export const useCreateNote = ()=>{
    return useMutation({
        mutationFn: (data:FormDataNotes)=>createNote(data),
        onSuccess: async()=>{
            await queryClient.invalidateQueries({queryKey:['notes']})
        }
    })
}