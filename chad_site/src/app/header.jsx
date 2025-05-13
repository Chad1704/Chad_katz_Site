'use client';

import React, { useState } from 'react';
import TextEffect from './textEffect.jsx';

function Header() {
  const menuItems = ['PROJECTS', 'BLOG', 'CONTACT', 'ABOUT'];
  const [triggers, setTriggers] = useState({});

  const handleMouseEnter = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'enter' }));
  };

  const handleMouseLeave = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'leave' }));
  };

  return (
    <div className=" w-full h-20   ">
      <div className="relative flex items-center justify-between h-full ">
        {/* Left-aligned frog */}
        <div className="w-16 h-full flex items-center">
          <img src="frog2.png" className="h-15 " alt="frog" />
        </div>

        {/* Centered buttons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-xl by7">
          {menuItems.map((item, index) => (
            <React.Fragment key={item}>
              <div
                className="btn"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <TextEffect text={item} trigger={triggers[index]} />
              </div>
              {index < menuItems.length - 1 && <span className="mx-1"></span>}
            </React.Fragment>
          ))}
        </div>

        {/* Right-side spacer for symmetry */}
        <div className="w-16 h-full" />
      </div>
    </div>
  );
}

export default Header;
