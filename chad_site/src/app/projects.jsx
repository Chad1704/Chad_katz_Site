"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import { GoArrowUpRight } from "react-icons/go";

// Dynamically import to disable SSR for the carousel
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

// Placeholder card component: empty square
function WithStyles({ title, tags, image, link, desc }) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer ">
        <div className="grid grid-cols-10 grid-rows-10 w-full h-64 card-border  text-light  hover:bg-light transition duration-400 ease-in-out hover:text-dark">
          {/* Example usage of props — update or style as needed */}
          <div className=" ml-15 mt-15">
            <h2 className="text-3xl by7 ">{title}</h2>
            <div className="mt-3 flex flex-col gap-1 opacity-70 ">
              {tags?.map((tag, idx) => (
                <span key={idx} className="font-mono text-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Example tags display */}

            {/* Optional link */}
          </div>
          <div className=" flex row-start-9 col-start-10 text-2xl text-dark  ">
            <GoArrowUpRight />
          </div>
        </div>
      </a>
    </>
  );
}

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

function Projects() {
  return (
    <div className="w-full h-full ">
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
        >
          <WithStyles
            title="Title 1"
            tags={["React", "Next.js", "Carousel"]}
            desc="Description of project 1"
            link="https://example.com"
          />

          <WithStyles
            title="Portfolio Website"
            tags={["HTML", "CSS", "JavaScript"]}
            desc="A clean and responsive personal portfolio to showcase projects and skills."
            link="https://yourportfolio.com"
          />

          <WithStyles
            title="Weather App"
            tags={["API", "React", "Tailwind"]}
            desc="A weather forecasting app that uses a public API to display real-time weather data."
            link="https://weatherlyapp.netlify.app"
          />
        </Carousel>
      )}
    </div>
  );
}

export default Projects;
