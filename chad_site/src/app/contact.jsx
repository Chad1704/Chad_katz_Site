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
    <div className="flex h-full  bg-green-500 ">

      <div className='flex bg-amber-950'>
        TEST
      </div>

      <div className="flex flex-col items-center justify-center h-fit w-full bg-gradient-to-b from-amber-600 to-amber-400">

      </div>
      <div className="flex flex-col items-center h-fit border border-amber-600  gap-4 font-mono  ">
        {menuItems.map((item, index) => (
          <a
            key={item.text}
            href={`#${item.text.toLowerCase()}`} // Change the href to the link you want
            target="_self" // Adjust as needed (e.g., _blank for new tab)
            className="btn_2"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="relative  flex w-full h-full items-center ">
  {/* Absolutely position the icon over the center */}
  <span className="absolute z-9 pl-3.5 ">
    {item.icon}
  </span>

  {/* This fills the entire container */}
  <div className="w-full h-full     justify-end pr-5 flex items-center">
    <TextEffect className="" text={item.text} trigger={triggers[index]} />
  </div>
</div>

          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
