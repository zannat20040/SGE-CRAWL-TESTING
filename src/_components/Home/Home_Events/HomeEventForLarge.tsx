import React from "react";
import Link from "next/link"; // Ensure you import Link
import Image from "next/image"; // Ensure you import Image
import "./Home_Events.css";

interface HomeEventForLargeProps {
  slidePrev: () => void;
  slideNext: () => void;
  renderEventPosition: (index: number, length: number) => string;
  slideEvents: {
    eventURL: string;
    eventLargeImage: string;
    eventImage: string;
    eventPhoneImage?: string;
  }[];
}

const HomeEventForLarge: React.FC<HomeEventForLargeProps> = ({
  slidePrev,
  slideNext,
  renderEventPosition,
  slideEvents,
}) => {
  return (
    <div className="events-bg max-w-[1254px] mx-auto relative px-[50px] lg:block hidden">
      {slideEvents.map((image, index) => {
        const eventPosition = renderEventPosition(index, slideEvents.length);

        return (
          <Link href={`/events/${image?.eventURL}`} key={index}>
            <div className={`absolute ${eventPosition} carousel-1`}>
            <Image
                    className="max-w-[650px] max-h-[450px] h-[526px] w-[946px] xl:max-w-[946px] xl:max-h-[700px] rounded-[50px] cursor-pointer"
                    width={946}
                    height={526}
                    src={image?.eventLargeImage||image?.eventImage}
                    alt={`event${index + 1}`}
                    priority
                  />
            </div>
          </Link>
        );
      })}

      {slideEvents.length > 1 && (
        <div className="absolute lg:flex hidden justify-between left-0 right-0 lg:top-[170px] xl:top-[240px] lg:px-5 xl:px-0 z-50">
          <button className="button-one-next" onClick={slidePrev}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0H8C5.87827 0 3.84344 0.842854 2.34315 2.34315C0.842854 3.84344 0 5.87827 0 8V28C0 30.1217 0.842854 32.1566 2.34315 33.6569C3.84344 35.1571 5.87827 36 8 36H28C30.1217 36 32.1566 35.1571 33.6569 33.6569C35.1571 32.1566 36 30.1217 36 28V8C36 5.87827 35.1571 3.84344 33.6569 2.34315C32.1566 0.842854 30.1217 0 28 0ZM22 22.94C22.2809 23.2213 22.4387 23.6025 22.4387 24C22.4387 24.3975 22.2809 24.7787 22 25.06C21.7187 25.3409 21.3375 25.4987 20.94 25.4987C20.5425 25.4987 20.1612 25.3409 19.88 25.06L13.88 19.06C13.5991 18.7787 13.4413 18.3975 13.4413 18C13.4413 17.6025 13.5991 17.2213 13.88 16.94L19.88 10.94C20.1643 10.675 20.5404 10.5308 20.929 10.5376C21.3176 10.5445 21.6884 10.7019 21.9632 10.9768C22.2381 11.2516 22.3955 11.6224 22.4023 12.011C22.4092 12.3996 22.265 12.7756 22 13.06L17.12 18L22 22.94Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="button-one-prev" onClick={slideNext}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 36L28 36C30.1217 36 32.1566 35.1571 33.6569 33.6569C35.1571 32.1566 36 30.1217 36 28L36 8C36 5.87827 35.1571 3.84344 33.6569 2.34315C32.1566 0.842856 30.1217 -5.13895e-07 28 -6.99382e-07L8 -2.44784e-06C5.87827 -2.63333e-06 3.84344 0.842853 2.34315 2.34314C0.842859 3.84344 2.63333e-06 5.87826 2.44784e-06 8L6.99382e-07 28C5.13895e-07 30.1217 0.842857 32.1566 2.34315 33.6569C3.84344 35.1571 5.87827 36 8 36ZM14 13.06C13.7191 12.7787 13.5613 12.3975 13.5613 12C13.5613 11.6025 13.7191 11.2212 14 10.94C14.2813 10.6591 14.6625 10.5013 15.06 10.5013C15.4575 10.5013 15.8388 10.6591 16.12 10.94L22.12 16.94C22.4009 17.2213 22.5587 17.6025 22.5587 18C22.5587 18.3975 22.4009 18.7787 22.12 19.06L16.12 25.06C15.8357 25.325 15.4596 25.4692 15.071 25.4623C14.6824 25.4555 14.3116 25.2981 14.0368 25.0232C13.7619 24.7484 13.6045 24.3776 13.5977 23.989C13.5908 23.6004 13.735 23.2243 14 22.94L18.88 18L14 13.06Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeEventForLarge;
