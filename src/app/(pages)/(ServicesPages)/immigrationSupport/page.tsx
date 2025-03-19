import ServiceImageComponent from "@/_components/Services/ServiceImageComponent";
import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
export const metadata = {
  title: "Immigration Support",
  description:
    "We provide visa & immigration support with application guidance, interview prep & document verification for a smooth approval process.",
  keywords: [
    "immigration support",
    "visa assistance",
    "study abroad visa",
    "interview preparation",
    "document verification",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/immigrationSupport`,
  },
};

const page = () => {
  const Para = () => {
    return (
      <span className=" p-6   max-w-xl mx-auto">
        <h4 className="text-lg font-semibold mb-4">
          4. Visa and Immigration Support
        </h4>
        <p className="text-base text-gray-700 mb-4">
          Navigating visa applications can be complex, but our team provides
          step-by-step assistance, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Visa Application Guidance:</strong> Ensuring you have the
            right documents and know the process.
          </li>
          <li>
            <strong>Interview Preparation:</strong> Helping you prepare for visa
            interviews with tips and practice sessions.
          </li>
          <li>
            <strong>Document Verification:</strong> Double-checking all
            necessary documents for a smooth visa approval process.
          </li>
        </ul>
        <p className="text-base text-gray-700">
          We aim to make the visa process hassle-free, so you can focus on your
          studies.
        </p>
      </span>
    );
  };

  return (
    <div className=" ">
      <Banner title=" Visa and Immigration Support" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Immigration Support
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
