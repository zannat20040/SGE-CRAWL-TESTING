"use client";
import { useEffect } from "react";
import Single_Universty_Accordion from "./Single_Universty_Accordion";
import Single_University_Form from "./Single_University_Form";
import Single_University_Check from "./Single_University_Check";
import Single_University_Info from "./Single_University_Info";
import Banner1 from "./Single_University_Banner";

const SingleUniversity = ({ universityDetails }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!universityDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mb-20 pb-20">
      <Banner1 university={universityDetails} />
      <div className="max-w-7xl mx-auto">
        <p className="text-center md:text-6xl text-4xl font-semibold md:mt-36 mt-28 md:mx-0 mx-5">
          {universityDetails?.Name}
        </p>
        {universityDetails && (
          <div className="grid lg:grid-cols-12 grid-cols-1 mt-8 md:mt-12 gap-10 px-5">
            <div className="lg:col-span-7 ">
              <Single_Universty_Accordion university={universityDetails} />
              <Single_University_Check uniName={universityDetails?.Name} />
            </div>
            <div className="lg:col-span-5 ">
              <Single_University_Info university={universityDetails} />
              <Single_University_Form Name={universityDetails.Name} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleUniversity;
