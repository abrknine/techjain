import React from 'react';
import heroim from '../assets/hero.png';
import wavehaikei from '../assets/wavehaikei.png';
import { FaDownload } from "react-icons/fa";
const HeroSection = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${wavehaikei})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="hero-section relative" style={heroSectionStyle}>
      <div className="opacity-75 absolute inset-0"></div>
      <div className="flex items-center justify-between px-8 py-32 relative z-10 gap-4">
        <div className="hero-content max-w-1/2">
          <h1 className="text-white text-4xl font-bold mb-6">
            Leveraging the Technology to <br /> help Communities Flourish <br /> more Quickly
          </h1>
          <p className="text-white text-base mb-8">
            A worldwide contribution of digital solutions and networks proffered alternatives <br /> of methodical and
            structured solutions for well-defined development services.
          </p>
          <div className="flex gap-10">
            <button className="bg-orange-500 py-4 px-12 rounded-[50px] font-bold ">Read More</button>
            <button className="flex bg-orange-500 py-4 px-12 rounded-[50px] font-bold items-center">
  <FaDownload />
  <div className="ml-2">Company profile</div>
</button>
          </div>
        </div>
        <div className="hero-image max-w-2/5 ">
          <img src={heroim} alt="Hero" className="w-full rounded-md" />
        </div>
      </div>
     
    </div>
  );
};

export default HeroSection;
