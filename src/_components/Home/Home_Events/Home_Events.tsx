"use client";
import {  useState } from "react";
import "./Home_Events.css";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import HomeEventForMobile from "./HomeEventForMobile";
import HomeEventForLarge from "./HomeEventForLarge";

interface Event {
  id: string;
  eventName: string;
  eventStartDate: string;
  eventStartTime: string;
  eventEndDate: string;
  eventEndTime: string;
  startUTC: string;
  endUTC: string;
  startLocal: string;
  endLocal: string;
  eventImage: string;
  eventPhoneImage: string;
  eventLargeImage: string;
  isOnline: false;
  eventURL: string;
  imageGallery: string[];
}

// Convert event time to UTC
const convertToUTC = (dateStr: string, timeStr: string): string | null => {
  if (!dateStr || !timeStr) {
    console.error("⚠️ Invalid Date/Time:", { dateStr, timeStr });
    return null;
  }

  const eventDateTime = new Date(`${dateStr}T${timeStr}:00+06:00`); // Assume BD time (UTC+6)

  if (isNaN(eventDateTime.getTime())) {
    return null;
  }

  return eventDateTime.toISOString();
};

// Convert UTC time to local time
const convertToLocal = (utcDate: string): string => {
  return utcDate ? new Date(utcDate).toLocaleString() : "Invalid Date";
};

// Fetch events from API
const fetchEvents = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_FORM_URL}/events`
  );
  const events: Event[] = response.data;

  // Process events to include UTC, local times, and isActive status
  const updatedEvents = events
    .map((event) => {
      if (!event.eventStartDate || !event.eventStartTime) return null;

      const startUTC = convertToUTC(event.eventStartDate, event.eventStartTime);
      const endUTC = convertToUTC(event.eventEndDate, event.eventEndTime);

      if (!startUTC || !endUTC) return null;

      return {
        ...event,
        startUTC,
        endUTC,
        startLocal: convertToLocal(startUTC),
        endLocal: convertToLocal(endUTC),
      };
    })
    .filter((event) => event !== null) as Event[]; // Remove invalid events and cast to Event[]

  return updatedEvents;
};

const Home_Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  // Use TanStack Query to fetch events
  const { data: eventsData } = useQuery({
    queryKey: ["eventsData"],
    queryFn: fetchEvents,
    refetchOnWindowFocus: true, // Refetch on window focus
    refetchInterval: 1000, // Refetch every 60 seconds
  });

  // Filter events for ongoing and upcoming ones
  const currentDate = new Date();
  const upcomingEvents =
    eventsData?.filter((event) => new Date(event.startUTC) > currentDate) ?? [];

  // Sort upcoming events by start time in ascending order (earliest first)
  upcomingEvents.sort(
    (a, b) => new Date(a.startUTC).getTime() - new Date(b.startUTC).getTime()
  );

  const pastEvents =
    eventsData?.filter((event) => new Date(event.endUTC) < currentDate) || [];

  // Sort upcoming events by start time in ascending order (earliest first)
  pastEvents
    .sort(
      (a, b) => new Date(a.startUTC).getTime() - new Date(b.startUTC).getTime()
    )
    .reverse();

  const slideEvents = [...upcomingEvents, ...pastEvents].slice(0, 10);


  const slideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slideEvents?.length);
  };

  const slidePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slideEvents?.length) % slideEvents?.length
    );
  };

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

  return (
    <>
      {slideEvents.length > 0 ? (
        <div className="w-full relative events-bg lg:h-[850px] xl:h-[1000px] sm:h-[600px] md:h-[500px] h-[500px] lg:mb-[100px] mb-5 overflow-hidden">
          <h2 className="poppins-bold lg:text-[64px] text-[28px] text-gradient text-center lg:pt-[123px] pt-[50px] lg:pb-[68px] pb-[41px] text-white">
            Upcoming Events
          </h2>

          <HomeEventForMobile
            mobileSlidePrev={slidePrev}
            mobileSlideNext={slideNext}
            slideEvents={slideEvents}
          />
          <HomeEventForLarge
            slideNext={slideNext}
            slidePrev={slidePrev}
            renderEventPosition={renderEventPosition}
            slideEvents={slideEvents}
          />
        </div>
      ) : (
        <p className="pb-20"></p>
      )}
    </>
  );
};

export default Home_Events;
