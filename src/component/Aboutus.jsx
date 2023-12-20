import React from 'react';
import '../App.css';
import Company from '../assets/Company-pana.png';

const AboutUs = () => {
  const progressWidth = '85%';   
  return (
    <div className="about-us-section flex justify-center items-center py-20 gap-4">
      <div className="about-left max-w-1/2 p-8 flex-col justify-between ">
        <div className=''>
          <h4 className="text-xl font-bold text-yellow-600 my-4">ABOUT US _ __</h4>
          <h2 className="text-4xl font-bold my-4">TechJain IT Solutions</h2>
        </div>
        <div>
          <p className="text-lg text-gray-600">
            TechJain's unified ingenious technologies consist of trademarked devices and operations refined over our extensive experience to offer numerous by-products that certify reliability expenditure control and business refinement.
          </p>
        </div>
        <div className="flex-col items-center space-y-4 mt-4 text-gray-600">
          {/* Progress bars with 85% width */}
          <h1>Digital Marketing </h1>
          <div className="bg-gray-300 h-1.5 w-full">
            <div className="bg-indigo-500 h-full" style={{ width: progressWidth }}></div>
          </div>
          <h1>SEO & Backlinks</h1>
          <div className="bg-gray-300 h-1.5 w-full">
            <div className="bg-yellow-500 h-full" style={{ width: progressWidth }}></div>
          </div>
          <h1>Design & Development</h1>
          <div className="bg-gray-300 h-[6px] w-full">
            <div className="bg-black h-full" style={{ width: progressWidth }}></div>
          </div>
        </div>
        <div>
          <button className="bg-[#6222CC]  text-white font-bold py-4 px-10 rounded-[50px] mt-4">
            Read More
          </button>
        </div>
      </div>
      <div className="about-right    ">
        <img src={Company} alt="TechJain IT Solutions" className=" rounded-md h-[400px] w-[1600px] my-4" />
      </div>
    </div>
  );
};

export default AboutUs;


