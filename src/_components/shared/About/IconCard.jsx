import React from "react";

export default function IconCard({ data }) {
  return (
    <div className="flex-col gap-10 flex mt-10">
      {data?.map((value, index) => (
        <div key={index} className="flex gap-5 ">
          <div className="w-auto">
            <div className="w-10 h-10 rounded-full bg-white relative">
              <p className="absolute -top-1 -left-1">{value?.icon}</p>
            </div>
          </div>

          <div className="">
            <h2 className="mb-1 font-semibold text-base poppins-semibold">
              {value?.title}
            </h2>
            <p className="text-sm">{value?.description}</p>
            <div className="ml-6">
              {value?.features && value.features.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-sm">
                  {value.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
