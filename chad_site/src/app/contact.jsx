'use client';

import React, { useState } from 'react';
import TextEffect from './textEffect.jsx';

function Contact() {
  const menuItems = ['LINKEDIN', 'EMAIL', 'GITHUB', 'RESUME'];
  const [triggers, setTriggers] = useState({});

  const handleMouseEnter = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'enter' }));
  };

  const handleMouseLeave = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'leave' }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        {/* Loop through the menu items and create buttons */}
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
      </div>
    </div>
  );
}

export default Contact;
