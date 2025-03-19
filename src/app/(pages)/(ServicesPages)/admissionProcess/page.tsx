import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
import ServiceImageComponent from "../../../../_components/Services/ServiceImageComponent";
export const metadata = {
  title: "Admission Process",
  description:
    "We streamline the application process, ensuring timely, error-free submissions and personalized guidance for student success.",
  keywords: [
    "admission process",
    "university application",
    "study abroad admission",
    "student guidance",
    "application support",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/admissionProcess`,
  },
};

const page = () => {
  const Para = () => {
    return (
      <span className=" p-6   max-w-xl mx-auto">
        <h4 className="text-lg font-semibold mb-4">
          1. Seamless Admissions Process
        </h4>
        <ul className="list-disc pl-6 mb-4">
          <li>
            We manage the entire application process, from start to finish.
          </li>
          <li>
            Our team ensures applications are submitted on time, error-free, and
            optimized for success.
          </li>
          <li>
            By partnering with us, your students benefit from personalized
            guidance, helping them avoid common application pitfalls.
          </li>
        </ul>
      </span>
    );
  };

  return (
    <div className=" ">
      <Banner title="Admission Process" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Process Of Admission
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
