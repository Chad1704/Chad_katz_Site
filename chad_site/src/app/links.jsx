"use client";

import React from "react";


function Links() {
  return (
    <div className="w-full font-mono h-full flex justify-center">
      <div className="flex flex-col space-y-14 md:space-y-17 lg:ml-30 mt-20 text-light duration-400 ease-in-out transition">
        <a
          href="https://www.linkedin.com/in/chadkatz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkbar text-center opacity-70 hover:opacity-100">
            Linkedin
          </div>
        </a>
        <a
          href="https://github.com/Chad1704"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkbar text-center opacity-70 hover:opacity-100">
            Blog
          </div>
        </a>
        <a
          href="https://github.com/Chad1704"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkbar text-center opacity-70 hover:opacity-100">
            Github
          </div>
        </a>
        <a
          href="mailto:chadjoshkatz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkbar text-center opacity-70 hover:opacity-100">
            Email
          </div>
        </a>
        <a
          href="/404"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkbar text-center opacity-70 hover:opacity-100">
            Resume
          </div>
        </a>
      </div>
    </div>
  );
}

export default Links;
