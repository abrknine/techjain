import React from 'react'
import techjainlogo from '../assets/techjainlogo.png'

const Navbar = () => {
  return (
    <div className='flex  gap-72 justify-center items-center  py-6'>
      <div className=''>
           <img src={techjainlogo} alt="" style={{width:'100px'}} />
      </div>
      <div>
        <ul className='flex gap-10 hover:'>
          <li>Home</li>
          <li>About</li>
          <li>Objectives</li>
          <li>Services</li>
          <li>Contact</li>


        </ul>
        
      </div>
      <div> 
        <button>Get started</button>

      </div>
      
    </div>
  )
}

export default Navbar
