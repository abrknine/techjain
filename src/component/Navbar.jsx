
import techjainlogo from '../assets/techjainlogo.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldStick = scrollY > 0; // Adjust the threshold as needed

      setIsScrolled(shouldStick);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${isScrolled ? 'sticky' : ''}`}>

    <div className='flex gap-60 justify-center items-center py-6'>
      <div>
        <img src={techjainlogo} alt="" style={{ width: '100px' }} />
      </div>
      <div>
        <ul className='flex gap-10 font-bold'>
          <li>
            <Link to="/" className='hover:text-orange-500'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='hover:text-orange-500'>
              About
            </Link>
          </li>
          <li>
          <Link to='/objectives' className='hover:text-orange-500'>
              Objectives
            </Link>
           
          </li>
          <li>
            <Link to='/services' className='hover:text-orange-500'>
              Services
            </Link>
          </li>
          <li>
          <Link to='/contact' className='hover:text-orange-500'>
              Contact
            </Link>
           
          </li>
        </ul>
      </div>
      <div className=''>
        <button className='bg-orange-500 py-2 px-6 rounded-[50px] font-bold '>
          Get Started
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

