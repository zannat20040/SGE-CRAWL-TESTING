import ServiceImageComponent from "@/_components/Services/ServiceImageComponent";
import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
export const metadata = {
  title: "Personalized University",
  description:
    "We help you choose the best university by assessing your academic profile, preferred country, and career goals for a perfect future fit.",
  keywords: [
    "university selection",
    "personalized education",
    "study abroad guidance",
    "academic profile assessment",
    "career-focused universities",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/personalizedUniversity`,
  },
};

const page = () => {
  const Para = () => {
    return (
      <span className="  max-w-xl mx-auto">
        <p className="text-lg font-medium mb-4">
          We help you find the best-fit university based on:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Academic Profile:</strong> Your grades, skills, and
            aspirations.
          </li>
          <li>
            <strong>Preferred Country:</strong> UK, USA, Canada, Australia,
            Europe, or beyond.
          </li>
          <li>
            <strong>Career Goals:</strong> Aligning your education with future
            ambitions.
          </li>
        </ul>
        <p className="text-base text-gray-700">
          Our experienced counselors analyze your profile and recommend top
          universities where {`you'll`} thrive, ensuring you get the best
          education for your chosen career path.
        </p>
      </span>
    );
  };

  return (
    <div>
      <Banner title="Personalized University Selection" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              University Selection Support
            </h2>
            <div className="flex-col gap-3 flex ">
              <span className="text-base  text-gray-700 max-w-lg ">
                <ParaGraph description={<Para />} />
              </span>
            </div>
          </div>

          <ServiceImageComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
