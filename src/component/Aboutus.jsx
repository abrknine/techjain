import React from 'react';
import Company from '../assets/Company-pana.png';
 

const AboutUs = () => {
  return (
    <div className="about-us-section flex justify-center items-center py-20">
      <div className="about-left max-w-1/2 p-8">
        <div>
          <h4 className="text-sm font-bold text-gray-600">About Us</h4>
          <h2 className="text-4xl font-bold mb-4">TechJain IT Solutions</h2>
        </div>
        <div>
          <p className="text-lg">
            TechJain's unified ingenious technologies consist of trademarked devices and operations refined over our extensive experience to offer numerous by-products that certify reliability expenditure control and business refinement.
          </p>
           
         
        </div>
      </div>
      <div className="about-right max-w-1/2 p-8">
        <img src={Company} alt="TechJain IT Solutions" className="w-full rounded-md" />
      </div>
    </div>
  );
};

export default AboutUs;

