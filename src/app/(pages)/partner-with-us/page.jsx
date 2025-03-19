import Banner from "@/_components/shared/About/Banner";
import React from "react";
import HoverCard from "@/_components/shared/About/HoverCard";
import { IoRocket } from "react-icons/io5";
import { FaMoneyCheck, FaPeopleArrows, FaUsers } from "react-icons/fa6";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaHandsHelping } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";

export const metadata = {
  title: "Partner With Us",
  description:
    "Collaborate with us to create meaningful opportunities for students worldwide. Partner with us to make studying abroad more accessible and rewarding.",
  keywords: [
    "partner with us",
    "education collaboration",
    "study abroad partnerships",
    "university collaborations",
    "global education opportunities",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/partner-with-us`,
  },
};

export default function page() {
  const bannerDescription = [
    {
      para: "Join us at SGE, where collaboration and growth are at the heart of what we do. We invite like-minded individuals and organizations to partner with us in delivering exceptional results in the education sector. Together, we’ll foster an environment of support, provide ongoing training, and create opportunities for professional advancement. Let’s make a meaningful impact together—apply now to become part of our dedicated team!",
    },
  ];

  const partnerInfo = [
    {
      title: "Welcoming Values",
      description:
        "We welcome individuals who share our values and wish to work with a supportive team committed to delivering top results.",
      icon: <FaHandsHelping className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Collaborative Environment",
      description:
        "SGE offers a collaborative work environment where employees can learn, grow, and achieve professional goals.",
      icon: <FaPeopleArrows className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Valued Partnerships",
      description:
        "We highly value our Channel Partners and invest in their development.",
      icon: <TiStarburst className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Ongoing Training",
      description:
        "Ongoing training and support are provided to equip Channel Partners with the skills and knowledge they need for success.",
      icon: (
        <PiChalkboardTeacherFill className="text-5xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Competitive Compensation",
      description:
        "Competitive compensation packages and career advancement opportunities are offered.",
      icon: <FaMoneyCheck className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Quality-Focused Team",
      description:
        "Become part of a quality-focused, enthusiastic group of professionals dedicated to delivering exceptional results to clients.",
      icon: <FaUsers className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Make a Difference",
      description: "Apply now to make a difference in the Education Sector.",
      icon: <IoRocket className="text-5xl text-[#00399F] font-thin" />,
    },
  ];

  return (
    <div>
      {/* header */}
      <Banner
        title={"Join a Collaborative Team"}
        description={bannerDescription}
        style={"text-white"}
      />

      {/* card */}
      <div className="  py-14 bg-[#EFF6FF] ">
        <div className=" max-w-6xl px-5 mx-auto">
          <HoverCard
            data={partnerInfo}
            style={"grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}
          />
        </div>
      </div>

      {/* contact */}
      <div className=" max-w-6xl px- mx-auto py-14 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between mb-14">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Partner with Us
            </h2>
            <p className={`text-base text-gray-700 max-w-lg`}>
              Collaborate with a Dedicated Team Committed to Your Success. At
              SGE, we believe in fostering strong partnerships that empower you
              with the resources, training, and support needed to thrive in the
              education sector. Together, we can create innovative solutions
              that make a lasting impact.{" "}
            </p>
            <div className="flex gap-5 items-start  mt-4">
              <TfiEmail className="w-12 h-12 bg-blue-900 text-white p-3 text-lg rounded-md" />
              <div>
                <p className="poppins-semibold text-blue-900">Sent Email</p>
                <a rel="nofollow" href="mailto:info@shabujglobal.com">
                  info@shabujglobal.com
                </a>
              </div>
            </div>
          </div>
          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="/assets/Partner with us/partner 1.webp"
            alt=""
          />
        </div>
      </div>

      <div className="pb-48"></div>
    </div>
  );
}
