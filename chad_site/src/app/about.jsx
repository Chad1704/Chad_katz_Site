"use client";

import React from "react";
import AsciiBackground from "./AsciiBackground";
import WireframeBackground from "./WireframeBackground";
import Hero from "./hero.jsx";

function About() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full  ">
        <div className="flex flex-col text-light lg:row-start-6 col-start-2  col-span-11  justify-center row-span-3 sm:row-start-2 row-start-2    ">
          Student at Humber College, focusing on programming, UX design, and web
          development.
        </div>
        <div className="flex flex-col text-light lg:row-start-10 col-start-2   col-span-11 sm:row-start-9 justify-center row-span-2  row-start-8   ">
          Passionate about creating seamless digital experiences and always
          looking for new challenges to tackle.
        </div>
      </div>
    </>
  );
}

export default About;
