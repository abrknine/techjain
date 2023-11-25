import React from 'react'
import techjainlogo from '../assets/techjainlogo.png'

const Navbar = () => {
  return (
    <div className='flex  space'>
      <div className=''>
           <img src={techjainlogo} alt="" style={{width:'100px'}} />
      </div>
      <div>
        <ul className='flex'>
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
