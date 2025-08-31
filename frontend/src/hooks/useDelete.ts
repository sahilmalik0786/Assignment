import { useMutation } from "@tanstack/react-query"
import { deleteNote } from "../features/queries"
import { queryClient } from "../queryClient"

export const useDelete = ()=>{
    return useMutation({
        mutationFn:(noteId:string)=>deleteNote(noteId),
        onSuccess:async()=>{
            await queryClient.invalidateQueries({queryKey:['notes']})
        }
    })
}