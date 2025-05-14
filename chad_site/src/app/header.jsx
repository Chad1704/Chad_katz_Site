'use client';

import React, { useState } from 'react';
import TextEffect from './textEffect.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const menuItems = ['PROJECTS', 'BLOG', 'CONTACT', 'ABOUT'];
  const [triggers, setTriggers] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'enter' }));
  };

  const handleMouseLeave = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'leave' }));
  };

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center relative content-center z-20">
      {/* Left: Frog Logo */}
      <div className="flex items-center">
        <img src="frog2.png" className="h-16" alt="frog" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-xl items-center absolute left-1/2 transform -translate-x-1/2 justify-center  by7">
        {menuItems.map((item, index) => (
          <div
            key={item}
            className="btn"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <TextEffect text={item} trigger={triggers[index]} />
          </div>
        ))}
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-4 md:hidden">
          {menuItems.map((item, index) => (
            <div
              key={item}
              className="py-2 text-xl"
              onClick={() => {
                setMobileOpen(false); // Close menu on click
              }}
            >
              <TextEffect text={item} trigger={triggers[index]} />
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
