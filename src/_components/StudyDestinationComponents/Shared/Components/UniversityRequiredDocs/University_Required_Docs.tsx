"use client";

import React from "react";

export default function University_Required_Docs({
  destinationName,
  doc1: Doc1Component,
  doc2: Doc2Component,
  doc3: Doc3Component,
  documents,
  statement,
  application,
}: {
  destinationName: string;
  documents: {
    description: string;
    list: string[];
  };
  statement: {
    description: string;
    list: string[];
  };
  application: {
    description: string;
    list: string[];
  };
  doc1: React.FC;
  doc2: React.FC;
  doc3: React.FC;
}) {
  return (
    <div>
      <div className="min-h-screen bg-[#EFF6FF] py-10 lg:py-28">
        <h1 className="poppins-semibold w-full md:w-4/6 md:mx-auto text-[28px] text-[#081831] lg:text-[56px]  lg:leading-[72.8px] lg:-tracking-[0.01em] pb-14 px-8 md:px-0 text-center">
          Documents Required to Study in the {destinationName} for International
          Students
        </h1>
        <div className="relative flex flex-col md:max-w-screen-xl lg:px-10 mx-auto lg:grid grid-cols-2 items-center justify-between">
          <div className="flex-1 px-10 lg:px-0 text-[18px] font-normal text-[#1F1F1F]  ">
            <p className="text-gray-700 mb-8 ">{documents?.description}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {documents?.list.length > 0 ? (
                documents?.list?.map((list, index) => (
                  <li key={index}>{list}</li>
                ))
              ) : (
                <p className="text-center italic font-lg">
                  No documents list available
                </p>
              )}
            </ul>
          </div>
          <div className=" ">{<Doc1Component />}</div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] w-full">
        <div className=" max-w-[1154px] mx-auto lg:pt-[137px] pt-[50px] lg:pb-[120px] pb-[50px]">
          <div className="text-center">
            <h2 className="poppins-semibold w-full md:w-4/6 md:mx-auto text-[28px] text-[#081831] lg:text-[56px]  lg:leading-[72.8px] lg:-tracking-[0.01em] pb-14 px-8 md:px-0 text-center">
              Statement of Purpose for {destinationName}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[35px] gap-0 lg:pt-[58px] pt-[20px]">
            <div>{<Doc2Component />}</div>
            <div className="px-5 lg:px-0">
              <p className="poppins-medium text-[18px] text-[#1F1F1F] pb-[19px]">
                {statement?.description}
              </p>
              <p className="poppins-medium text-[18px] text-[#1F1F1F] pb-8">
                A typical SOP generally follows the following structure:
              </p>
              <ul className="list-disc poppins-medium text-[18px] text-[#1F1F1F] pl-6">
                {statement?.list.length > 0 ? (
                  statement?.list?.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))
                ) : (
                  <p className="text-center italic font-lg">
                    No documents list available
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#EFF6FF] py-10 lg:py-28">
        <h1 className="poppins-semibold w-full md:w-4/6 md:mx-auto text-[28px] text-[#081831] lg:text-[56px]  lg:leading-[72.8px] lg:-tracking-[0.01em] pb-14 px-8 md:px-0 text-center">
          {application?.description}
        </h1>
        <div className="relative items-center md:max-w-screen-xl lg:px-10 mx-auto lg:grid lg:grid-cols-2 grid-cols-1">
          <div className="flex-1 px-10 lg:px-0 text-[18px] poppins-medium md:poppins-semibold text-[#1F1F1F]">
            <p className=" pb-8">
              To apply for a {destinationName} study visa, {`you'll`} need to
              provide the following documents:
            </p>
            <ul className="list-disc pl-6">
              {application?.list.length > 0 ? (
                application?.list?.map((list, index) => (
                  <li key={index}>{list}</li>
                ))
              ) : (
                <p className="text-center italic font-lg">
                  No documents list available
                </p>
              )}
            </ul>
          </div>
          <div className="flex-1">{<Doc3Component />}</div>
        </div>
      </div>
    </div>
  );
}
