"use client";
import React from "react";

function Hero() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
        <div className=" col-span-2 row-span-2 col-start-2 row-start-2  ">
          <img src="frog2.png" className="h-15" alt="frog" />
        </div>

        <div className="flex flex-col row-start-7 col-start-2 col-span-8 justify-center row-span-2   ">
          <div className="text-3xl text-left header md:pt-3 align-middle text-amber-200  by7  ">
            Chad Katz
          </div>
        </div>
        <div className="flex flex-col  row-start-9 justify-center   col-start-2 col-span-12 row-span-4  ">
          <div className=" text-4xl by7  align-middle ">
            Web Developer | Digital Creator | Problem Solver
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
