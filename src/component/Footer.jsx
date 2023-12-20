import React from 'react';
import wavehaikei from '../assets/wavehaikei.png';

const Footer = () => {
  return (
    <footer className="relative text-white py-8 mt-32">
      {/* Background Image Section */}
      <div className="bg-cover h-40 relative" style={{ backgroundImage: `url(${wavehaikei})` }}>
        <div className="container mx-auto absolute inset-0 flex justify-between items-center">
          {/* Quick Links Section */}
          <div className="text-gray-400">
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">
                Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Objectives</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="text-gray-400">
            <h3 className="text-lg font-bold mb-4">ADDRESS</h3>
            <ul className="list-none p-0">
              <li className="mb-2">Plot No. 131/09, 3rd Floor, Above Beauty Junction,</li>
              <li className="mb-2">Al-Qumar Complex, M.P. Nagar Zone- II,</li>
              <li className="mb-2">Bhopal, Madhya Pradesh, 462011</li>
              <li className="mb-2">+91 95864 13079</li>
              <li className="mb-2">info@techjain.com</li>
              <li>sales@techjain.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
