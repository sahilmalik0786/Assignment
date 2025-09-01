import { toast } from 'react-toastify'
import topLogo from '../../assets/top.png'
import { useLogout } from '../../hooks/useLogout'
import { useNavigate } from '@tanstack/react-router'

const Dashnav = () => {
  const logout = useLogout()
  const navigate = useNavigate()
  const handleLogout = async ()=>{
     try {
        const message = await logout.mutateAsync()
         toast(message)
         navigate({to:'/'})
     } catch (error:any) {
        toast.error(error)
     }
  }
  return (
    <div className="w-full flex items-center gap-4 justify-between py-2 px-4 mt-4 max-w-5xl mx-auto"> 
      <div className='flex gap-6 items-center'>
        <img src={topLogo} alt="topLogo" />
        <h1 className='text-lg'>
            Dashboard
      </h1>
      </div>
      
      <button className='pr-2 text-blue-500' onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  )
}

export default Dashnav