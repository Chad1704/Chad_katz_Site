'use client';

import React, { useEffect, useState } from 'react';
import TextEffect from './textEffectBuild';

export default function QuoteBox({ quotePack, transitionTime = 7000 }) {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * quotePack.length));

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * quotePack.length);
      } while (newIndex === index); // avoid repeating the same quote

      setIndex(newIndex);
    }, transitionTime);

    return () => clearInterval(interval);
  }, [quotePack.length, transitionTime, index]);

  return (
    <div className="flex items-center justify-center max-w-150 text-center text-2xl md:text-3xl font-mono bg-black max-w-4xl px-4 h-fit">
      <TextEffect text={quotePack[index]} />
    </div>
  );
}
