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
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col items-center gap-4 font-mono ">
        {menuItems.map((item, index) => (
          <a
            key={item.text}
            href={`#${item.text.toLowerCase()}`} // Change the href to the link you want
            target="_self" // Adjust as needed (e.g., _blank for new tab)
            className="btn_2"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="flex w-full h-full items-center justify-center ">
              {/* Render the icon and text */}
              <span className='flex justify-center bg-green-500'>{item.icon}</span>
              <div className='flex items-center justify-center w-full h-full bg-amber-400'>
              <TextEffect className="" text={item.text} trigger={triggers[index]} /></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
