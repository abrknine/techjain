import React from 'react';
import { FaResearchgate } from "react-icons/fa";

const Service = () => {
  // Sample data for cards
  const servicesData = [
    { id: 1, logo: 'logo1.png', name: 'Service 1' },
    { id: 2, logo: 'logo2.png', name: 'Service 2' },
    { id: 3, logo: 'logo3.png', name: 'Service 3' },
    { id: 4, logo: 'logo4.png', name: 'Service 4' },
    { id: 5, logo: 'logo5.png', name: 'Service 5' },
    { id: 6, logo: 'logo6.png', name: 'Service 6' },
  ];

  return (
    <div className="text-center mt-8">
      {/* First div with small heading */}
      <div>
        <h2 className="text-2xl font-bold text-gray-700">Our Services</h2>
      </div>

      {/* Second div with bigger heading */}
      <div className="mt-4">
        <h1 className="text-4xl font-bold text-gray-800">What Solutions We Provide</h1>
      </div>

      {/* Cards section */}
      <div className="flex flex-wrap justify-center mt-8">
        {/* First row */}
        <div className="flex">
          {servicesData.slice(0, 3).map((service) => (
            <div key={service.id} className="flex-shrink-0 m-4 p-6 bg-white border rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-indigo-500 hover:text-white" style={{ width: '360px', height: '250px' }}>
              <img src={service.logo} alt={`Logo ${service.id}`} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">{service.name}</h3>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="flex mt-4">
          {servicesData.slice(3, 6).map((service) => (
            <div key={service.id} className="flex-shrink-0 m-4 p-6 bg-white border rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-indigo-500 hover:text-white  " style={{ width: '360px', height: '250px' }}>
              <img src={service.logo} alt={`Logo ${service.id}`} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
