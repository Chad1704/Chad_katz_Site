import React, { useState, useEffect } from 'react';

function AsciiDrift({ randomOrder, text, keyProp }) {
  const [asciiText, setAsciiText] = useState([]);
  const [fadeKey, setFadeKey] = useState(0);  // Used to trigger fade effects
  const [isHovering, setIsHovering] = useState(false); // Track hover state
  
  // Shuffle the text if randomOrder is true
  const shuffleText = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  // Repeat the text enough times to fill the screen
  const getRepeatedText = () => {
    const numRepeats = Math.ceil(window.innerHeight / 30); // Adjust 30 for line height
    let repeatedText = [];
    
    for (let i = 0; i < numRepeats; i++) {
      repeatedText = repeatedText.concat(text);
    }
    
    // If randomOrder is true, shuffle the text
    if (randomOrder) {
      repeatedText = shuffleText(repeatedText);
    }
    
    return repeatedText;
  };

  useEffect(() => {
    // When keyProp changes (e.g. hover effect), update the text and trigger fade animation
    setFadeKey((prev) => prev + 1);  // Increment to trigger transition
    setAsciiText(getRepeatedText());
  }, [keyProp]);

  const handleMouseEnter = () => {
    setIsHovering(true);  // Start fading out when hovering
  };

  const handleMouseLeave = () => {
    setIsHovering(false);  // Start fading in when hover ends
  };

  return (
    <div 
      className="animate-ascii-drift flex flex-col text-left w-70 opacity-25"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {asciiText.map((line, i) => (
        <div
          key={i}
          className={`${
            isHovering ? "fade-out" : "fade-in"
          }`} // Apply fade-in or fade-out depending on hover state
        >
          {line}
        </div>
      ))}
    </div>
  );
}

export default AsciiDrift;
