"use client";

import React, { useEffect, useRef } from "react";

export default function TextEffect({
  text,
  scrambleChars = [".", ":", "-", "+", "*", "=", "%", "@", "#"],
  delayBetweenLetters = 40,
  frameDelay = 25,
}) {
  const wordRef = useRef(null);
  const previousText = useRef("");

  const scrambleOutIn = (oldText, newText, container) => {
    const maxLength = Math.max(oldText.length, newText.length);
    container.innerHTML = ""; // Clear previous spans

    for (let i = 0; i < maxLength; i++) {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = oldText[i] || " ";
      container.appendChild(span);
    }

    const letters = container.querySelectorAll(".letter");

    letters.forEach((span, i) => {
      const finalChar = newText[i] || " ";
      let scrambleIndex = 0;

      setTimeout(() => {
        const interval = setInterval(() => {
          if (scrambleIndex < scrambleChars.length) {
            span.textContent = scrambleChars[scrambleIndex];
            scrambleIndex++;
          } else {
            clearInterval(interval);
            span.textContent = finalChar;
          }
        }, frameDelay);
      }, i * delayBetweenLetters);
    });
  };

  useEffect(() => {
    const container = wordRef.current;
    scrambleOutIn(previousText.current, text, container);
    previousText.current = text;
  }, [text]);

  return (
    <span
      ref={wordRef}
      className="texteffect font-mono text-sm italic text-gray-400"
    />
  );
}
