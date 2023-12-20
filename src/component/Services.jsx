import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineComputer } from 'react-icons/md';
import { IoLogoAndroid } from 'react-icons/io';
import { FaMailBulk } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';

const Service = () => {
  // Sample data for cards with corresponding icons
  const servicesData = [
    { id: 1, icon: <FaSearch size={44} />, name: 'Digital Marketing' },
    { id: 2, icon: <MdOutlineComputer size={44} />, name: 'Web Design' },
    { id: 3, icon: <IoLogoAndroid size={44} />, name: 'Android/IOS Develpoment' },
    { id: 4, icon: <FaMailBulk size={44} />, name: 'Bulk Sms Services' },
    { id: 5, icon: <FaHandshake size={44} />, name: 'Consulting Services' },
    { id: 6, icon: <FaServer size={44} />, name: 'Web Hosting' },
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
            <div
              key={service.id}
              className="flex-shrink-0 m-4 p-6 bg-[#F6F4F9] border rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-[#6222CC]  hover:text-white relative flex flex-col justify-center items-center"
              style={{ width: '360px', height: '250px' }}
            >
              <div className="flex items-center justify-center mb-4 text-white">
                <div
                  className="rhombus  "
                  style={{
                    width: '82px',
                    height: '78px',
                    background: '#6222CC ',
                    borderRadius: '25%',
                    transform: 'rotate(45deg)',
                    position: 'absolute',
                    zIndex: -1,
                  }}
                ></div>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 hover:text-white">{service.name}</h3>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="flex mt-4">
          {servicesData.slice(3, 6).map((service) => (
            <div
              key={service.id}
              className="flex-shrink-0 m-4 p-6 bg-white border rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-[#6222CC]  hover:text-white relative flex flex-col justify-center items-center"
              style={{ width: '360px', height: '250px' }}
            >
              <div className="flex items-center justify-center mb-4 text-white">
                <div
                  className="rhombus"
                  style={{
                  
                    width: '82px',
                    height: '78px',
                    background: '#6222CC ',
                    transform: 'rotate(45deg)',
                    borderRadius: '25%',
                    position: 'absolute',
                    zIndex: -1,
                  }}
                ></div>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 hover:text-white">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

