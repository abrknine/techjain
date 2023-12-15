import React from 'react';
import techjainlogo from '../assets/techjainlogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex gap-60 justify-center items-center py-6'>
      <div>
        <img src={techjainlogo} alt="" style={{ width: '100px' }} />
      </div>
      <div>
        <ul className='flex gap-10'>
          <li>
            <Link to="/" className='hover:text-orange-500'>
              HOME
            </Link>
          </li>
          <li>
            <Link to='/about' className='hover:text-orange-500'>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to='/contact' className='hover:text-orange-500'>
              CONTACT
            </Link>
          </li>
          <li>
            <Link to='/services' className='hover:text-orange-500'>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to='/objectives' className='hover:text-orange-500'>
              OBJECTIVES
            </Link>
          </li>
        </ul>
      </div>
      <div className=''>
        <button className='bg-orange-500 py-2 px-6 rounded-[50px]'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;

