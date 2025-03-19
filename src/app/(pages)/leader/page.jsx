import ParaGraph from "@/_components/shared/About/ParaGraph";
import Image from "next/image";
import React from "react";
import { PiInstagramLogoLight, PiYoutubeLogoThin } from "react-icons/pi";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";

export const metadata = {
  title: "Leadership",
  description:
    "Meet the leaders who drive our mission forward, guiding students toward success with expertise, vision, and dedication.",
  keywords: ["leadership team", "education leaders", "study abroad experts", "company vision", "team leadership"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/leader`,
  },
};


export default function page() {
  const bio = [
    {
      para: "As CEO of Shabuj Global Education, I lead a team committed to guiding students toward world-class educational opportunities abroad. By building strong partnerships with global institutions, we help students find the right academic path to achieve their goals. I’m passionate about driving growth, fostering innovation, and expanding access to high-quality education worldwide.",
    },
    {
      para: "I am eager to connect with educational institutions, students, and channel partners who share a vision of making education accessible to all, regardless of location. Since 2010, I have been serving students, universities, and institutions, ensuring higher education is within reach for everyone. Every citizen should have access to better education, and I believe in working together to grow together.",
    },
  ];

  return (
    <div>
      <div className="">
        {/* banner img */}
        {/* <Image
          width={80}
          height={80}
          className=" w-full h-[600px]  grayscale"
          src="https://i.ibb.co.com/JyQBfH3/founder.png"
          alt=""
        /> */}

        <div className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center p-[30px] px-5 gap-10 ">
          <div>
            {/* card left */}
            <div className="flex flex-col justify-between items-center ">
              <Image
                width={100}
                height={100}
                src="/assets/About Us/4. Meet our Founder/MD Zahidul Alam.webp"
                className=" w-full h-full rounded-xl"
                alt="image"
              />
              <div className="mt-8 text-center">
                {/* info */}
                <h2 className="poppins-semibold text-[30px] text-[#081831] ">
                  MD. Zahidul Alam
                </h2>
                <p className="poppins-normal text-lg tracker-[0.01em] text-gray-700">
                  {" "}
                  CEO at Shabuj Global Education
                </p>
                <p className="poppin-normal tracking-wide ">Premium member</p>
              </div>
            </div>
          </div>

          {/* card right */}
          <div className="">
            {/* about */}
            <ParaGraph description={bio} style={"text-gray-700 w-full"} />

            <div className="flex gap-2  items-center  mt-6">
              <RiFacebookLine className="bg-gray-300 text-3xl p-3 hover:translate-y-2 hover:bg-blue-900 hover:text-white duration-500 transition-all w-12 h-12 rounded" />
              <RiLinkedinLine className="bg-gray-300 text-3xl p-3 hover:translate-y-2 hover:bg-blue-900 hover:text-white duration-500 transition-all w-12 h-12 rounded" />
              <CiTwitter className="bg-gray-300 text-3xl p-3 hover:translate-y-2 hover:bg-blue-900 hover:text-white duration-500 transition-all w-12 h-12 rounded" />
              <PiInstagramLogoLight className="bg-gray-300 text-3xl p-3 hover:translate-y-2 hover:bg-blue-900 hover:text-white duration-500 transition-all w-12 h-12 rounded" />
              <PiYoutubeLogoThin className="bg-gray-300 text-3xl p-3 hover:translate-y-2 hover:bg-blue-900 hover:text-white duration-500 transition-all w-12 h-12 rounded" />
            </div>

            {/* experience */}
            <div>
              <h2 className=" mt-6 poppins-semibold text-[28px] text-black mb-2 leading-[39.2px]">
                Experience
              </h2>
              <div>
                <p className="text-xl ">CEO</p>
                <p className="poppins-bold">Shabuj Global Education </p>
                <p className="text-gray-700">Jul 2010 - Present 14 yrs 4 mos</p>
              </div>
            </div>

            {/* experience */}
            <div>
              <h2 className=" mt-6 poppins-semibold text-[28px] text-black mb-2 leading-[39.2px]">
                Education
              </h2>
              <div>
                <p className="text-xl ">London South Bank University</p>
                <p className="text-gray-700">
                  Msc international business . International Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-48"></div>
    </div>
  );
}
