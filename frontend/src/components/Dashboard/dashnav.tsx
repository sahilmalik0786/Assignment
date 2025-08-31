import topLogo from '../../assets/top.png'

const Dashnav = () => {
  return (
    <div className="w-full flex items-center gap-4 justify-between py-2 px-4 mt-4 max-w-5xl mx-auto"> 
      <div className='flex gap-6 items-center'>
        <img src={topLogo} alt="topLogo" />
        <h1 className='text-lg'>
            Dashboard
      </h1>
      </div>
      
      <button className='pr-2'>
        Sign Out
      </button>
    </div>
  )
}

export default Dashnav