"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

function Projects() {
  return (
    <div className="h-[300px] w-full flex justify-center items-center">
      <Carousel responsive={responsive} infinite autoPlay>
        <div className="bg-red-500 text-white p-8">Item 1</div>
        <div className="bg-blue-500 text-white p-8">Item 2</div>
        <div className="bg-green-500 text-white p-8">Item 3</div>
        <div className="bg-purple-500 text-white p-8">Item 4</div>
      </Carousel>
    </div>
  );
}

export default Projects;
