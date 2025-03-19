import ServiceImageComponent from "@/_components/Services/ServiceImageComponent";
import Banner from "@/_components/shared/Services/Banner";
import ParaGraph from "@/_components/shared/Services/ParaGraph";
import React from "react";
export const metadata  = {
  title: 'Post Graduation Aid',
  description: 'Our support extends beyond graduation with career guidance, networking, and immigration advice to help you succeed after studying abroad',
  alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/postGraduationAid`,
    },}
const page = () => {
  const Para = () => {
    return (
      <span className="  max-w-xl mx-auto">
        <p className="text-base text-gray-700 mb-4">
          Our services don’t end when you finish your studies. We help you with:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Career Guidance:</strong> Offering advice on job
            opportunities in your host country or back home.
          </li>
          <li>
            <strong>Networking:</strong> Connecting you with alumni,
            professional networks, and job fairs to boost your career prospects.
          </li>
        </ul>

        <hr className="border-gray-400 my-6" />

        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Graduate Immigration Options:</strong> Guidance on
            post-study work visas and immigration routes in countries like the
            UK, USA, and Canada.
          </li>
        </ul>

        <hr className="border-gray-400 my-6" />

        <p className="text-base text-gray-700 mb-4">
          At <strong>Shabuj Global Education</strong>, we take pride in walking
          with you every step of the way, from choosing a university to building
          a successful career abroad.{" "}
          <strong>Let us turn your study abroad dreams into reality!</strong>
        </p>
      </span>
    );
  };

  return (
    <div className="">
      <Banner title=" Post-Graduation Support" />
      <div className="  py-14 pb-48 bg-[#EFF6FF] px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-6xl  mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Post-Graduation Aid
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
