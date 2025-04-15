"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { DisplayCountriesProps } from "@/assets/type/interfaces";

// Component to display a grid of destination cards with hover effects
export default function DisplayCountries({
  countries,
  loading,
  error,
}: DisplayCountriesProps) {
  // Track the index of the card being hovered
  const [hoverIndex, setHoverIndex] = useState<number>(100);

  // Show loading state
  if (loading) {
    return <div className="py-3 px-5 text-center text-white">Loading...</div>;
  }

  // Show error state
  if (error) {
    return <div className="py-3 px-5 text-center text-white">{error}</div>;
  }

  return (
    <div className="grid w-[300px] sm:w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-36 my-10 max-w-7xl mx-auto p-5 lg:p-0">
      {/* Render each destination as a card */}
      {countries.map((country, index) => (
        <Link
          key={`${country.destinationName}-${index}`}
          href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/study-destinations/${country.url}`}
          onMouseEnter={() => setHoverIndex(index)} // Activate hover effect
          onMouseLeave={() => setHoverIndex(100)}  // Reset hover effect
          className="bg-transparent md:w-3/4 lg:w-4/6 md:mx-auto rounded-3xl h-[250px] relative"
        >
          {/* Flag Image (rotates on hover) */}
          <div
            style={{
              transform: hoverIndex === index ? "rotate(-10deg)" : "none",
              transformOrigin: "bottom right",
              transition: "transform 0.5s ease",
            }}
          >
            <Image
              src={country.destinationFlag}
              width={100}
              height={100}
              alt={country.destinationName}
              priority
              className="h-[300px] w-full rounded-3xl bg-white scale-x-[-1]"
            />
          </div>

          {/* Overlay Card (shows destination name and button) */}
          <div
            style={{
              transform:
                hoverIndex === index
                  ? "rotate(10deg) translateY(40px) translateX(30px)"
                  : "none",
              transformOrigin: "bottom left",
              transition: "transform 0.5s ease",
            }}
            className={`absolute top-0 left-0 flex flex-col justify-around items-center w-full h-[300px] rounded-3xl ${
              hoverIndex === index ? "bg-[#08214b] z-20" : "bg-[#081831] z-10"
            }`}
          >
            <h3 className="text-[#88F3D0] text-2xl font-bold text-center">
              {country.destinationName}
            </h3>
            <button className="w-fit bg-[#2563EB] rounded-full text-white p-2">
              <LiaGreaterThanSolid />
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
