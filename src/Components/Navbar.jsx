import React, { useState } from 'react';
import { FaApple, FaSearch, FaShoppingBag, FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navIcons = [
    { icon: <FaSearch />, href: "#" },
    { icon: <FaShoppingBag />, href: "#" }
  ];

  const navLinks = [
    "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Accessories", "Support"
  ];

  return (
  
      <nav className='flex justify-between items-center p-3 bg-white/95 sticky z-10 top-0 backdrop:blur-xl'>
        <div className='text-2xl'>
          <FaApple />
        </div>

        <ul className='hidden md:flex gap-3 items-center text-xs space-x-5'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href="#" className='cursor-pointer hover:underline'>{item}</a>
            </li>
          ))}
        </ul>

        <ul className='flex justify-center items-center gap-6 px-3'>
          {navIcons.map((item, index) => (
            <li key={index}>
              <a href={item.href} className='cursor-pointer'>{item.icon}</a>
            </li>
          ))}
          <li className='md:hidden'>
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <FaBars />
            </button>
          </li>
        </ul>
        <div className={`w-full h-full bg-white/95 fixed left-0 z-30 flex justify-between p-5 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'top-0' : '-top-full'} md:hidden`}>
      <ul className='space-y-4 font-semibold text-2xl'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href="#" className='cursor-pointer hover:underline'>{item}</a>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <IoMdClose className="text-3xl" />
          </button>
        </div>
     
      </div>
      </nav>
      
      

      
      
  
  );
};

export default Navbar;
