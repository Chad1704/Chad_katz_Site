"use client";

import React from "react";
import AsciiBackground from "./AsciiBackground";
import WireframeBackground from "./WireframeBackground";
import Hero from "./hero.jsx";

function Links() {
  return (
    <div className="w-full  h-full flex justify-center ">
      <div className="flex flex-col space-y-14 md:space-y-17 lg:ml-30 mt-20 ">
        <div className="linkbar text-center">Linkedin</div>
        <div className="linkbar text-center">Blog</div>
        <div className="linkbar text-center">Github</div>
        <div className="linkbar text-center">Email</div>
        <div className="linkbar text-center">Resume</div>
      </div>
    </div>
  );
}

export default Links;
