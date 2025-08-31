
import Dashnav from './dashnav'
import DashUser from './dashUser'
import DashBtn from './dashBtn'
import DashNotes from './dashNotes'
import { useState } from 'react'
import Modal from './modal'



const DashboardComp = () => {
    
    const  [open, setOpen] = useState<boolean>(false)
     
  return (
    <div className='w-full text-primarytext relative'>
       <Dashnav />
       <div className='px-3 space-y-6'>
        <DashUser />
        <DashBtn setOpen={setOpen}/>
       </div>
  <Modal open={open} setOpen={setOpen} />
       <div className='w-full h-full px-3 max-w-4xl mx-auto'>
            <DashNotes />
       </div>
    </div>
  )
}

export default DashboardComp
