import '../App.css';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import AboutUs from '../component/Aboutus';

import React, { useState, useEffect } from 'react';
import Services from '../component/Services';
import Contact from '../component/Contact';
import Footer from '../component/Footer';





const Home=()=> {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="mx-72">
        <Hero />
      </div>
      <div className="mx-72 relative">
        <AboutUs />
        

      </div>

      <div>
        <Services/>
      </div>
      <div className='mx-72'>

      <Contact/>
      </div>
      <div className='mx-72'>
        <Footer/>
  </div>
    </>
  );
}

export default Home;
 
