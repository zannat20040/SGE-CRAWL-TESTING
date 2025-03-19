import React, { useState } from "react";
import UpComingEvents from "./UpComingEvents";
import PastEvents from "./PastEvents";
import {
  IoArrowBack,
  IoArrowBackCircle,
  IoArrowForward,
  IoArrowForwardCircle,
} from "react-icons/io5";

// Define types for the Event
interface Event {
  id: string;
  title: string;
  description: string;
  eventStartDate: string;
  eventStartTime: string;
  eventEndDate: string;
  eventEndTime: string;
  eventPhoneImage: string;
  eventLargeImage: string;
  eventImage: string;
  place: string;
  startLocal: string;
  endLocal: string;
  eventURL: string;
}

interface PaginationProps {
  upcomingEvents: Event[]; // Array of events
  cardsPerPage: number; // Number of cards to display per page
  eventsComponent: string; // The component to render the events (e.g., PastEvents)
}

const Pagination: React.FC<PaginationProps> = ({
  upcomingEvents,
  cardsPerPage: eventsPerPage,
  eventsComponent,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  //   const [eventsPerPage] = useState<number>(3);

  // Get current events based on page number
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = upcomingEvents?.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // Pagination logic
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total number of pages
  const totalPages = Math.ceil(upcomingEvents.length / eventsPerPage);

  return (
    <div>
      {eventsComponent === "past" ? (
        <PastEvents pastEvents={currentEvents} />
      ) : (
        <UpComingEvents upcomingEvents={currentEvents} />
      )}

      {upcomingEvents?.length > 0 && (
        <div className="pagination flex justify-center items-center gap-4">
          <button
            className="font-semibold duration-500"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {currentPage === 1 ? (
              <IoArrowBack className="text-3xl text-gray-600 duration-500" />
            ) : (
              <IoArrowBackCircle className="text-5xl text-[#2563EB] duration-500" />
            )}
          </button>

          {/* Page Number Display */}
          <span className="font-semibold text-lg">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="font-semibold duration-500"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * eventsPerPage >= upcomingEvents.length}
          >
            {currentPage * eventsPerPage >= upcomingEvents.length ? (
              <IoArrowForward className="text-3xl text-gray-600 duration-500" />
            ) : (
              <IoArrowForwardCircle className="text-5xl text-[#2563EB] duration-500" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
