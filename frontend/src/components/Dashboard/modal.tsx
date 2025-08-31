import{z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { useCreateNote } from '../../hooks/useCreateNote'
import { toast } from 'react-toastify'

interface modal {
    open:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const formSchema = z.object({
    title:z.string().min(1,"please enter your note first")
})
export type FormDataNotes = z.infer<typeof formSchema>
const Modal:React.FC<modal> = ({open , setOpen}) => {

    const {register , handleSubmit , formState:{errors} , reset} = useForm<FormDataNotes>({

       resolver: zodResolver(formSchema)
    })
    
    const createNote = useCreateNote()
  const onSubmit =  async (data:FormDataNotes)=>{
     const res = await  createNote.mutateAsync(data)
             toast(res)
             reset()
             setOpen(prev=>!prev)
  }

  return (
         <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
        open ? "visible bg-black/50" : "invisible bg-transparent"
      }`}
    >
      <div
        className={`w-10/12 max-w-md rounded-xl bg-white py-1  shadow-lg transform transition-all duration-300 ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-4"
        }`}
      >

        <div className="flex items-center justify-end "> 
            <button className='pt-1 pr-1 '
            onClick={()=>setOpen(prev=>!prev)}
            >
                <X className='text-primarytext'/>
            </button>
        </div>

            <h2 className="text-lg font-semibold px-4"> Enter your Note here</h2>
              <form className='mt-5 mb-4 space-y-3 px-4' >   
                  <div className="relative ">
                  <label
                    className="absolute left-3 -top-5.5  text-primarytext text-lg transition-all bg-white p-2 "
                    htmlFor="title"
                  > 
                    Title
                  </label>
                  <input
                    className="peer w-full rounded-lg border-3 border-inputbr px-3 pt-5 pb-2  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    {...register("title")}
                  />
                  {errors.title && (
                    <p className="text-red-500">{errors.title.message}</p>
                  )}
                </div>
                    <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600 transition"
                  >
                    Create
                  </button>
              </form>
      </div>
    </div>
  )
}

export default Modal
