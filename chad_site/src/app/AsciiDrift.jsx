import React, { useState, useEffect } from 'react';

function AsciiDrift({ randomOrder, text, keyProp }) {
  const [asciiText, setAsciiText] = useState([]);

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
    setAsciiText(getRepeatedText());
  }, [keyProp]);

  return (
    <div className="animate-ascii-drift flex flex-col text-left w-70 opacity-25">
      {asciiText.map((line, i) => (
        <div key={i} className={i % 20 === 0 ? 'text-amber-300' : ''}>
          {line}
        </div>
      ))}
    </div>
  );
}

export default AsciiDrift;
