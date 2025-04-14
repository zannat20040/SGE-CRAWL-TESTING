import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HomeEventForLargeProps } from "@/assets/type/EventInterface";
import "./Home_Events.css";

// Functional Component
function HomeEventForLarge({
  slidePrev,
  slideNext,
  renderEventPosition,
  slideEvents,
}: HomeEventForLargeProps) {
  return (
    <div className="events-bg max-w-[1254px] mx-auto relative px-[50px] hidden lg:block">
      {/* Event Slides */}
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

      {/* Navigation Buttons */}
      {slideEvents.length > 1 && (
        <div className="absolute justify-between left-0 right-0 lg:top-[200px] xl:top-[240px] px-5 xl:px-0 flex z-50">
          <button className="button-one-next" onClick={slidePrev}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path
                d="M28 0H8C5.9 0 3.8 0.8 2.3 2.3C0.8 3.8 0 5.9 0 8V28C0 30.1 0.8 32.2 2.3 33.7C3.8 35.2 5.9 36 8 36H28C30.1 36 32.2 35.2 33.7 33.7C35.2 32.2 36 30.1 36 28V8C36 5.9 35.2 3.8 33.7 2.3C32.2 0.8 30.1 0 28 0ZM22 22.9C22.3 23.2 22.4 23.6 22.4 24C22.4 24.4 22.3 24.8 22 25.1C21.7 25.3 21.3 25.5 20.9 25.5C20.5 25.5 20.2 25.3 19.9 25.1L13.9 19.1C13.6 18.8 13.4 18.4 13.4 18C13.4 17.6 13.6 17.2 13.9 16.9L19.9 10.9C20.2 10.6 20.5 10.5 20.9 10.5C21.3 10.5 21.7 10.6 22 10.9C22.3 11.2 22.4 11.6 22.4 12C22.4 12.4 22.3 12.8 22 13.1L17.1 18L22 22.9Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="button-one-prev" onClick={slideNext}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path
                d="M8 36L28 36C30.1 36 32.2 35.2 33.7 33.7C35.2 32.2 36 30.1 36 28L36 8C36 5.9 35.2 3.8 33.7 2.3C32.2 0.8 30.1 0 28 0L8 0C5.9 0 3.8 0.8 2.3 2.3C0.8 3.8 0 5.9 0 8L0 28C0 30.1 0.8 32.2 2.3 33.7C3.8 35.2 5.9 36 8 36ZM14 13.1C13.7 12.8 13.6 12.4 13.6 12C13.6 11.6 13.7 11.2 14 10.9C14.3 10.7 14.7 10.5 15.1 10.5C15.5 10.5 15.8 10.7 16.1 10.9L22.1 16.9C22.4 17.2 22.6 17.6 22.6 18C22.6 18.4 22.4 18.8 22.1 19.1L16.1 25.1C15.8 25.4 15.5 25.5 15.1 25.5C14.7 25.5 14.3 25.4 14 25.1C13.7 24.8 13.6 24.4 13.6 24C13.6 23.6 13.7 23.2 14 22.9L18.9 18L14 13.1Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeEventForLarge;
