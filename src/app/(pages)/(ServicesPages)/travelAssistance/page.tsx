import ServiceImageComponent from "@/_components/Services/ServiceImageComponent";
import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
export const metadata = {
  title: "Travel Assistance",
  description:
    "We prepare you for your study abroad journey with cultural insights, accommodation guidance, and travel and health support, ensuring a smooth transition.",
  keywords: [
    "travel assistance",
    "study abroad travel",
    "student accommodation",
    "cultural insights",
    "health and safety support",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/travelAssistance`,
  },
};

const page = () => {
  const Para = () => {
    return (
      <span className=" p-6   max-w-xl mx-auto">
        <p className="text-base text-gray-700 mb-4">
          Before you embark on your journey, we prepare you with:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Cultural Insights:</strong> Understanding the {`country's`}{" "}
            culture and academic environment.
          </li>
          <li>
            <strong>Accommodation Guidance:</strong> Assistance with finding
            housing options near your university.
          </li>
          <li>
            <strong>Travel and Health:</strong> Tips on travel arrangements,
            insurance, and healthcare requirements.
          </li>
        </ul>
        <p className="text-base text-gray-700">
          We’re committed to supporting you even after you arrive, ensuring a
          smooth transition to your new academic and cultural environment.
        </p>
      </span>
    );
  };

  return (
    <div className=" ">
      <Banner title="Pre-Departure and Post-Arrival Assistance" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Pre-Departure and Post-Arrival Assistance
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
