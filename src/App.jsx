import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import AboutUs from './component/Aboutus';
import PercentageBar from './component/Percentagebar';
import React, { useState, useEffect } from 'react';
import Services from './component/Services';
import Contact from './component/Contact';

function App() {
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
        <div className="absolute top-32 left-0 w-full h-full flex items-center justify-center">
          <PercentageBar percentage={progress} />
        </div>

      </div>

      <div>
        <Services/>
      </div>
      <div className='mx-72'>

      <Contact/>
      </div>
    </>
  );
}

export default App;

