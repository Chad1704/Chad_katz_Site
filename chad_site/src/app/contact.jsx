'use client';

import React, { useState } from 'react';
import QuoteBox from './quotebox.jsx';
import TextEffect from './textEffect.jsx';
import AsciiBackground from './AsciiBackground.jsx';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperclip } from 'react-icons/fa';
import AsciiDrift from './AsciiDrift.jsx';  // Import the new component

function Contact() {
  const menuItems = [
    { text: 'GITHUB', icon: <FaGithub /> },
    { text: 'EMAIL', icon: <FaEnvelope /> },
    { text: 'LINKEDIN', icon: <FaLinkedin /> },
    { text: 'RESUME', icon: <FaPaperclip /> },
  ];

  const [triggers, setTriggers] = useState({});
  const [hoveredButton, setHoveredButton] = useState(''); // Track hovered button

  const contactQuotes = [
    `"The most important thing in communication is hearing what isn't said." – Peter Drucker`,
    `"Communication – the human connection – is the key to personal and career success." – Paul J. Meyer`,
    `"To effectively communicate, we must realize that we are all different in the way we perceive the world." – Tony Robbins`,
    `"The art of communication is the language of leadership." – James Humes`,
    `"You can make more friends in two months by becoming interested in other people than in two years by trying to get other people interested in you." – Dale Carnegie`,
    `"Connection is why we're here; it gives purpose and meaning to our lives." – Brené Brown`,
    `"Communication leads to community, that is, to understanding, intimacy, and mutual valuing." – Rollo May`,
    `"Your vibe attracts your tribe. Be authentic, and the right people will find you." – Unknown`,
  ];

  // Handle hover enter and leave for menu items
  const handleMouseEnter = (index, text) => {
    setTriggers((prev) => ({ ...prev, [index]: 'enter' }));
    setHoveredButton(text); // Set the hovered button
  };

  const handleMouseLeave = (index) => {
    setTriggers((prev) => ({ ...prev, [index]: 'leave' }));
    setHoveredButton(''); // Reset hover state
  };

  // ASCII text based on hovered button
  const getAsciiText = () => {
    switch (hoveredButton) {
      case 'GITHUB':
        return [
          '>_ Accessing GitHub...',
          '>_ Fetching repositories...',
          '>_ Connecting to GitHub API...',
          '>_ GitHub login successful.',
          '>_ You can now interact with code.',
        ];
      case 'EMAIL':
        return [
          '>_ Sending email...',
          '>_ Connecting to mail server...',
          '>_ Verifying email address...',
          '>_ Email sent successfully.',
          '>_ Please check your inbox.',
        ];
      case 'LINKEDIN':
        return [
          '>_ Opening LinkedIn...',
          '>_ Connecting to LinkedIn API...',
          '>_ Searching for connections...',
          '>_ LinkedIn profile loaded.',
          '>_ You have 5 new connection requests.',
        ];
      case 'RESUME':
        return [
          '>_ Preparing resume...',
          '>_ Formatting document...',
          '>_ Checking resume for errors...',
          '>_ Resume ready for download.',
          '>_ You can now apply for jobs.',
        ];
      default:
        return [
          '>_ RUNNING...',
          '>_ Initializing...',
          '>_ Loading data...',
          '>_ Please wait...',
          '>_ System operational.',
        ];
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* ASCII Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <AsciiBackground
          modelPath="/Models/frog.glb"
          modelSize={1}
          modelPositionX={-1}
          modelPositionY={-3}
          modelPositionZ={-3}
          friction={0.7}
          baseVelocity={{ x: 0.005, y: 0.005 }}
          forceFactor={0.0005}
        />
      </div>

      {/* Centered QuoteBox */}
      <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
        <QuoteBox quotePack={contactQuotes} transitionTime={15000} />
      </div>

      {/* Main Layout */}
      <div className="flex h-full w-full justify-between px-10">
        {/* Left Column */}
        <div className="mt-20">
          <div className="flex flex-col items-start">
            <h1 className="text-9xl text-left">
              Get In <br />
              <div className="text-amber-300 by7">Touch</div>
            </h1>
          </div>

          <div className="flex flex-col gap-4 font-mono mt-8">
            {menuItems.map((item, index) => (
              <a
                key={item.text}
                href={`#${item.text.toLowerCase()}`}
                target="_self"
                className="btn_2"
                onMouseEnter={() => handleMouseEnter(index, item.text)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="relative flex w-full h-full items-center">
                  <span className="absolute z-9 pl-3.5">{item.icon}</span>
                  <div className="w-full h-full justify-end by7b pr-5 flex items-center">
                    <TextEffect text={item.text} trigger={triggers[index]} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right ASCII Drift */}
        <AsciiDrift 
          randomOrder={true} 
          text={getAsciiText()} 
          keyProp={hoveredButton} 
        />
      </div>
    </div>
  );
}

export default Contact;
