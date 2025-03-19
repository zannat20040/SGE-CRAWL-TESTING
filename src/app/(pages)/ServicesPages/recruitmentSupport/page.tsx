import ServiceImageComponent from "@/_components/Services/ServiceImageComponent";
import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
export const metadata = {
  title: "Recruitment Support",
  description:
    "We support our partners with branded materials, promotional content, and co-hosted events to enhance visibility and attract more students.",
  keywords: [
    "student recruitment",
    "education marketing",
    "university promotion",
    "study abroad partnerships",
    "co-hosted education events",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/recruitmentSupport`,
  },
};

const page = () => {
  const Para = () => {
    return (
      <span className=" p-6   max-w-xl mx-auto">
        <ul className="list-disc pl-6 mb-4">
          <li>
            We provide our partners with branded materials, promotional content,
            and joint webinars to attract more students.
          </li>
          <li>
            Our co-hosted events and workshops give your institution the chance
            to promote its global impact while attracting potential students.
          </li>
        </ul>
      </span>
    );
  };

  return (
    <div className=" ">
      <Banner title=" Marketing and Recruitment Support" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Marketing and Recruitment Support
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
