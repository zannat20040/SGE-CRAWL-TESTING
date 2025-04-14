"use client";

import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import sliders from "../../../../public/json/VideoData.json";
import { useSwipeable } from "react-swipeable";
import ReactPlayer from "./ReactPlayer";

const HomeVideoTestimonial = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  // Go to next slide
  const nextSlider = () =>
    setCurrentSlider((current) =>
      current === sliders.length - 1 ? 0 : current + 1
    );

  // Go to previous slide
  const prevSlider = () =>
    setCurrentSlider((current) =>
      current === 0 ? sliders.length - 1 : current - 1
    );

  // Enable swipe support for touch and mouse
  const handlers = useSwipeable({
    onSwipedLeft: nextSlider,
    onSwipedRight: prevSlider,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      className="bg-gradient-to-r from-[#031EE5] to-[#2081ff] overflow-hidden py-20 pb-10 md:pb-20"
      {...handlers}
    >
      <div className="md:grid grid-cols-2 block md:mx-20 md:ml-2 ml-0 relative gap-20">
        {/* Left section: heading and navigation buttons */}
        <div className="w-full md:ml-10 lg:ml-20 drop-shadow-lg">
          <h1 className="lg:text-7xl text-3xl sm:text-5xl lg:text-left md:text-left text-center font-bold mb-3 bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent w-full transition-all duration-300 px-4">
            Become a Part of Our Success Stories
          </h1>

          {/* Navigation buttons */}
          <div className="mt-14 md:mt-0 md:relative md:-top-[160px] flex gap-3 px-5 lg:pt-[200px] md:pt-[200px] pt-[400px] pb-10 md:mr-10 mr-0 md:justify-end justify-center">
            <button
              onClick={prevSlider}
              className="flex justify-center items-center text-white border-white border-[2px] lg:text-5xl md:text-5xl text-4xl hover:bg-white rounded-full lg:p-2 md:p-2 p-4 hover:text-black transition-colors duration-300"
            >
              <GoArrowLeft />
            </button>
            <button
              onClick={nextSlider}
              className="flex justify-center items-center text-white border-white border-[2px] lg:text-5xl md:text-5xl text-4xl hover:bg-white rounded-full lg:p-2 md:p-2 p-4 hover:text-black transition-colors duration-300"
            >
              <GoArrowRight />
            </button>
          </div>
        </div>

        {/* Right section: video slider */}
        <div className="lg:w-[1000px] md:w-[1000px] w-full flex justify-center items-center lg:relative md:relative absolute lg:top-0 md:top-0 top-[290px] lg:overflow-hidden md:overflow-hidden overflow-visible lg:ml-auto md:ml-auto ml-10">
          <div
            className="md:w-[60%] sm:w-[80%] w-[100%] ease-linear flex gap-[2%] absolute md:left-0 left-10 transition-transform duration-300 -mt-30 lg:mt-0 h-full items-center py-6"
            style={{ transform: `translateX(-${currentSlider * 52}%)` }}
          >
            {/* Render video slides */}
            {sliders.map((slide, inx) => (
              <div
                key={inx}
                className={`${
                  currentSlider === inx
                    ? "bg-gradient-to-b from-[#88D6F3] via-[#88F3D0] to-[#ACFFE4] transition-all duration-300 "
                    : "transition-all duration-300"
                } flex-grow !p-4 min-w-[50%] relative duration-200 bg-white rounded-3xl block cursor-pointer md:h-full`}
              >
                <div className="flex-1">
                  {/* Video Player */}
                  <div className="h-[300px] lg:h-[240px]">
                    <ReactPlayer
                      url={slide?.id}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </div>

                  {/* Name and Country (hidden on small devices) */}
                  <p className="text-xl lg:text-2xl mt-5 font-semibold text-center md:block hidden">
                    {slide.name}
                  </p>
                  <p className="text-xs lg:text-lg text-center md:block hidden">
                    {slide.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideoTestimonial;
