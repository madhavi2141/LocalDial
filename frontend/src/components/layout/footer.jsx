import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#001f3f] text-white py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>

          {/* About Us Section */}
          <div className='flex flex-col items-center justify-center space-y-4'>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200">
              <div className="text-white text-3xl font-bold tracking-wide">
                <span className="text-[#ffcc00]">local</span>
                <span>dial</span>
              </div>
            </div>
            <p className='space-y-8 text-center'>
              LocalDial seamlessly connects you with local businesses and services, making networking effortless. 
              Discover and engage with top companies in your area for a more accessible and vibrant community.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className='flex flex-col items-center justify-center space-y-3'>
            <h2 className='text-xl font-bold mb-2 text-[#ffcc00]'>Quick Links</h2>
            <ul className='space-y-2 text-center'>
              <li>
                <a href="/" className="hover:underline text-gray-300 transition-transform duration-300 hover:scale-110">
                  Home
                </a>
              </li>
              <li>
                <a href="/Feature" className="hover:underline text-gray-300 transition-transform duration-300 hover:scale-110">
                  Features
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline text-gray-300 transition-transform duration-300 hover:scale-110">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline text-gray-300 transition-transform duration-300 hover:scale-110">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className='flex flex-col items-center md:items-start space-y-3'>
            <h2 className='text-xl font-bold mb-2 text-[#ffcc00]'>Follow Us</h2>
            <div className='flex gap-5'>

              {/* Social Icons with Hover Animation */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-transform duration-300 hover:scale-125">
                <FaFacebook className="text-3xl text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-transform duration-300 hover:scale-125">
                <FaTwitter className="text-3xl text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-transform duration-300 hover:scale-125">
                <FaInstagram className="text-3xl text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-transform duration-300 hover:scale-125">
                <FaLinkedin className="text-3xl text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} <span className="text-[#ffcc00]">LocalDial</span>. All Rights Reserved.
          </p>
          <p className="mt-2">
            Made with ❤️ by the <a href="/" className="hover:text-[#ffcc00]">LocalDial Team</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
