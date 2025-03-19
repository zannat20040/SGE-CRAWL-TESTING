"use client";
import { useEffect, useState } from "react";

const AnimatedText = ({
  destinationName,
  popularIn = [], // Default to an empty array if popularIn is undefined
}: {
  destinationName: string;
  popularIn?: Array<string>; // Optional type for safety
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Ensure the interval runs only if popularIn has elements
    if (popularIn.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % popularIn.length);
      }, 1100);

      return () => clearInterval(intervalId); // Cleanup the interval
    }
  }, [popularIn]); // Depend on popularIn to handle dynamic updates

  if (popularIn.length === 0) {
    // Fallback UI when popularIn is empty
    return (
      <div className="mx-auto text-center">
        <p className="text-lg font-bold py-10">
          No popular programs available for {destinationName}.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold py-28 lg:w-[915px] mx-auto px-10">
        <span className="text-black leading-[65px] pr-2">
          Popular programs to study <br></br>in {destinationName}
        </span>
        <span
          className="inline-block animate-scroll animate-bounce delay-500 ease-in-out"
          style={{
            background:
              "var(--Orange-Gradient, linear-gradient(68deg, #ED1C24 -1.82%, #FCEC21 106.59%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {popularIn[currentIndex]}
        </span>
      </div>
      <div className="md:hidden text-3xl md:text-4xl lg:text-5xl font-bold py-14 mx-auto text-center px-10">
        <span className="text-black leading-relaxed md:leading-[65px] pr-2 ">
          Popular programs to study in {destinationName}
          <br></br>
        </span>
        <span
          className="inline-block animate-scroll animate-bounce delay-500 ease-in-out"
          style={{
            background:
              "var(--Orange-Gradient, linear-gradient(68deg, #ED1C24 -1.82%, #FCEC21 106.59%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {popularIn[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default AnimatedText;
