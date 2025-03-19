import React from "react";
import "@/_components/Home/Banner/Banner.css";
import { TiStarburst } from "react-icons/ti";
import { PiMedalFill } from "react-icons/pi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";
import Image from "next/image";

export const metadata = {
  title: "Award",
  description: "Discover our achievements and recognitions that highlight our commitment to excellence in education consultancy.",
  keywords: ["education awards", "achievements", "recognitions", "education consultancy", "academic excellence"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/award`,
  },
};
export default function page() {
  const text = "CELEBRATE ACHIEVEMENTS.";
  const Letter = text.split("");

  const awards = [
    {
      title: "Power 100 Nominee for Contribution to Higher Education in the UK",
      reason:
        "Recognized for significant contributions to the promotion and support of higher education in the UK, highlighting impact on international student recruitment.",
      awardedBy: "The Higher Education Academy",
      year: 2017,
      icon: <TfiCup className="text-4xl text-[#00399F] font-thin" />,
    },
    {
      title: "Top Overseas Student Consultant",
      reason:
        "Acknowledged for excellence in providing guidance and consultancy services to international students seeking education in the UK.",
      awardedBy: "Various UK universities and educational bodies",
      year: "Multiple (specific years can be detailed based on records)",
      icon: <TiStarburst className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Certificate of Outstanding Recruitment",
      reason:
        "Recognized for outstanding performance in recruiting international students, demonstrating commitment to the success of students and institutions.",
      awardedBy: "Several partner universities",
      year: "Multiple (specific years can be detailed based on records)",
      icon: <PiMedalFill className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "VIP Partner Status",
      reason:
        "Acknowledged for exemplary collaboration and performance in recruiting students for various universities, enhancing the reputation and reach of the institutions.",
      awardedBy: "Partner universities and educational associations",
      year: "Ongoing recognition",
      icon: <FaHandshakeAngle className="text-5xl text-[#00399F] font-thin" />,
    },
  ];

  return (
    <div className="bg-[#EFF6FF]">
      {/* banner */}
      <div className="relative z-[2]">
        <div className="section">
          <div className="section-bg"></div>
          <div className="section-content pt-[31px] lg:pt-[93px] lg:pb-[206px] pb-[70px] max-w-[1155px] mx-auto px-5">
            <div className="text-center lg:text-left lg:pl-10">
              <h2 className="text-[#00399f] text-center tracking-tight lg:text-left text-[45px] lg:text-[90px] font-bold lg:leading-[110px] leading-[130%]">
                Our Awards and Recognitions
              </h2>
              <p className="font-normal lg:text-left text-center text-[14px] leading-[160%] lg:text-[21px] text-[#081831]   pt-[14px] lg:pb-[61px] pb-[19px]">
                We are dedicated to empowering professionals to achieve their
                <br></br> career aspirations and thrive in the global
                marketplace.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center max-w-[1155px] mx-auto">
          <div className="circle">
            <div className="icon">
              <svg
                width="56"
                height="56"
                className="animate-bounce"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3333 9.33333C30.3333 8.04467 29.2887 7 28 7C26.7113 7 25.6667 8.04467 25.6667 9.33333V42.2002L14.4832 31.0168C13.572 30.1055 12.0946 30.1055 11.1834 31.0168C10.2722 31.928 10.2722 33.4054 11.1834 34.3166L24.7002 47.8333C26.5226 49.6558 29.4774 49.6558 31.2998 47.8333L44.8166 34.3166C45.7278 33.4054 45.7278 31.928 44.8166 31.0168C43.9054 30.1055 42.428 30.1055 41.5168 31.0168L30.3333 42.2002V9.33333Z"
                  fill="#35383F"
                />
              </svg>
            </div>
            <div className="text-two">
              <p className="poppins-semibold">
                {Letter.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="letter"
                      style={{
                        transform: `rotate(${index * 15.5}deg)`,
                      }}
                    >
                      {item}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* award */}
      {/* tab section */}
      <div className=" py-15 ">
        <div className="mt-0 lg:mt-24  max-w-6xl mx-auto px-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10">
          <Image
            width={100}
            height={100}
            className="w-full rounded-2xl"
            src="/assets/Partner with us/Team Winning Award.webp"
            alt=""
          />
          <div className="flex-col gap-10 flex mt-10">
            {awards?.map((value, index) => (
              <div key={index} className="flex gap-5 ">
                <div className="w-auto">
                  <div className="w-14 h-14 rounded-full bg-white relative">
                    <p className="absolute -top-1 -left-1">{value?.icon}</p>
                  </div>
                </div>

                <div className="">
                  <h2 className="mb-1 font-semibold text-base poppins-semibold">
                    {value?.title}
                  </h2>
                  <p className="">{value?.reason}</p>
                  <p className="text-gray-700 poppins-semibold text-sm">
                    Awarded By: {value?.awardedBy}
                  </p>
                  <p className="text-gray-700 poppins-semibold text-sm">
                    Year: {value?.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      <div className="pb-48"></div>
    </div>
  );
}
