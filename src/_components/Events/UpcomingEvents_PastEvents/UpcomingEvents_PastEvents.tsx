"use client";
import "./UpcomingEvents_PastEvents.css";
import axios from "axios";
import Pagination from "../Events_Components/Pagination";
import { useQuery } from "@tanstack/react-query";

interface Event {
  id: string;
  eventName: string;
  eventStartDate: string;
  eventStartTime: string;
  eventEndDate: string;
  eventEndTime: string;
  eventLocation: string;
  startUTC: string;
  endUTC: string;
  startLocal: string;
  endLocal: string;
  isActive: boolean;
  title: "";
  eventImage: "";
  eventPhoneImage: "";
  eventLargeImage: "";
  description: "";
  place: "";
  organizer: "";
  category: "";
  isOnline: false;
  joinURL: "";
  eventURL: "";
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

const UpcomingEvents_PastEvents = () => {
  // Use TanStack Query to fetch events
  const { data: eventsData } = useQuery({
    queryKey: ["eventsData"],
    queryFn: fetchEvents,
    refetchOnWindowFocus: true, // Refetch on window focus
    refetchInterval: 1000, // Refetch every 60 seconds
  });

  // Filter events for ongoing and upcoming ones
  const currentDate = new Date();
  const pastEvents =
    eventsData?.filter((event) => new Date(event.endUTC) < currentDate) || [];

  // Sort upcoming events by start time in ascending order (earliest first)
  pastEvents.sort(
    (a, b) => new Date(a.startUTC).getTime() - new Date(b.startUTC).getTime()
  );

  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-[1152px] mx-auto pt-[78px] pb-10">
        <div className="mx-auto text-center lg:w-[875px] px-8">
          <h2 className=" text-4xl lg:text-5xl poppins-bold mb-10">
            Past Events
          </h2>
          <p className="poppins-regular text-base pb-[71px] text-[#000000]">
            Our core belief is to ensure that our students receive comprehensive
            education and guidance at every stage of their study abroad journey.
            Presented below are a few of our previous international educational
            events.
          </p>
        </div>
        <div className="px-8">
          <Pagination
            upcomingEvents={pastEvents.reverse()}
            cardsPerPage={6}
            eventsComponent={"past"}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents_PastEvents;
