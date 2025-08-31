import { toast } from 'react-toastify';
import deleteBin from '../../assets/delete_bin.png'
import { useDelete } from '../../hooks/useDelete';
import { useNotes } from "../../hooks/useNotes";

interface notesInterface{
    _id:string,
    createdAt:string,
    title:string;
    user:string;
    
}

const DashNotes = () => {
    const notedelte = useDelete()
  const {data } = useNotes()

  const handleDelete =  async(id:string)=>{
      const message = await notedelte.mutateAsync(id )
      toast(message)
      console.log(message)
      
     
  }

  return (
    <div className="mt-5 text-primarytext font-semibold ">
      <h1 className="text-xl mb-2">Notes</h1>

      <div className="flex flex-col gap-3">
        
       {data?.notes?.length == 0 ? data.message : data?.notes?.map((i:notesInterface)=>{
         
            return  <div key={i._id} className="w-full flex items-center justify-between border rounded-md p-3 border-secondarytext dropsw">
          <h1>{i.title}</h1>
          <button onClick={ ()=>handleDelete(i._id) }> <img src={deleteBin} alt="" /></button>
        </div>
        })}
         
      </div>
    </div>
  );
};

export default DashNotes;
