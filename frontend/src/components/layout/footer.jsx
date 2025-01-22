import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#001f3f] text-white py-12'>
      <div className='max-w-7xl mx-auto px-4'>
       
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          
          {/* About Us Section */}
          <div className='space-y-4'>
            <h2 className='text-xl font-bold mb-2 text-[#ffcc00]'>About Us</h2>
            <p className='text-gray-300'>
              localdial is your go-to platform for connecting with local businesses and services. We provide a seamless experience for discovering and engaging with companies in your area. Our mission is to empower local communities by making business connections simple and efficient.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className='flex flex-col items-center justify-center space-y-3'>
            <h2 className='text-xl font-bold mb-2 text-[#ffcc00]'>Quick Links</h2>
            <ul className='space-y-2 text-center'>
              <li><a href="" className="hover:underline text-gray-300">Home</a></li>
              <li><a href="" className="hover:underline text-gray-300">Features</a></li>
              <li><a href="" className="hover:underline text-gray-300">Contact Us</a></li>
              <li><a href="" className="hover:underline text-gray-300">About Us</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className='flex flex-col items-center md:items-start space-y-3'>
            <h2 className='text-xl font-bold mb-2 text-[#ffcc00]'>Follow Us</h2>
            <div className='flex gap-5'>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffcc00] transition-colors duration-300"
              >
                <FaFacebook className="text-3xl text-blue-600" />
                <p className="text-gray-300 text-sm mt-2">Facebook</p>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffcc00] transition-colors duration-300"
              >
                <FaTwitter className="text-3xl text-blue-400" />
                <p className="text-gray-300 text-sm mt-2">Twitter</p>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffcc00] transition-colors duration-300"
              >
                <FaInstagram className="text-3xl text-gradient-to-r from-purple-500 to-pink-500" />
                <p className="text-gray-300 text-sm mt-2">Instagram</p>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffcc00] transition-colors duration-300"
              >
                <FaLinkedin className="text-3xl text-blue-700" />
                <p className="text-gray-300 text-sm mt-2">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} <span className="text-[#ffcc00]">localdial</span>. All Rights Reserved.
          </p>
          <p className="mt-2">
            Made with ❤️ by <a href="/" className="hover:text-[#ffcc00]">localdial Team</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
