import React from 'react';
import heroim from '../assets/hero.png';
import wavehaikei from '../assets/wavehaikei.png';

const HeroSection = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${wavehaikei})`, // Set the background image
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="hero-section relative" style={heroSectionStyle}>
      <div className=" opacity-75 absolute inset-0"></div>
      <div className="flex items-center justify-between px-10 py-32 relative z-10">
        <div className="hero-content max-w-1/2">
          <h1 className="text-white text-4xl mb-6">Leveraging the Technology <br /> to help Communities Flourish <br />
            more Quickly</h1>
          <p className="text-white text-lg mb-8">
            A worldwide contribution of digital solutions and networks proffered alternatives <br /> of methodical and
            structured solutions for well-defined development services.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-2 text-purple-500 bg-white rounded">Learn More</button>
            <button className="px-6 py-2 text-purple-500 bg-white rounded">Get Started</button>
          </div>
        </div>
        <div className="hero-image max-w-2/5">
          <img src={heroim} alt="Hero" className="w-full rounded-md" />
        </div>
      </div>
      {/* Wave curve design at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-current text-indigo-700">
          <path
            fillOpacity="1"
            d="M0,224L60,218.7C120,213,240,203,360,208C480,213,600,235,720,240C840,245,960,235,1080,197.3C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
