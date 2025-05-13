'use client'; // <-- Add this as the very first line
import React, { useState } from 'react';
import TextEffect from './textEffect.jsx';
import AsciiBackground from './AsciiBackground.jsx'; // Import your new component
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperclip } from 'react-icons/fa';

function Contact() {
  const menuItems = [
    { text: 'GITHUB', icon: <FaGithub /> },
    { text: 'EMAIL', icon: <FaEnvelope /> },
    { text: 'LINKEDIN', icon: <FaLinkedin /> },
    { text: 'RESUME', icon: <FaPaperclip /> },
  ];

  const [triggers, setTriggers] = useState({});

  const handleMouseEnter = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'enter' }));
  };

  const handleMouseLeave = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'leave' }));
  };

  return (
    <div className="relative h-full w-full "> 
      {/* Pass the model path and size as props */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <AsciiBackground modelPath="/Models/frog.glb" modelSize={1.5} modelPositionX={-1} modelPositionY={-6} modelPositionZ={-3} rotationSpeed={-1000.5}/> {/* Adjust size here */}
      </div>

      <div className="flex h-full">
        <div className='flex border-0 w-screen'>
          <h1 className='text-8xl text-left mt-10 ml-10'>
            Get In <br />
            <div className='text-amber-300 by7'>Touch</div>
          </h1>
        </div>

        <div className="flex flex-col items-center mt-22 h-fit gap-4 font-mono mr-40">
          {menuItems.map((item, index) => (
            <a
              key={item.text}
              href={`#${item.text.toLowerCase()}`}
              target="_self"
              className="btn_2"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="relative flex w-full h-full items-center">
                <span className="absolute z-9 pl-3.5">{item.icon}</span>
                <div className="w-full h-full by7b justify-end pr-5 flex items-center">
                  <TextEffect text={item.text} trigger={triggers[index]} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
