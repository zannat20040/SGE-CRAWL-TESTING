"use client";

import { useEffect, useState } from "react";
import Banner2SVG from "./Banner2SVG";
interface Banner2Props {
  destinationName: string;
  bannerSubtitle: string;
}

const Banner2: React.FC<Banner2Props> = ({ destinationName, bannerSubtitle }) => {

  const [truncatedText, setTruncatedText] = useState(bannerSubtitle);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTruncatedText(bannerSubtitle.length > 30 ? bannerSubtitle.slice(0, 175) + "..." : bannerSubtitle);
      } else {
        setTruncatedText(bannerSubtitle);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [bannerSubtitle]);

  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center overflow-hidden ">
      <Banner2SVG />
      <div className="absolute z-10 top-[10%] md:top-[15%] flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-4xl lg:text-6xl group-hover:text-white poppins font-extrabold">
        Welcome to  {destinationName}
        </h1>
        <p className="mt-1 md:mt-4 text-xs w-[80%] overflow-hidden md:text-lg font-semibold text-[#1F1F1F] md:w-3/5 px-10 text-center group-hover:text-white">
          {truncatedText}
        </p>
      </div>
    </div>
  );
};

export default Banner2;
