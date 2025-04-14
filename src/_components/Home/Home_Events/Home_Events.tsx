"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { SlideEvent } from "@/assets/type/EventInterface";
import { processEvents } from "@/lib/eventUtils";
import HomeEventForMobile from "./HomeEventForMobile";
import HomeEventForLarge from "./HomeEventForLarge";

const EventSlider = () => {
  // Track which slide is currently active
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch events data using React Query (client-side only)
  const { data: rawEvents = [] } = useQuery({
    queryKey: ["eventsData"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_FORM_URL}/events`
      );
      return processEvents(res.data as SlideEvent[]); // Add local/UTC conversion
    },
    refetchOnWindowFocus: true,
    refetchInterval: 60000, // Refetch every 60 seconds
  });

  // Separate events into upcoming and past
  const now = new Date();
  const upcoming = rawEvents.filter((e) => new Date(e.startUTC) > now);
  const past = rawEvents.filter((e) => new Date(e.endUTC) < now);

  // Sort and combine the list: upcoming first, then recent past events
  const slideEvents = [
    ...upcoming.sort(sortByTimeAsc),
    ...past.sort(sortByTimeDesc),
  ].slice(0, 10); // Show only top 10 total

  // Sort utility: ascending by start time
  function sortByTimeAsc(a: SlideEvent, b: SlideEvent) {
    return new Date(a.startUTC).getTime() - new Date(b.startUTC).getTime();
  }

  // Sort utility: descending by start time
  function sortByTimeDesc(a: SlideEvent, b: SlideEvent) {
    return new Date(b.startUTC).getTime() - new Date(a.startUTC).getTime();
  }

  // Go to next slide
  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % slideEvents.length);
  };

  // Go to previous slide
  const slidePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + slideEvents.length) % slideEvents.length
    );
  };

  /**
   * Determines the CSS class based on relative slide index.
   * This controls the 3D carousel position: center, left, right, etc.
   */
  const renderEventPosition = (
    relativeIndex: number,
    totalLength: number
  ): string => {
    const index = (relativeIndex - activeIndex + totalLength) % totalLength;

    // Handling the edge cases for different lengths of events
    if (totalLength <= 2) {
      return index === 0 ? "slide-pos-center" : "slide-pos-center1";
    } else if (totalLength === 3) {
      return index === 1
        ? "slide-pos-right1"
        : index === 0
        ? "slide-pos-center"
        : "slide-pos-left1";
    } else if (totalLength === 4) {
      return index === 1
        ? "slide-pos-right1"
        : index === 3
        ? "slide-pos-left1"
        : index === 0
        ? "slide-pos-center"
        : "slide-pos-center1";
    } else if (totalLength >= 5) {
      return index === 1
        ? "slide-pos-right1"
        : index === 2
        ? "slide-pos-right2"
        : index === totalLength - 2
        ? "slide-pos-left2"
        : index === totalLength - 1
        ? "slide-pos-left1"
        : index === 0
        ? "slide-pos-center"
        : "slide-pos-center1";
    }

    // Fallback if no condition is met, ensuring a string is always returned
    return "slide-pos-center1";
  };
  // If no events to show, don't render the section
  if (slideEvents.length === 0) return null;

  return (
    <div className="w-full relative events-bg lg:h-[850px] xl:h-[1000px] sm:h-[600px] md:h-[500px] h-[500px] lg:mb-[100px] mb-5 overflow-hidden">
      {/* Section Title */}
      <h2 className="poppins-bold lg:text-[64px] text-[28px] text-gradient text-center lg:pt-[123px] pt-[50px] lg:pb-[68px] pb-[41px] text-white">
        Upcoming Events
      </h2>

      {/* Mobile Version Carousel */}
      <HomeEventForMobile
        mobileSlidePrev={slidePrev}
        mobileSlideNext={slideNext}
        slideEvents={slideEvents}
      />

      {/* Desktop Version Carousel */}
      <HomeEventForLarge
        slideNext={slideNext}
        slidePrev={slidePrev}
        renderEventPosition={renderEventPosition}
        slideEvents={slideEvents}
      />
    </div>
  );
};

export default EventSlider;
