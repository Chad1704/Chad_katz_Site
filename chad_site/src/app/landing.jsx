"use client";

import React from "react";
import AsciiBackground from "./AsciiBackground";
import WireframeBackground from "./WireframeBackground";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Links from "./links.jsx";
import Link from "next/link";
import Projects from "./projects.jsx";

function Landing() {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-10 h-screen ">
        <div className="  relative  hero-border   flex  col-span-9 lg:col-span-6 row-span-5 lg:row-span-7 overflow-hidden  ">
          <Hero />
        </div>

        {/* About */}
        <div className="    flex items-center about-border justify-center  col-span-9  lg:col-span-2 row-span-2 lg:row-span-7">
          <About />
        </div>

        {/* Links */}
        <div className="  flex  col-start-10 row-span-10 row-start-1  lg:row-span-10 lg:col-span-2">
          <Links />
        </div>

        {/* Projects */}
        <div className=" overflow-hidden pro-border flex items-center  justify-center col-span-9 lg:col-span-8 row-span-2 lg:row-span-4">
          <Projects />
        </div>
      </div>
    </>
  );
}

export default Landing;
