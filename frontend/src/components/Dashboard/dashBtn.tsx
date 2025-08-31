import React from 'react'


interface DashBtnProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DashBtn:React.FC<DashBtnProps> = ({setOpen}) => {
    const hanleModel = ()=>{
            setOpen(prev => !prev)
    }
  return (
    <div className='w-full max-w-sm mx-auto'>
            <button
            
                onClick={hanleModel}
                className="w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600 transition"
              >
                Create Note
              </button>
    </div>
  )
}

export default DashBtn