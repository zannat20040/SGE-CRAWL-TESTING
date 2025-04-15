import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HomeEventForLargeProps } from "@/assets/type/EventInterface";
import "./Home_Events.css";
import ArrowPrev from "./ArrowPrev";
import ArrowNext from "./ArrowNext";

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
                src={image?.eventLargeImage || image?.eventImage}
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
            <ArrowPrev />
          </button>
          <button className="button-one-prev" onClick={slideNext}>
            <ArrowNext />
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeEventForLarge;
