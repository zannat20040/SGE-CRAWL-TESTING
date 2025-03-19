import ServiceImageComponent from "@/_components/Services/ServiceImageComponent";
import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
export const metadata = {
  title: "Collaboration",
  description:
    "Partner with Shabuj Global Education to expand opportunities, connect with trusted institutions, and grow your student base globally.",
  keywords: [
    "education collaboration",
    "study abroad partnerships",
    "global education network",
    "university collaboration",
    "student recruitment",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/collaboration`,
  },
};

const page = () => {
  const Para = () => {
    return (
      <span className=" p-6   max-w-xl mx-auto">
        <ul className="list-disc pl-6 mb-4">
          <li>
            By partnering with Shabuj Global Education, you join a network of
            trusted institutions and agencies working together to create global
            education opportunities.
          </li>
          <li>
            We continuously work on expanding the options available to students,
            helping our partners grow their student base and reputation.
          </li>
        </ul>
      </span>
    );
  };

  return (
    <div className=" ">
      <Banner title=" Long-Term Collaboration" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Long-Term Collaboration
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
