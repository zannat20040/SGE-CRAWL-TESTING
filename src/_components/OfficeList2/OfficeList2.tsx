'use client';

import React, { useRef } from 'react';
import officeData from '../../../public/json/addresses2.json';
import type { OfficeList, Props } from '@/assets/type/OfficelistInterace';

const OfficesList2: React.FC<Props> = ({ textColor }) => {
  const accordionRef = useRef<HTMLDivElement>(null);
  const offices: OfficeList[] = officeData as OfficeList[];

  const handleToggle = (event: React.MouseEvent<HTMLInputElement>) => {
    accordionRef.current?.querySelectorAll('input')?.forEach((input) => {
      if (input !== event.target) {
        (input as HTMLInputElement).checked = false;
      }
    });
  };

  return (
    <div className="max-w-[1152px] mx-auto pt-[23px] pb-[23px] mt-[50px] mb-[70px]" ref={accordionRef}>
      <div className="flex sm:flex-row flex-col lg:mx-4 md:mx-12 mx-8 flex-wrap">
        {offices.map(({ country, offices }, index) => (
          <div key={index} className="sm:w-[25%] w-full pb-8">
            <h3 className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">{country}</h3>
            {offices.map(({ city, address, phone, email }, i) => (
              <div key={i} className="collapse collapse-arrow">
                <input type="checkbox" name="office-accordion" onClick={handleToggle} />
                <div className={`collapse-title text-base mulish-medium ${textColor}`}>
                  {city || 'No city available'}
                </div>
                <div className="collapse-content text-sm">
                  <p className={`${textColor} break-all`}>
                    {address && <>{address}<br /></>}
                    {phone && <>{phone}<br /></>}
                    {email && <>{email}</>}
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
