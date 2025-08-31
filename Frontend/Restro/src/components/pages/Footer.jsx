import React from "react";
import { FaFacebookF, FaInstagram, FaYelp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black font-Gilreg text-gray-300 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
    
        <div>
          <h2 className="text-lg font-bold text-white mb-4 relative">
            ABOUT RESTAURANT
            <span className="block w-12 h-[2px] bg-red-600 mt-2"></span>
            <span className="block w-6 h-[2px] bg-yellow-500"></span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis provident commodi veritatis impedit aspernatur cumque minima voluptatibus iste quod alias.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-red-600 p-2 rounded transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-red-600 p-2 rounded transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-red-600 p-2 rounded transition"
            >
              <FaYelp size={18} />
            </a>
            <a
              href="#"
              className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded transition text-black font-bold"
            >
              eP
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-4 relative">
            QUICK LINKS
            <span className="block w-12 h-[2px] bg-red-600 mt-2"></span>
            <span className="block w-6 h-[2px] bg-yellow-500"></span>
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">› Home</li>
            <li className="hover:text-red-500 cursor-pointer">› About Us</li>
            <li className="hover:text-red-500 cursor-pointer">› Menu</li>
            <li className="hover:text-red-500 cursor-pointer">› Contact Us</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-4 relative">
            HOURS
            <span className="block w-12 h-[2px] bg-red-600 mt-2"></span>
            <span className="block w-6 h-[2px] bg-yellow-500"></span>
          </h2>
          <ul className="text-sm space-y-1">
            <li>
              <strong>Monday to Thursday</strong>
              <br /> 11AM – 3PM & 5PM–10PM
            </li>
            <li>
              <strong>Friday to Saturday</strong>
              <br /> 12 – 10:30PM
            </li>
            <li>
              <strong>Sunday</strong>
              <br /> 12 – 9:30PM
            </li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-lg font-bold text-white mb-4 relative">
            LOCATION
            <span className="block w-12 h-[2px] bg-red-600 mt-2"></span>
            <span className="block w-6 h-[2px] bg-yellow-500"></span>
          </h2>
          <p className="text-sm mb-2 font-semibold">Address Location</p>
          <p className="flex items-start text-sm mb-4">
            <HiOutlineLocationMarker className="mt-1 mr-2 text-red-500" />
            81 Fremont Hub Courtyard, Fremont, CA 94538, USA
          </p>
          <p className="text-sm mb-2">
            <strong>Phone Number</strong>
            <br /> (331) 226-1981
          </p>
          <p className="text-sm">
            <strong>Email Address</strong>
            <br /> info@async.mohitt@gmail.com
          </p>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>Copyright ©2025 - Sankalp 2025 All Rights Reserved.</p>
        <p>
          Design by <span className="text-white">Mohit Kumar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
