"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Requirement {
  title: string;
  description: string;
  img: string;
}

const colors = ["#59C3CF", "#E2635E", "#A881F3", "#58B1EA"]; // Valid CSS color codes

const RequirementCard = ({ require }: { require: Requirement }) => {
  const [randomColor, setRandomColor] = useState<string>("");

  useEffect(() => {
    // Set a random color after the component mounts
    const color = colors[Math.floor(Math.random() * colors.length)];
    setRandomColor(color);
  }, []);

  const description = require?.description || ""; // Fallback to empty string if undefined

  // Shorten the description
  const shortDescription = description.split("").slice(0, 200).join("");

  return (
    <div
      style={{ backgroundColor: randomColor }} // Apply the random color dynamically
      className={`pt-14 px-10 rounded-3xl transition-transform ease-in-out duration-1000 group`}
    >
      <div className="text-white">
        <h1 className="font-semibold text-2xl lg:text-4xl mb-3">
          {require?.title}
        </h1>
        <p className="break-words font-light visible group-hover:hidden h-auto group-hover:h-0 opacity-100 group-hover:opacity-0">
          {shortDescription}...
        </p>
        <p className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 duration-1000 break-words font-light lg:text-base text-sm">
          {require?.description}
        </p>
      </div>

      <div className="flex justify-end items-end">
        <Image
          alt={require?.title || "Image related to requirement"}
          src={require?.img}
          width={65}
          height={65}
          className="z-20 w-auto mt-5 group-hover:mt-12 duration-700"
        />
      </div>
    </div>
  );
};

const Requirement_Card_LargeScreen = ({
  requirement,
}: {
  requirement: Array<Requirement>;
}) => {
  const midIndex = Math.ceil(requirement.length / 2);
  const firstColumn = requirement.slice(0, midIndex);
  const secondColumn = requirement.slice(midIndex);

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-24 pb-36">
      {/* First Column */}
      <div className="flex flex-col gap-5">
        {firstColumn?.map((require, index) => (
          <RequirementCard require={require} key={`firstCol${index}`} />
        ))}
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-5">
        {secondColumn?.map((require, index) => (
          <RequirementCard require={require} key={`secondCol${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Requirement_Card_LargeScreen;
