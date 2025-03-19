import ServiceImageComponent from "@/_components/Services/ServiceImageComponent";
import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
export const metadata = {
  title: "Student Success",
  description:
    "Our strategic support helps students succeed by improving acceptance rates and ensuring they are well-prepared for their academic journey abroad.",
  keywords: [
    "student success",
    "study abroad success",
    "university acceptance",
    "academic preparation",
    "education support",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/studentSuccess`,
  },
};

const page = () => {
  const Para = () => {
    return (
      <span className=" p-6   max-w-xl mx-auto">
        <ul className="list-disc pl-6 mb-4">
          <li>
            Our strategic support enhances student success by improving
            acceptance rates at leading universities.
          </li>
          <li>
            We ensure that your students are well-prepared academically,
            mentally, and emotionally for the challenges ahead.
          </li>
        </ul>
      </span>
    );
  };

  return (
    <div className=" ">
      <Banner title="Enhanced Student Success" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Enhanced Student Success
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
