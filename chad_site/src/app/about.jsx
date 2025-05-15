"use client";

import React from "react";



function About() {
  return (
    <>
      <div className="  font-mono grid grid-cols-12 grid-rows-12 h-full w-full   ">
        <div className="flex duration-400 ease-in-out transition flex-col  md:row-start-1  h-fit text-light md:text-sm  lg:row-start-5 xl:row-start-6  col-start-2 row-start-1  col-span-11  justify-center row-span-3 sm:row-start-1 text-xs sm:text-sm xs:row-start-1    ">
          Student at Humber College, focusing on programming, UX design, and web
          development.
        </div>
        <div className="flex flex-col duration-400 ease-in-out transition  h-fit md:text-sm  text-light lg:row-start-8 col-start-2 xl:row-start-9  col-span-11 sm:row-start-8 justify-center row-span-2  row-start-6 text-xs sm:text-sm  ">
          Passionate about creating seamless digital experiences and always
          looking for new challenges to tackle.
        </div>
      </div>
    </>
  );
}

export default About;
