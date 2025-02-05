import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineBell, AiOutlineSearch, AiOutlineAudio } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`p-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#001f3f]/80 shadow-lg" : "bg-[#001f3f]"}`}
    >
      <div className="max-w-[1240px] py-[15px] flex justify-between items-center mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200">
          <FaGlobe className="text-white text-3xl" />
          <div className="text-white text-3xl font-bold tracking-wide">
            <span className="text-[#ffcc00]">local</span>
            <span>dial</span>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="hidden lg:flex items-center w-[30%] relative">
          <div className="flex items-center w-full bg-white rounded-full border-2 border-transparent focus-within:border-[#ffcc00] transition-all duration-300">
            <AiOutlineSearch className="text-gray-500 text-3xl mx-4 cursor-pointer" />
            <input
              type="text"
              placeholder="Search for local services near you..."
              className="w-full py-2 rounded-full text-black focus:outline-none"
            />
            <AiOutlineAudio className="text-gray-500 text-3xl mx-4 cursor-pointer hover:text-[#4285F4] transition duration-200" />
          </div>
        </div>

        {/* Menu Icon */}
        <div className="md:hidden flex items-center cursor-pointer">
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl"
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-white gap-5 items-center">
          <li className="cursor-pointer hover:text-[#ffcc00] transition-colors duration-300">
            <Link to="/">Home</Link> {/* Link to Home */}
          </li>
          <li className="cursor-pointer hover:text-[#ffcc00] transition-colors duration-300">
            <Link to="/feature">Feature</Link> {/* Link to Feature */}
          </li>
          <li className="cursor-pointer hover:text-[#ffcc00] transition-colors duration-300">
            <Link to="/about-us">About Us</Link> {/* Link to About Us */}
          </li>
          <li className="cursor-pointer hover:text-[#ffcc00] transition-colors duration-300">
            <Link to="/contact-us">Contact Us</Link> {/* Link to Contact Us */}
          </li>
          <select className="bg-[#001f3f] text-white border-2 border-[#ffcc00] rounded-lg px-2 py-1 focus:outline-none hover:bg-[#ffcc00] hover:text-black transition duration-200">
            <option value="en">English</option>
            <option value="es">Hindi</option>
            <option value="fr">Marathi</option>
            <option value="de">Korean</option>
          </select>
          <div className="flex items-center gap-4">
            {/* <div className="relative group cursor-pointer">
              <AiOutlineBell className="text-[#ffcc00] text-3xl group-hover:animate-bounce" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-3 h-3 flex items-center justify-center">
                3
              </span>
            </div> */}
            <a
              href="/Signup"
              className="bg-white text-blue-700 text-sm font-semibold px-3 py-2 rounded-lg shadow-md hover:bg-[#fef08a] hover:scale-105 transition-transform duration-300"
            >
              Signup
            </a>
          </div>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`md:hidden fixed top-[70px] w-full bg-[#001f3f] text-white flex flex-col items-start gap-5 px-5 py-10 transform duration-300 ${toggle ? "translate-x-0" : "-translate-x-full"}`}
      >
        <li className="cursor-pointer hover:bg-[#001e3c] p-3 rounded transition-colors duration-300 w-full text-left">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:bg-[#001e3c] p-3 rounded transition-colors duration-300 w-full text-left">
          <Link to="/feature">Feature</Link>
        </li>
        <li className="cursor-pointer hover:bg-[#001e3c] p-3 rounded transition-colors duration-300 w-full text-left">
         <Link to="/about-us">About Us</Link>
        </li>
        <li className="cursor-pointer hover:bg-[#001e3c] p-3 rounded transition-colors duration-300 w-full text-left">
         <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </header>
  );
}
