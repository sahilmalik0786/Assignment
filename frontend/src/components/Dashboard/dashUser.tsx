import { useLoaderData } from "@tanstack/react-router"


const DashUser = () => {

    const {me} = useLoaderData({from:'/dashboard'})
    console.log(me)
  return (
    <div className='w-full h-36 max-w-4xl border border-secondarytext rounded-lg mt-8 mx-auto py-2 px-4 dropsw'>
       <div className="w-full flex  flex-col justify-between gap-3">
        <h1 className="text-3xl mt-4  font-bold">
            Welcome , <span className="capitalize"> {me.fullName} </span>!
        </h1>
        <p>
          Email: <span>{me.email}</span>
        </p>
       </div>
       
    </div>
  )
}

export default DashUser