'use client';

import React, { useState } from 'react';
import TextEffect from './textEffect.jsx';
import {  FaGithub, FaLinkedin  , FaEnvelope, FaPaperclip  } from 'react-icons/fa'; // Import icons from react-icons

function Contact() {
  const menuItems = [
    { text: 'GITHUB', icon: <FaGithub /> },
    { text: 'EMAIL', icon: <FaEnvelope /> },
    { text: 'LINKEDIN', icon: <FaLinkedin   /> },
    { text: 'RESUME', icon: <FaPaperclip  /> },
  ];
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
        {menuItems.map((item, index) => (
          <a
            key={item.text}
            href={`#${item.text.toLowerCase()}`} // Change the href to the link you want
            target="_self" // Adjust as needed (e.g., _blank for new tab)
            className="btn"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="flex items-center gap-2">
              {/* Render the icon and text */}
              <span>{item.icon}</span>
              <TextEffect text={item.text} trigger={triggers[index]} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
