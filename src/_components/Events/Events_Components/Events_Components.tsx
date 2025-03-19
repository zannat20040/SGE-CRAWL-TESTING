"use client"; // Mark this component as client-side

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OnGoingEvents from "./OnGoingEvents";
import Pagination from "./Pagination";

// Define types for the event
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
  eventPhoneImage: "";
  eventLargeImage: "";
  eventImage: "";
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

// Check if an event is ongoing
const checkEventActive = (startUTC: string, endUTC: string): boolean => {
  if (!startUTC || !endUTC) return false; // Ensure valid dates

  const now = new Date();
  const startTime = new Date(startUTC);
  const endTime = new Date(endUTC);

  return now >= startTime && now <= endTime; // True if now is between start and end
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
        isActive: checkEventActive(startUTC, endUTC),
      };
    })
    .filter((event) => event !== null) as Event[]; // Remove invalid events and cast to Event[]

  return updatedEvents;
};

const Events_Components = () => {
  // Use TanStack Query to fetch events
  const { data: eventsData } = useQuery({
    queryKey: ["eventsData"],
    queryFn: fetchEvents,
    refetchOnWindowFocus: true, // Refetch on window focus
    refetchInterval: 1000, // Refetch every 60 seconds
  });

  // Filter events for ongoing and upcoming ones
  const currentDate = new Date();
  const ongoingEvents = eventsData?.filter((event) => event.isActive) ?? [];
  const upcomingEvents =
    eventsData?.filter((event) => new Date(event.startUTC) > currentDate) ?? [];

  // Sort ongoing events with the most recent first
  ongoingEvents.sort(
    (a, b) => new Date(b.startUTC).getTime() - new Date(a.startUTC).getTime()
  );

  // Sort upcoming events by start time in ascending order (earliest first)
  upcomingEvents.sort(
    (a, b) => new Date(a.startUTC).getTime() - new Date(b.startUTC).getTime()
  );

  return (
    <div className="font-poppins bg-[#FAFAFA]">
      <OnGoingEvents ongoingEvents={ongoingEvents} />


      {/* Upcoming Events Section */}
      <div className="mx-5 border-2 border-[#FAFAFA]">
        <Pagination
          upcomingEvents={upcomingEvents}
          cardsPerPage={3}
          eventsComponent="upcomingZ"
        />
      </div>
    </div>
  );
};

export default Events_Components;
