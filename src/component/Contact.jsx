import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-indigo-700 flex  flex-col  items-center justify-between px-10 py-32  w-[1320px] h-[352px]  '>
      
      <div >
                <h2 className='text-white'>--NEED SOME MORE HELP?--</h2>
                <h1 className='flex ml-6'>Contact us!</h1>
      </div>
      <input type="text" placeholder='Enter your Email' className='w-[690px] h-[49px]  rounded-8xl '  />
    </div>
  )
}

export default Contact
