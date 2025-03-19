import Image from "next/image";
import SubHeading from "../../../_components/AboutUs/Who_we_are/SubHeading";
import TimelineLayout from "../../../_components/AboutUs/Who_we_are/TimelineLayout";
import { GiDrippingStar } from "react-icons/gi";
import {
  PiAirplaneTiltThin,
  PiChalkboardTeacherLight,
  PiEyeLight,
  PiGlobeStandLight,
  PiGlobeThin,
  PiGraduationCapThin,
  PiHandshakeThin,
  PiLightbulbThin,
  PiMoneyWavyLight,
  PiPencilSimpleLineThin,
} from "react-icons/pi";
import { GoSync } from "react-icons/go";
import { BsCheck2Circle } from "react-icons/bs";
import { TfiBriefcase } from "react-icons/tfi";
import Banner from "../../../_components/shared/About/Banner";
import ParaGraph from "@/_components/shared/About/ParaGraph";
import FloatingCard from "@/_components/shared/About/FloatingCard";
import HoverCard from "@/_components/shared/About/HoverCard";
import IconCard from "@/_components/shared/About/IconCard";
import { PiBuildingsThin, PiGlobeHemisphereEastThin } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
export const metadata = {
  title: "Who We Are",
  description:
    "Get to know us! We are dedicated to guiding students on their study abroad journey with expert advice, support, and a passion for education.",
  keywords: [
    "about us",
    "who we are",
    "study abroad experts",
    "education consultants",
    "student support",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/who-we-are`,
  },
};

export default function page() {
  const services = [
    {
      title: "Education Consultancy",
      description:
        "They guide students through the entire process of selecting universities, preparing applications, and ensuring their chosen courses match their academic and career goals. They also offer career counselling to help students choose the right path.",
    },
    {
      title: "Student Visa Processing",
      description:
        "Shabuj Global helps students navigate the often complicated visa application process, ensuring they submit all required documents and increasing their chances of visa approval.",
    },
    {
      title: "Scholarship Guidance",
      description:
        "They assist students in identifying and applying for scholarships, providing support to increase the chances of securing financial aid for their studies.",
    },
    {
      title: "Additional Support",
      description:
        "Beyond admissions and visa processing, Shabuj Global offers test preparation services, assistance with university transfers, and guidance for students transitioning to a new country.",
    },
  ];

  const values = [
    {
      title: "Student-Centred Approach",
      description:
        "Prioritising the individual needs and aspirations of each student, ensuring personalised support and guidance.",
      icon: (
        <PiGraduationCapThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Integrity and Transparency",
      description:
        "Providing clear and honest information about programs, universities, visa processes, and opportunities abroad.",
      icon: <PiEyeLight className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Excellence in Service",
      description:
        "Striving to deliver top-notch counselling, training, and services to students, helping them achieve their academic and career goals.",
      icon: <GiDrippingStar className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Cultural Sensitivity",
      description:
        "Respecting and understanding the cultural backgrounds of Bangladeshi students while helping them adapt to the academic and social environments of their chosen study destinations.",
      icon: <PiGlobeStandLight className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Continuous Improvement",
      description:
        "Staying up-to-date with global education trends, university requirements, and immigration policies to provide the best support possible.",
      icon: <GoSync className="text-2xl text-[#00399F] font-thin" />,
    },
  ];

  const goals = [
    {
      title: "Empowering Bangladeshi Students",
      description:
        "Helping students realise their full potential by guiding them through the process of applying to international universities and achieving their academic goals.",
      icon: <PiLightbulbThin className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Facilitating Global Exposure",
      description:
        "Providing students with opportunities to gain global exposure, which will not only enhance their academic knowledge but also broaden their cultural and professional perspectives.",
      icon: (
        <PiAirplaneTiltThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Support in Admission and Visa Process",
      description:
        "Offering end-to-end support, from helping students select suitable universities and courses to assisting with admission applications, visa processing, and post-arrival arrangements.",
      icon: <BsCheck2Circle className="text-2xl text-[#00399F] font-thin" />,
    },
    {
      title: "Enhancing Career Prospects",
      description:
        "Helping students pursue education that aligns with their career aspirations, ensuring they acquire the skills and qualifications that are highly valued in the global job market.",
      icon: <TfiBriefcase className="text-2xl text-[#00399F] font-thin" />,
    },
    {
      title: "Building Partnerships",
      description:
        "Collaborating with universities, colleges, and other educational institutions abroad to create a wide range of opportunities for students.",
      icon: <PiHandshakeThin className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Promoting Higher Education Abroad",
      description:
        "Encouraging Bangladeshi students to explore international education and the benefits of studying in countries with world-class academic environments.",
      icon: <PiGlobeThin className="text-3xl text-[#00399F] font-thin" />,
    },
  ];

  const helpServices = [
    {
      title: "University Admission Assistance",
      description:
        "They help students apply to universities, offering guidance through the entire process from selecting institutions to preparing application materials.",
      icon: (
        <PiPencilSimpleLineThin className="text-5xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Scholarship Guidance",
      description:
        "They assist students in finding and applying for scholarships, improving chances of financial support for education.",
      icon: <PiMoneyWavyLight className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Educational Consulting",
      description:
        "Expert consultants provide personalised advice on course selection, career planning, and the best pathways for academic success.",
      icon: (
        <PiChalkboardTeacherLight className="text-5xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Support for International Students",
      description:
        "Shabuj Global provides specialised services for students coming from abroad, including visa support, accommodation assistance, and helping them adjust to the new environment.",
      icon: <PiGlobeThin className="text-5xl text-[#00399F] font-thin" />,
    },
  ];

  const BannerDescription = [
    {
      para: "Shabuj Global Education is an enlisted professional student consultancy firm, approved by the British Council. It specialises in academic counselling, course placement, and internal student recruitment. It has been working with universities from around the world to find the right UK course placements since 2010. Shabuj Global helps its customers find undergraduate, postgraduate, and foundation courses, and also aids MBA and MSc students.",
    },
    {
      para: "Shabuj Global Education was founded in 2010. It is a UK-based consultancy that provides services to students, primarily from Bangladesh, seeking to study abroad in countries like the UK, Canada, the US, and Australia. The organisation has supported over 145,000 students in their educational journeys, assisting them in securing admissions to top universities worldwide.",
    },
    {
      para: "Shabuj Global Education provides a variety of services to help students pursue higher education abroad. Their core offerings include:",
    },
  ];

  const JourneyDescription = [
    {
      para: "Shabuj Global Education is dedicated to helping students from around the world access higher education, particularly in the UK. Its mission is to provide personalised support to students, guiding them through the process of selecting the right courses and universities based on their individual needs. The organisation aims to bridge the gap between students and educational institutions, facilitating over 145,000 successful admissions.",
    },
    {
      para: "Their vision focuses on enabling students to achieve academic success by offering tailored advice, ensuring that the educational programs align with both personal goals and career aspirations. Shabuj Global Education is committed to empowering students to access quality education, regardless of their financial situation, and they actively promote scholarships to support.",
    },
    {
      para: "Shabuj Global Education Key milestones include:",
    },
  ];

  const milestones = [
    {
      title: "2010",
      description: "Establishment in the UK.",
      icon: <PiBuildingsThin className="h-5 w-5  text-white" />,
    },
    {
      title: "Early 2010s",
      description:
        "Expanded operations to serve Bangladeshi students, aiming at placing them in prestigious global universities.",
      icon: <PiGlobeHemisphereEastThin className="h-5 w-5  text-white" />,
    },
    {
      title: "2013-2015",
      description:
        "The company began working with top-tier universities, including those from the Russell Group in the UK, marking a major expansion in its portfolio of partners.",
      icon: <LiaUniversitySolid className="h-5 w-5  text-white" />,
    },
    {
      title: "2020s",
      description:
        "Shabuj Global continued to grow, placing over 145,000 students worldwide, and expanded its services to facilitate student transfers between universities.",
      icon: <PiGraduationCapThin className="h-5 w-5  text-white" />,
    },
  ];

  return (
    <div className="">
      {/* header */}

      <Banner
        title={"Know More About Us"}
        description={BannerDescription}
        style={"text-white"}
      />

      {/* service section */}
      <FloatingCard services={services} style={"grid-cols-1 md:grid-cols-2 "} />

      {/*What We Stand For */}
      <div className="bg-[#EFF6FF] py-12">
        <div className=" max-w-6xl mx-auto px-10">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              What We Stand For
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Shabuj Global Education is an organisation dedicated to assisting
              students, particularly from Bangladesh, in pursuing education
              abroad. Its values and goals likely focus on the following key
              aspects:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between  mt-10">
            {/* goals */}
            <div>
              <SubHeading label="Goals" />
              <IconCard data={goals} />
            </div>

            {/* center img */}
            <div className="w-full flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-1/3 h-2/3 rounded-2xl invisible"
                src="https://i.ibb.co.com/6g2cqsq/hand-drawn-study-abroad-illustration-23-2150314526-removebg-preview.png"
                alt="Study Concept"
              />
            </div>

            {/* values */}
            <div>
              <SubHeading label="Values" />
              {/* <div className="flex-col gap-10 flex mt-10">
                {values?.map((value,index) => (
                  <div  key={index} className="flex gap-5 ">
                    <div className="w-auto">
                      <div className="w-10 h-10 rounded-full bg-white relative">
                        <p className="absolute -top-1 -left-1">{value?.icon}</p>
                      </div>
                    </div>

                    <div className="">
                      <h2 className="mb-1 font-semibold text-base poppins-semibold">
                        {value?.title}
                      </h2>
                      <p className="text-sm">{value?.description}</p>
                    </div>
                  </div>
                ))}
              </div> */}
              <IconCard data={values} />
            </div>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className=" max-w-6xl mx-auto py-14 px-5">
        <div className=" mb-14 ">
          <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
            Our Journey
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-10 items-center justify-between">
            <ParaGraph
              description={JourneyDescription}
              style={"text-gray-700 max-w-lg"}
            />

            <TimelineLayout timelineData={milestones} />
          </div>
        </div>
      </div>

      {/* how we help */}
      <div className="bg-[#EFF6FF] py-12">
        <div className=" max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px]">
              How We Help
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Shabuj Global Education offers a range of services to support
              students in pursuing higher education, primarily focused on
              facilitating university admissions, particularly in the UK.
            </p>
            <p className="poppins-regular ">Their services include:</p>
          </div>
          <div>
            {/* values */}
            <HoverCard
              data={helpServices}
              style={"grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}
            />
          </div>
        </div>
      </div>

      <div className="pb-52"></div>
    </div>
  );
}
