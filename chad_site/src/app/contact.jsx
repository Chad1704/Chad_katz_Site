'use client';

import React, { useState } from 'react';
import QuoteBox from './quotebox.jsx';
import TextEffect from './textEffect.jsx';
import AsciiBackground from './AsciiBackground.jsx';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperclip } from 'react-icons/fa';
import AsciiDrift from './AsciiDrift.jsx';  // Import the new component

function Contact() {
  const menuItems = [
    { text: 'GITHUB', icon: <FaGithub />, link: 'https://github.com/Chad1704' },
    { text: 'EMAIL', icon: <FaEnvelope />, link: '#test' },
    { text: 'LINKEDIN', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/chadkatz/' },
    { text: 'RESUME', icon: <FaPaperclip />, link: '#test' },
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
  `"Words are, of course, the most powerful drug used by mankind." – Rudyard Kipling`,
  `"The way we communicate with others and with ourselves ultimately determines the quality of our lives." – Tony Robbins`,
  `"Good communication is just as stimulating as black coffee, and just as hard to sleep after." – Anne Morrow Lindbergh`,
  `"We are stronger when we listen, and smarter when we share." – Rania Al-Abdullah`,
  `"Assumptions are the termites of relationships." – Henry Winkler`,
  `"Speak clearly, if you speak at all; carve every word before you let it fall." – Oliver Wendell Holmes Sr.`,
  `"Listening is being able to be changed by the other person." – Alan Alda`,
  `"The single biggest problem in communication is the illusion that it has taken place." – George Bernard Shaw`,
  `"Empathy is the starting point for creating a community and taking action. It's the impetus for creating change." – Max Carver`,
  `"When people talk, listen completely. Most people never listen." – Ernest Hemingway`,
  `"Communication is your ticket to success, if you pay attention and learn to do it effectively." – Theo Gold`,
  `"The most basic of all human needs is the need to understand and be understood." – Ralph G. Nichols`,
  `"Real connection happens when we feel seen, heard, and valued." – Unknown`
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
    '>_ Loading repository details...',
    '>_ Cloning repository...',
    '>_ Fetching commit history...',
    '>_ Creating a new branch...',
    '>_ Pushing changes to remote...',
    '>_ Synchronizing fork...',
    '>_ Fetching pull requests...',
    '>_ Updating repository settings...',
  ];

case 'EMAIL':
  return [
    '>_ Sending email...',
    '>_ Connecting to mail server...',
    '>_ Verifying email address...',
    '>_ Email sent successfully.',
    '>_ Please check your inbox.',
    '>_ Attaching files...',
    '>_ Composing message...',
    '>_ Checking for email delivery status...',
    '>_ Sending read receipt...',
    '>_ Checking spam folder...',
    '>_ Retrieving sent items...',
    '>_ Synchronizing inbox...',
    '>_ Encrypting message...',
  ];

case 'LINKEDIN':
  return [
    '>_ Opening LinkedIn...',
    '>_ Connecting to LinkedIn API...',
    '>_ Searching for connections...',
    '>_ LinkedIn profile loaded.',
    '>_ You have 5 new connection requests.',
    '>_ Sending connection requests...',
    '>_ Searching for job opportunities...',
    '>_ Updating LinkedIn profile...',
    '>_ Viewing connection\'s posts...',
    '>_ Checking job recommendations...',
    '>_ Endorsing skills...',
    '>_ Viewing LinkedIn groups...',
    '>_ Managing job alerts...',
  ];

case 'RESUME':
  return [
    '>_ Preparing resume...',
    '>_ Formatting document...',
    '>_ Checking resume for errors...',
    '>_ Resume ready for download.',
    '>_ You can now apply for jobs.',
    '>_ Adding contact information...',
    '>_ Updating work experience...',
    '>_ Adding skills and certifications...',
    '>_ Reviewing resume layout...',
    '>_ Finalizing document...',
    '>_ Proofreading resume...',
    '>_ Converting to PDF...',
    '>_ Saving final version...',
  ];

default:
  return [
    '>_ RUNNING...',
    '>_ Initializing...',
    '>_ Loading data...',
    '>_ Please wait...',
    '>_ System operational.',
    '>_ Checking system health...',
    '>_ Optimizing performance...',
    '>_ Loading system configuration...',
    '>_ Performing diagnostics...',
    '>_ System ready for use...',
    '>_ Analyzing data...',
    '>_ Updating system components...',
    '>_ Verifying data integrity...',
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
      <div className="absolute inset-0 flex justify-center items-center z-10   pointer-events-none">
        <div className='w-fit'>
        <QuoteBox quotePack={contactQuotes} transitionTime={15000} />
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col sm:flex-row h-full w-full justify-between px-10">

        {/* Left Column */}
        <div className="mt-5">
          <div className="flex flex-col items-start">
            <h1 className="text-9xl text-left header md:pt-3">
              Get In <br />
              <div className="text-amber-300 by7">Touch</div>
            </h1>
          </div>

       <div className="w-fit flex justify-center mt-8 ">
  <div className=" md:pl-50 md:pt-7 flex flex-col gap-4 font-mono contact-buttons items-center">


            {menuItems.map((item, index) => (
              <a
                key={item.text}
                href={`${item.link.toLowerCase()}`}
                target="_blank"
                className="btn_2"
                onMouseEnter={() => handleMouseEnter(index, item.text)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="relative flex w-full h-full items-center">
                  <span className="absolute z-9 pl-3.5">{item.icon}</span>
                  <div className="w-full h-full justify-end by7 pr-5 flex items-center">
                    <TextEffect text={item.text} trigger={triggers[index]} />
                  </div>
                </div>
              </a>
            ))}
          </div>
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
