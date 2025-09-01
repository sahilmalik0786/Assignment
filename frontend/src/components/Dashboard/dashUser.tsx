// import { useLoaderData } from "@tanstack/react-router"
import { useAuth } from "../../hooks/useAuth"


const DashUser = () => {

    // const {me} = useLoaderData({from:'/dashboard'})
    const {user:user} = useAuth()
   
  return (
    <div className='w-full h-36 max-w-4xl border border-secondarytext rounded-lg mt-8 mx-auto py-2 px-4 dropsw'>
       <div className="w-full flex  flex-col justify-between gap-3">
        <h1 className="text-3xl mt-4  font-bold">
            Welcome , <span className="capitalize"> {user?.fullName} </span>!
        </h1>
        <p>
          Email: <span>{user?.email}</span>
        </p>
       </div>
       
    </div>
  )
}

export default DashUser