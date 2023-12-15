import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        {/* Address Section */}
        <div>
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

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Objectives</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Map Section */}
        <div>
          <img src="your-map-image-url.jpg" alt="Map" width="329" height="329" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
