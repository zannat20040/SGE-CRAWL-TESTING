// "use client";
import React, { useRef, useState } from "react";
import officeData from "./addresses2.json";  // ✅ Import JSON directly

interface Office {
  city: string;
  address?: string;
  phone?: string;
  email?: string;
}

interface OfficeList {
  country: string;
  offices: Office[];
}

const OfficesList2: React.FC<{ textColor: string }> = ({ textColor }) => {
  const accordion = useRef<HTMLDivElement>(null);
  const [officeAddress] = useState<OfficeList[]>(officeData);

  const handleClick = (evt: React.MouseEvent<HTMLInputElement>) => {
    if (accordion.current) {
      accordion.current.querySelectorAll("input").forEach((input) => {
        if (input !== evt.target) {
          (input as HTMLInputElement).checked = false;
        }
      });
    }
  };

  return (
    <div
      className="max-w-[1152px] mx-auto pt-[23px] pb-[23px] mt-[50px] mb-[70px]"
      ref={accordion}
    >
      <div className="flex sm:flex-row flex-col lg:mx-4 md:mx-12 mx-8 flex-wrap">
        {officeAddress.map((offices, index) => (
          <div key={index} className="sm:w-[25%] w-full pb-8">
            <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
              <p>{offices.country}</p>
            </div>
            {offices.offices.map((office, i) => (
              <div key={i} className="collapse collapse-arrow">
                <input type="checkbox" name="my-accordion-2" onClick={handleClick} />
                <div className={`collapse-title text-base mulish-medium ${textColor}`}>
                  <p>{office.city ?? "No city Available"}</p>
                </div>
                <div className="collapse-content text-sm">
                  <p className={`${textColor} break-all`}>
                    {office.address ?? ""} <br />
                    {office.phone ?? ""} <br />
                    {office.email ?? ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficesList2;
