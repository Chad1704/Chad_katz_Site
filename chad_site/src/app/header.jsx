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
    <div className="flex items-center justify-center gap-2 text-xl font-mono">
      {menuItems.map((item, index) => (
        <React.Fragment key={item}>
          <div
            className="btn"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <TextEffect text={item} trigger={triggers[index]} />
          </div>
          {index < menuItems.length - 1 && <span className="mx-1"> </span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Header;
