"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiLocation } from "react-icons/ti";

export default function UniversityCards({url, destinationName, universities }) {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleCardClick = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <div
      className="mx-auto p-4 bg-[#EFF6FF] mb-40"
      onMouseLeave={() => setSelectedUniversity(null)}
    >
      <h1 className="lg:text-[56px] text-[28px] font-bold mb-12 text-center pt-20">
        Top Universities in The {destinationName}
      </h1>
      {destinationName === "Switzerland" && (
        <h1 className="text-[20px] container mx-auto  mb-12 text-center">
          Swiss universities are known for prioritizing research and innovation,
          leading to groundbreaking discoveries. They maintain high academic
          standards, which have produced 22 Nobel laureates. They consistently
          perform well in global rankings.
        </h1>
      )}

      <div className="flex max-w-screen-xl mx-auto py-28 ">
        <div
          className={`flex flex-wrap justify-center gap-8 h-auto max-h-[700px] overflow-y-auto ${
            selectedUniversity
              ? "lg:w-[66%] md:w-[33%] w-[33%] overflow-x-hidden uk-scrollbar"
              : "w-full"
          }`}
        >
          {universities?.length > 0 ? (
            <>
              {universities?.map((university, index) => (
                <div rel="nofollow"
                  key={index}
                  className="p-4 flex items-center justify-center bg-white rounded-lg cursor-pointer h-40"
                  onMouseDownCapture={() => handleCardClick(university)}
                >
                  <Image rel="nofollow"
                    width={200}
                    height={100}
                    src={university?.logo}
                    alt={university?.Name}
                    className="w-[200px] h-full object-contain lg:px-4 md:px-4 px-0"
                  />
                </div>
              ))}
            </>
          ) : (
            <p className="text-center italic mb-20 text-xl">
              Top Universities will be added soon.
            </p>
          )}
        </div>

        <div
          key={selectedUniversity?.name}
          className={`${
            selectedUniversity ? "lg:w-[34%] md:w-[66%] w-[66%]" : "hidden"
          }`}
        >
          {selectedUniversity && (
            <div rel="nofollow" className="p-4 bg-[EFF6FF] rounded-lg">
              <Image rel="nofollow"
                width={200}
                height={100}
                className="mx-auto h-auto md:w-[50%] w-auto mb-5"
                src={selectedUniversity?.logo}
                alt={selectedUniversity?.Name}
              />
              <h2 className="text-2xl font-bold mb-2">
                {selectedUniversity.Name}
              </h2>
              <p className="text-justify">{selectedUniversity.Overview}</p>
              <p className="poppins-bold text-sm pt-5">
                One of {`${destinationName}'s`} leading universities
              </p>
              <p className="flex items-center pt-5 pb-6 lg:text-sm text-[10px]">
                <TiLocation className="text-blue-500" /> Located in{" "}
                {selectedUniversity.location}
              </p>
              <Link href={`/study-destinations/${url}/${selectedUniversity?.Name.toLowerCase().replace(/ /g, "-").replace(/ö/g, "o")}`}>
                <button className="btn mt-4 lg:px-28 px-16 py-2 bg-blue-500 text-white rounded-3xl">
                  Apply Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
