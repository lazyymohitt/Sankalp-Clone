import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-amber-100 text-black relative">
      {/* Left Logo */}
      <div className="text-2xl font-GilSB">MyLogo</div>

      {/* Center Links (Desktop) */}
      <ul className="hidden md:flex items-center gap-6 transition-all duration-300 ease-in">
        <li className="cursor-pointer hover:text-red-400">Home</li>
        <li className="cursor-pointer hover:text-red-400">About Us</li>
        <li className="cursor-pointer hover:text-red-400">Menu</li>
        <li className="cursor-pointer hover:text-red-400">Wine Menu</li>
        <li className="cursor-pointer hover:text-red-400">Contact Us</li>
        <Button name="Reservation" />
      </ul>

      {/* Right (Mobile Controls) */}
      <div className="flex md:hidden items-center gap-4">
        <Button name="Reservation" />
        <div
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Dropdown Menu with transition */}
      <ul
        className={`absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 md:hidden transition-all duration-300 ease-in-out origin-top 
        ${
          isOpen
            ? "opacity-100 scale-100 max-h-96"
            : "opacity-0 scale-95 max-h-0 overflow-hidden"
        }`}
      >
        <li className="cursor-pointer hover:text-red-400">Home</li>
        <li className="cursor-pointer hover:text-red-400">About Us</li>
        <li className="cursor-pointer hover:text-red-400">Menu</li>
        <li className="cursor-pointer hover:text-red-400">Wine Menu</li>
        <li className="cursor-pointer hover:text-red-400">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
