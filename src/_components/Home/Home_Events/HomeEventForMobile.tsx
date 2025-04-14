"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { HomeEventForMobileProps } from "@/assets/type/EventInterface";
import "swiper/css";
import "swiper/css/pagination";
import "./Home_Events.css";

/**
 * Mobile event carousel using SwiperJS
 */
function HomeEventForMobile({ slideEvents }: HomeEventForMobileProps) {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="w-full mx-auto lg:hidden block">
      {/* Swiper carousel */}
      <Swiper
        loop={true}
        slidesPerView={slideEvents?.length === 1 ? 1 : 2}
        spaceBetween={10}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slideEvents.map((event, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Link href={`/events/${event.eventURL}`}>
              {/* Desktop & Tablet */}
              <div className="md:block hidden">
                <Image
                  className="rounded-[20px] w-full max-w-[500px] mx-auto"
                  src={event.eventLargeImage || event.eventImage}
                  alt={`event-${index + 1}`}
                  width={800}
                  height={500}
                  loading="lazy"
                />
              </div>

              {/* Mobile */}
              <div className="md:hidden block">
                <Image
                  className="rounded-[20px] w-auto mx-auto"
                  src={event.eventPhoneImage || event.eventImage}
                  alt={`event-${index + 1}`}
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      {slideEvents.length > 1 && (
        <div className="z-30 flex gap-4 justify-center absolute lg:bottom-20 bottom-10 left-0 right-0 mx-auto">
          <button className="button-one-prev" onClick={handlePrev}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M28 0H8C5.9..." fill="white" />
            </svg>
          </button>
          <button className="button-one-next" onClick={handleNext}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M8 36L28 36C30.1..." fill="white" />
            </svg>{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeEventForMobile;
