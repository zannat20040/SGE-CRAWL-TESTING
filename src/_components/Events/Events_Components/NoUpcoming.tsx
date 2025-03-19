import React from "react";
import Image1 from "../../../../public/assets/Events and Event Registration/Event Planning 2/Artboard 1.png";
import Image2 from "../../../../public/assets/Events and Event Registration/Event Planning 2/Artboard 5.png";
import Image3 from "../../../../public/assets/Events and Event Registration/Event Planning 2/Artboard 6.png";
import Image4 from "../../../../public/assets/Events and Event Registration/Event Planning 2/coming-soon.png";
import Image from "next/image";
import "./NoEventFound.css";

export default function NoUpcoming() {
  return (
    <div className="mt-16 grid lg:grid-cols-2 grid-cols-1 gap-5 justify-between items-center">
      <div>
        <div className="relative">
          <Image
            src={Image1}
            alt="No Upcoming"
            width={100}
            height={100}
            className="w-full relative z-10"
          />
          <Image
            src={Image2}
            alt="No Upcoming"
            width={100}
            height={100}
            className="w-[30%] absolute bottom-2 sm:bottom-4 person2 z-20"
          />
          <Image
            src={Image3}
            alt="No Upcoming"
            width={100}
            height={100}
            className="w-[20%] absolute bottom-4 md:bottom-6 lg:bottom-4 xl:bottom-6  person1 z-20"
          />{" "}
          <Image
            src={Image4}
            alt="No Upcoming"
            width={100}
            height={100}
            className="w-[80px] md:w-[120px] absolute bottom-7 right-0 lg:-right-12 comming-soon z-[12] lg:z-[5]"
          />
        </div>
      </div>
      <div className="text-center px-4  flex flex-col justify-center items-center h-full">
        <h1 className="text-blue-900 poppins-bold text-4xl mb-4">Check back soon!</h1>
        <p className="text-2xl poppins-bold">We&apos;re planning some exiciting events for you.</p>
        </div>
    </div>
  );
}
