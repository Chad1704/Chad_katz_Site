"use client";


import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import { GoArrowUpRight, GoChevronRight, GoChevronLeft  } from "react-icons/go";
import projectsData from "./projectsData"

// Dynamically import to disable SSR for the carousel
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => (
  <div className="text-shadow-md text-light opacity-70 hover:opacity-100">
    <button
      onClick={onClick}
      className="absolute left-0  duration-400 ease-in-out top-1/2 transform -translate-y-1/2 z-10 p-2 transition group"
    >
      <GoChevronLeft className="text-5xl h-full w-full transition-transform duration-200 ease-in-out group-hover:scale-110" />
    </button>
  </div>
);

// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => (
  <div className=" transition duration-400 ease-in-out text-shadow-md text-light opacity-70 hover:opacity-100">
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 transition"
  >
    <GoChevronRight className="text-5xl  h-full w-full hover" />
  </button>
  </div>
);

// Project Card
function WithStyles({ title, tags, image, link, desc }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
  <div
    className="relative grid grid-cols-10 grid-rows-10 w-full h-64 card-border text-light transition duration-400 ease-in-out hover:bg-light hover:text-dark overflow-hidden"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Background image layer */}
    {isHovered && image && (
      <div
        className="absolute inset-0 z-0 transition-transform duration-200 ease-in-out"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
      />
    )}

    {/* Foreground content */}
    <div className="relative z-10 col-start-1 ml-5 col-span-10 row-start-2">
      <h2 className="text-3xl by7">{title}</h2>
      <div className="mt-2 flex flex-col gap-1 opacity-70">
        {tags?.map((tag, idx) => (
          <span key={idx} className="font-mono text-md">
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="relative z-10 flex row-start-7 col-start-9 text-2xl text-dark">
      <GoArrowUpRight />
    </div>
  </div>
</a>

  );
}

// Carousel breakpoints
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

// Projects Component with Carousel
function ProjectsHub() {
  return (
    <div className="w-full h-full">
      {Carousel && (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}

          
        >

          {projectsData.map((project) => (
            <WithStyles
              key={project.Project_Id}
              title={project.Project_Name}
              tags={project.Project_Tags}
              image={project.Project_Img}
              link={project.Project_Link}
              desc={project.Project_Desc}
              date={project.Project_Date}
            />
          ))}
          
        </Carousel>
      )}
    </div>
  );
}

export default ProjectsHub;
