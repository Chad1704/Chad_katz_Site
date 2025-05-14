'use client';

import React, { useEffect, useState } from 'react';
import TextEffect from './textEffectBuild';


export default function QuoteBox({ quotePack, transitionTime = 7000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotePack.length);
    }, transitionTime);

    return () => clearInterval(interval);
  }, [quotePack.length, transitionTime]);

  return (
    <div className="flex items-center justify-center text-center text-2xl md:text-3xl font-mono bg-black text-white max-w-4xl px-4 h-fit">
  <TextEffect text={quotePack[index]} />
</div>

  );
}
