import TimelineLayout from "@/_components/AboutUs/Who_we_are/TimelineLayout";
import Banner from "@/_components/shared/About/Banner";
import ParaGraph from "@/_components/shared/About/ParaGraph";
import React from "react";
import { PiGlobeHemisphereEastThin, PiTrophy } from "react-icons/pi";
import { SiOpenjsfoundation } from "react-icons/si";
import { PiUser } from "react-icons/pi";
import Image from "next/image";

export const metadata = {
  title: "Timeline",
  description:
    "Explore our journey and milestones over the years. See how we’ve grown and evolved to help students achieve their study abroad dreams.",
  keywords: [
    "company timeline",
    "milestones",
    "study abroad journey",
    "education growth",
    "student success history",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/timeline`,
  },
};

export default function page() {
  const GlobalEducationDescription = [
    {
      para: "In terms of services, Shabuj Global offers a comprehensive suite that includes academic counselling, assistance with university applications, and visa guidance. They also provide post-admission support, which includes help with university transfers and advice on scholarships. Recently, the organisation has enhanced its offerings by integrating career counselling services aimed at improving student placement outcomes post-graduation.",
    },
    {
      para: "On the placement front, Shabuj Global Education has facilitated over 30,000 enrollments globally, and their ongoing partnerships ensure that students not only secure university placements but also internships and career opportunities that align with their long-term goals.",
    },
  ];
  const GlobalEducationDescription2 = [
    {
      para: "Shabuj Global Education has been making significant strides in its efforts to support students seeking higher education abroad, particularly in the UK, Canada, the USA, and Australia. Over the years, it has formed partnerships with several prestigious universities, including some from the UK's Russell Group, to help students gain admission into a wide range of programs, from foundation levels to PhDs.",
    },
  ];

  const milestones = [
    {
      title: "2010",
      description:
        " Foundation of Shabuj Global Education, with a focus on UK university admissions.",
      icon: <SiOpenjsfoundation className="h-5 w-5  text-white" />,
    },
    {
      title: "Expansion:",
      description:
        "Gradually extended its services to other countries and established multiple offices, including those in Bangladesh and the UK.",
      icon: <PiGlobeHemisphereEastThin className="h-5 w-5  text-white" />,
    },
    {
      title: "Student Support",
      description:
        "SGE has helped over 120,000 students with admissions, facilitating more than 30,000 enrollments globally.",
      icon: <PiUser className="h-5 w-5  text-white" />,
    },
  ];

  const OrganizationHistory = [
    {
      para: "Shabuj Global Education (SGE) was established in 2010 as an education consultancy, primarily focused on facilitating university admissions in the UK for both local and international students. Over the years, it has grown into a prominent player in the education services sector, assisting students from South Asia and beyond to secure admissions in prestigious institutions worldwide.",
    },
    {
      para: "Key milestones in the organisation's history include:",
    },
  ];

  const developementDescription2 = [
    {
      para: "Shabuj Global Education (SGE) is a UK-based educational consulting company founded in 2010. It provides services to help students, particularly from South Asia, secure admissions to universities worldwide, with a special focus on UK institutions.",
    },
    {
      para: "Key events in its development include:",
    },
  ];

  const development = [
    {
      title: "2010",
      description:
        "Foundation of Shabuj Global Education, marking the start of operations in international student placement.",
      icon: <SiOpenjsfoundation className="h-5 w-5 text-white" />,
    },
    {
      title: "2013",
      description:
        "Gained recognition through partnerships with UK universities, especially those awarded the TEF Gold Award.",
      icon: <PiTrophy className="h-5 w-5 text-white" />,
    },
    {
      title: "Present",
      description:
        "Assisted over 120,000 students with more than 30,000 successful university placements, hosting global education expos.",
      icon: <PiUser className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <div>
      <Banner
        title={"Know More About Our Timeline"}
        description={GlobalEducationDescription2}
        style={"text-white"}
      />

      {/* timeline */}
      <div className=" max-w-6xl mx-auto py-14 px-5">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2  gap-10 items-center justify-between mt-8 mb-14 ">
          <TimelineLayout timelineData={milestones} />

          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Our Timeline
            </h2>
            <ParaGraph
              description={OrganizationHistory}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
        </div>
      </div>

      {/* support  */}
      <div className="  py-14 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Global Education Support
            </h2>
            <ParaGraph
              description={GlobalEducationDescription}
              style={"text-gray-700 max-w-lg"}
            />
          </div>

          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="/assets/Partner with us/Education Timeline Illustration.webp"
            alt=""
          />
        </div>
      </div>

      {/* development milestone */}
      <div className=" max-w-6xl mx-auto py-14 px-5">
        <div className="grid grid-cols-1  md:grid-cols-2  gap-10 items-center justify-between mt-8 mb-14 ">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Development of Shabuj Global Education{" "}
            </h2>
            <ParaGraph
              description={developementDescription2}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
          <TimelineLayout timelineData={development} />
        </div>
      </div>
      <div className="pb-32"></div>
    </div>
  );
}
