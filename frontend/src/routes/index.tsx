import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../hooks/useAuth'
import logo from '../assets/logo.png'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {isAuthenticated , user} = useAuth()
  const navigate = useNavigate()
  console.log(isAuthenticated , user)
  return <div className=''>
    <nav className='w-full max-w-4xl  py-2 mx-auto flex items-center justify-between px-3 border-b border-secondarytext'>
        <div className='w-18'>
            <img src={logo} className='w-full aspect-auto' alt="logo" />
        </div>
        <div>
         {isAuthenticated ?  <button onClick={()=>navigate({to:'/dashboard'})}
            className="w-full rounded-lg bg-blue-500 py-1 px-3 text-white font-medium hover:bg-blue-600 transition"
            >
             Dashboard
          </button> :  <button onClick={()=>navigate({to:'/auth/register'})}
            className="w-full rounded-lg bg-blue-500 py-1 px-3 text-white font-medium hover:bg-blue-600 transition"
            >
             Get Started
          </button>}
        </div>
   
    </nav>
  <div className='w-full max-w-3xl h-[calc(100svh-4rem)] mx-auto flex items-center justify-center p-2 flex-col gap-6'>
      <h1 className='text-5xl text-center '>
        Write it down. Find it fast. <br /> Keep it forever. 
      </h1>
      {isAuthenticated ?  <button onClick={()=>navigate({to:'/dashboard'})}
            className="w-full rounded-lg bg-blue-500 py-1 px-3 text-white font-medium hover:bg-blue-600 transition"
            >
             Dashboard
          </button> :  <button onClick={()=>navigate({to:'/auth/register'})}
            className="w-fit rounded-lg bg-blue-500 py-1 px-3 text-white font-medium hover:bg-blue-600 transition"
            >
             Get Started
          </button>}
  </div>


  </div>
}
