import Image from "next/image";
import React from "react";
import ParaGraph from "./ParaGraph";


export default function Banner({ title, description, style }) {
  return (
    <div className="relative h-full">
      {/* Background Image */}
      <Image
        src="/assets/News/News-And-Press-Banner.webp" 
        alt="Banner Image"
        fill
        priority
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-neutral-content flex justify-start w-full px-5 md:px-16 h-full">
        <div className="max-w-4xl py-28 pb-20 text-start xl:ml-64 lg:ml-32 md:ml-32 ml-0">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold poppins-bold capitalize">
            {title}
          </h1>
          <ParaGraph description={description} style={style} />
        </div>
      </div>
    </div>
  );
}

