"use client";

import React from "react";
import AsciiBackground from "./AsciiBackground";
import WireframeBackground from "./WireframeBackground";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Links from "./links.jsx";
import Link from "next/link";
import Projects from "./projects.jsx";
import ColorTester from "./colortester.js";

function Landing() {
  return (
    <>
      <div className=" overflow-hidden">
        <div className="grid grid-cols-10 grid-rows-10 h-screen bg-dark ">
          {/* ColorTester visible only below lg */}
          <div className="relative hero-border flex col-span-9 lg:col-span-6 row-start-1 lg:row-start-1 row-span-5 lg:row-span-7 overflow-hidden">
            <div className="absolute top-0 right-0 lg:hidden p-2 z-10">
              <ColorTester />
            </div>
            <Hero />
          </div>

          {/* About */}
          <div className="flex about-border col-span-9 lg:col-span-2 row-span-2 lg:row-span-7">
            <div className="grid grid-cols-10 grid-rows-10">
              {/* ColorTester visible only on lg and above */}
              <div className="h-fit w-fit hidden lg:block">
                <ColorTester />
              </div>

              <div className="col-start-1 col-span-9 row-span-9 row-start-3">
                <About />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex col-start-10 row-span-10 row-start-1 lg:row-span-10 lg:col-span-2">
            <Links />
          </div>

          {/* Projects */}
          <div className="overflow-hidden pro-border flex items-center justify-center col-span-9 lg:col-span-8 row-span-2 lg:row-span-4">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
