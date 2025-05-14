"use client";

import React, { useEffect, useRef } from "react";

export default function TextEffect({ text, trigger }) {
  const wordRef = useRef(null);
  const scrambleChars = [".", ":", "-", "+", "*", "=", "%", "@", "#"];
  const delayBetweenLetters = 40;
  const frameDelay = 25;
  const originalText = text;

  const scrambleText = (letters, originalText, forward) => {
    if (forward) {
      letters.forEach((letterSpan, index) => {
        const originalChar = originalText[index];
        let i = 0;
        setTimeout(() => {
          const interval = setInterval(() => {
            if (i < scrambleChars.length) {
              letterSpan.textContent = scrambleChars[i % scrambleChars.length];
              i++;
            } else {
              clearInterval(interval);
              letterSpan.textContent = originalChar;
            }
          }, frameDelay);
        }, index * delayBetweenLetters);
      });
    } else {
      for (let index = letters.length - 1; index >= 0; index--) {
        const letterSpan = letters[index];
        const originalChar = originalText[index];
        let i = 0;
        setTimeout(() => {
          const interval = setInterval(() => {
            if (i < scrambleChars.length) {
              letterSpan.textContent = scrambleChars[i % scrambleChars.length];
              i++;
            } else {
              clearInterval(interval);
              letterSpan.textContent = originalChar;
            }
          }, frameDelay);
        }, (letters.length - 1 - index) * delayBetweenLetters);
      }
    }
  };

  useEffect(() => {
    const letters = wordRef.current.querySelectorAll(".letter");
    if (trigger === "enter") {
      scrambleText(letters, originalText, true);
    } else if (trigger === "leave") {
      scrambleText(letters, originalText, false);
    }
  }, [trigger]);

  return (
    <span ref={wordRef} className="texteffect">
      {text.split("").map((char, idx) => (
        <span key={idx} className="letter">
          {char}
        </span>
      ))}
    </span>
  );
}
