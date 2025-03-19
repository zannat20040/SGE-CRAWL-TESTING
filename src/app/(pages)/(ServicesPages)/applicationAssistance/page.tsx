import ServiceImageComponent from "@/_components/Services/ServiceImageComponent";
import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
export const metadata = {
  title: "Application Assistance",
  description:
    "We offer expert support for application success with document prep, thorough reviews, and deadline tracking to boost your acceptance chances.",
  keywords:
    "application assistance, document preparation, university application, acceptance success, deadline tracking, admission support",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/applicationAssistance`,
  },
};
const page = () => {
  const Para = () => {
    return (
      <span className="  p-6   max-w-xl mx-auto">
        <p className="text-lg font-medium mb-4">
          Submitting a strong application is critical to your success. Our team
          provides expert support for:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Document Preparation:</strong> Guiding you through the
            process of compiling required documents, including transcripts,
            letters of recommendation, and personal statements.
          </li>
          <li>
            <strong>Application Review:</strong> We review your application to
            avoid mistakes and improve your chances of acceptance.
          </li>
          <li>
            <strong>Tracking Deadlines:</strong> Keeping you on track to meet
            university-specific deadlines.
          </li>
        </ul>
        <p className="text-base text-gray-700">
          With our in-depth understanding of university requirements, we
          maximize your chances of acceptance.
        </p>
      </span>
    );
  };

  return (
    <div className=" ">
      <Banner title="Application Assistance" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Application Support
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
