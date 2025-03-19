import Banner from "@/_components/shared/About/Banner";
import FloatingCard from "@/_components/shared/About/FloatingCard";
import HoverCard from "@/_components/shared/About/HoverCard";
import ParaGraph from "@/_components/shared/About/ParaGraph";
import IconCard from "@/_components/shared/About/IconCard";
import Image from "next/image";
import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import {
  PiChalkboardTeacherThin,
  PiGlobeHemisphereEastThin,
  PiGraduationCapThin,
  PiPathThin,
} from "react-icons/pi";
import { TfiSupport } from "react-icons/tfi";
import { FaRegHandshake } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";

export const metadata = {
  title: "Partners",
  description: "Discover our valued partners who help us provide the best study abroad opportunities and support for students worldwide.",
  keywords: ["education partners", "study abroad collaborations", "university partnerships", "global education network", "student support partners"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/partners`,
  },
};


export default function page() {

  const PartnersDescription = [
    {
      para: "Shabuj Global Education (SGE) partners with various universities and institutions around the world to help students pursue higher education, particularly in the UK. Some of their notable partnerships include universities within the Russell Group, which comprises prestigious institutions known for research excellence in the UK. SGE facilitates admissions for undergraduate to doctoral programs, working with local and international students to secure placements in these universities.",
    },
    {
      para: "Shabuj Global Education (SGE) offers various partnerships and programs to support international students. These include:",
    },
  ];

  const PartnersProgram = [
    {
      title: "Study Programs",
      description:
        "SGE collaborates with a broad range of universities globally, providing services that help students gain admission to undergraduate, graduate, and postgraduate programs. They assist with university selection, course enrollment, and even transfers between institutions.",
    },
    {
      title: "Scholarships",
      description:
        "SGE runs scholarship programs to support financially disadvantaged students, ensuring they have access to the same educational opportunities as others. This initiative not only benefits the students but also contributes to the community by investing in education.",
    },
    {
      title: "Collaboration Agreements",
      description:
        "SGE forms partnerships with academic institutions to facilitate seamless educational pathways for students, including academic collaborations, exchange programs, and joint research opportunities.",
    },
  ];

  const JoinDescription = [
    {
      para: "Become a channel partner with Shabuj Global Education and help students achieve their academic dreams. We provide training and support to empower you in guiding students through their higher education journey. Join us and make a difference in the lives of aspiring learners!",
    },
  ];
  const HowDescription = [
    {
      para: "Channel partners are vital to Shabuj Global Education’s success. They connect with students, offer personalized guidance, and foster relationships with universities. Their local expertise enhances our services and expands our reach, helping students achieve their educational goals. Together, we make a lasting impact in the global education landscape.",
    },
  ];
  const CommittedDescription = [
    {
      para: "Become a part of Shabuj Global Education and contribute to our mission of empowering students. We are looking for dedicated professionals who are passionate about education and eager to make a difference. At SGE, you'll find a supportive environment that encourages growth, collaboration, and innovation. Join us and help shape the future of aspiring learners around the world!",
    },
  ];

  const benefits = [
    {
      title: "Discounted Tuition Fees",
      description:
        "SGE collaborates with several universities to offer scholarships and tuition fee discounts, making education more affordable for international students. This is especially helpful for students looking to study in the UK, where tuition costs can be high.",
      icon: <CiDiscount1 className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Pathway Programs",
      description:
        "SGE provides access to pathway programs that help students who may not meet the direct entry requirements for certain degree programs. These pathway courses enable students to improve their qualifications and transition smoothly into full degree programs.",
      icon: <PiPathThin className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Comprehensive Support",
      description:
        "SGE offers free career counselling, visa application assistance, and help with admission processing. This guidance covers the entire application process, from choosing the right university and course to finalising applications, making it easier for students to navigate their study abroad journey.",
      icon: <TfiSupport className="text-4xl text-[#00399F] font-thin" />,
    },
  ];
  const overview = [
    {
      title: "Mission Statement",
      description:
        "Shabuj Global Education is dedicated to providing world-class educational opportunities, empowering individuals to achieve their academic and professional goals through innovative learning solutions.",
      icon: <GiBullseye className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Programs Offered",
      description:
        "Our Master’s in Business Administration (MBA) program equips students with cutting-edge management skills, focusing on leadership, global business trends, and strategic thinking. Key features include: ",
      features: [
        "Interactive online courses",
        "Global networking opportunities",
        "Industry-relevant case studies",
      ],
      icon: (
        <PiGraduationCapThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Learning Approach",
      description:
        "Shabuj Global Education adopts a flexible, learner-centred approach, utilising digital platforms and interactive resources to ensure a personalised learning experience. We support our students with expert faculty, real-world projects, and collaborative learning.",
      icon: (
        <PiChalkboardTeacherThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Global Reach",
      description:
        "With a global footprint spanning over 50 countries, Shabuj Global Education partners with leading institutions worldwide to offer accredited, globally recognized programs. Our alumni network continues to expand, empowering individuals across continents.",
      icon: (
        <PiGlobeHemisphereEastThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Student Support",
      description:
        "Our dedicated support team is here to assist you throughout your educational journey. From academic advising to career counselling, Shabuj Global Education ensures that every student receives personalised guidance to achieve their goals.",
      icon: <FaRegHandshake className="text-3xl text-[#00399F] font-thin" />,
    },
  ];

 

  return (
    <div>
      {/* header */}
      <Banner
        title={"Know More About Our Partners"}
        description={PartnersDescription}
        style={"text-white"}
      />
      {/* parts & program */}
      <FloatingCard services={PartnersProgram} style={"geid-cols-1 lg:grid-cols-3"} />

      {/* overview */}
      <div className="bg-[#EFF6FF] py-12">
        <div className=" max-w-6xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-between items-center">
            <Image
              width={100}
              height={100}
              className="w-full rounded-2xl"
              src="/assets/Partner with us/Study Abroad Partner Image.webp"
              alt=""
            />
            <div className="-mt-10">
            <IconCard data={overview} />
            </div>
          </div>
        </div>
      </div>

      {/* channel partner */}
      <div className=" max-w-6xl px- mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between mb-14 px-5">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Join Our Team of Dedicated Channel Partner at SGE
            </h2>
            <ParaGraph
              description={JoinDescription}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="https://cdn.dribbble.com/userupload/15670016/file/original-b55c1f7f77f25d94e59c8f9ff1f7a75c.png?resize=400x0https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fregister-page&psig=AOvVaw3AkThoi6cbOiVRfZZNJ3zC&ust=1729503745159000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gdnVnIkDFQAAAAAdAAAAABAJ"
            alt=""
          />
        </div>
      </div>

      {/* how Success */}
      <div className="  py-14 bg-[#EFF6FF] ">
        <div className="md:grid flex flex-col-reverse md:grid-cols-2 px-5 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="https://cdn.dribbble.com/userupload/15670016/file/original-b55c1f7f77f25d94e59c8f9ff1f7a75c.png?resize=400x0https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fregister-page&psig=AOvVaw3AkThoi6cbOiVRfZZNJ3zC&ust=1729503745159000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gdnVnIkDFQAAAAAdAAAAABAJ"
            alt=""
          />
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              How Our Channel Partner Drive Our Success
            </h2>
            <ParaGraph
              description={HowDescription}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
        </div>
      </div>

      {/* committed professionals */}
      <div className=" max-w-6xl mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between mb-14 px-5">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Join our team of committed professionals at SGE{" "}
            </h2>
            <ParaGraph
              description={CommittedDescription}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="https://cdn.dribbble.com/userupload/15670016/file/original-b55c1f7f77f25d94e59c8f9ff1f7a75c.png?resize=400x0https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fregister-page&psig=AOvVaw3AkThoi6cbOiVRfZZNJ3zC&ust=1729503745159000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gdnVnIkDFQAAAAAdAAAAABAJ"
            alt=""
          />
        </div>
      </div>

      {/* benefits */}
      <div className="bg-[#EFF6FF] py-12">
        <div className=" max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px]">
              Benefits for Students
            </h2>

            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Shabuj Global Education (SGE) offers a range of benefits for
              students through its partnerships with over 150 universities,
              particularly in the UK and Ireland. These benefits include:
            </p>
          </div>
          <div>
            {/* values */}
            <HoverCard data={benefits} style={"grid-cols-1 md:grid-cols-3"} />
          </div>
        </div>
      </div>

     


     

      <div className="pb-40"></div>
    </div>
  );
}
