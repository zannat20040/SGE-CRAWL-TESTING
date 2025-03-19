"use client";
import React from "react";
import "./NewBanner.css";
import Image from "next/image";
import shape3 from "../../../../public/assets/Homepage/Half Shapes Updated/Shape-3.png";
import shape4 from "../../../../public/assets/Homepage/Half Shapes Updated/Shape-4.png";

export default function NewBanner() {
  return (
    <div className=" max-h-[700px] h-[700px] grid grid-cols-2 relative ">
      {/* left side  */}
      <div className="px-10 py-3 flex flex-col justify-center pt-0">
        <div>
          <h2 className="text-[#00399f] text-center tracking-tight lg:text-left text-[45px] lg:text-[80px] font-bold leading-[75px]">
            Start Your Path to <br /> Global Education
          </h2>
          <p className="font-normal lg:text-left text-center text-[14px] leading-[160%] lg:text-[21px] text-[#081831] pl-3  pt-[14px] pb-[30px]">
            We take pride in our ability to help students achieve <br /> their
            academic goals and succeed in life.
          </p>
          <label className="input input-bordered rounded-full h-16 flex items-center gap-2 w-4/5 border-[3px]  border-blue-900 !outline-none ">
            <input
              type="text"
              className="grow text-xl border-blue-900"
              placeholder="Find courses, universities, subjects..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      {/* right side  */}
      <div className="relative  w-full h-full ">
        <div className="w-full  absolute top-0 right-0 clip-paste h-[742px] z-20 ">
          <Image
            alt="shape3"
            src={shape3}
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>

        <div className="w-full  absolute top-0 right-0 clip-blue h-[742px] z-[25] ">
          <Image
            alt="shape4"
            src={shape4}
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>

        {/* Layer 1 - White */}
        <div
          className={`bg-white w-full h-[742px] absolute right-0 top-0 rounded-3xl rounded-r-none transition-transform duration-500  clip-white z-30`}
        ></div>
      </div>
    </div>
  );
}
