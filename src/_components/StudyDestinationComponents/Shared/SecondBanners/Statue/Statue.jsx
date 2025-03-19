import React from "react";
import './Statue.css'
import Image from "next/image";

export default function Statue({ bannerSubtitle, destinationName, bgColor }) {
  return (
    <div className=" rounded-3xl py-16 md:px-10 px-4 container mx-auto ">
      <div
        style={{ backgroundColor: bgColor  }}
        className="grid grid-cols-1 md:grid-cols-10 container mx-auto rounded-3xl px-4 h-[650px] duration-150 md:h-auto why-us"
      >
        {/* left text section  */}
        <div className="col-span-1 md:col-span-6 lg:col-span-8 text-center text-white p-6 md:p-14  md:pr-0">
          <h1 className="text-2xl sm:text-4xl font-semibold mb-7 mt-5 md:mt-0">
            Why Study in The {destinationName}?
          </h1>
          <p className="font-light text-justify sm:text-base text-sm">
            {bannerSubtitle}
          </p>
        </div>

        {/* right statue section */}
        <div className="col-span-1 md:col-span-4 lg:col-span-2 relative statue w-full ">
          <div className="absolute bottom-0 md:left-16 right-0  md:mx-auto w-fit  mr-0 lg:w-full">
            <Image
                  height={100}
                  width={100}
                  alt="group_Image"
              src="/assets/USA/WhyUs/Group.svg"
              className="relative statue1-animation "
            />
            <Image
            alt="groupImage"
                  height={100}
                  width={100} src="/assets/USA/WhyUs/Group (1).svg" />
            <Image
                  height={100}
                  width={100}
                  alt="whyUs_Image"
              src="/assets/USA/WhyUs/Vector.svg"
              className="statue3-animation2 relative left-0 w-3 h-auto"
            />
            <Image
                  height={100}
                  width={100}
                  alt="whyUs_Vector"
              src="/assets/USA/WhyUs/Vector.svg"
              className="statue3-animation relative left-20 w-3 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
