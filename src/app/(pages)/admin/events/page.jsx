"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip, Button } from "@material-tailwind/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import Swal from "sweetalert2";
import Pagination from "../../../../_components/shared/Pagination"; // Import the Pagination component
import Image from "next/image";

const Page = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(8); // You can set the number of events per page

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_FORM_URL}/events`
        );
        setEvents(response.data.reverse());
      } catch (error) {
        setError("Failed to fetch events");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle Event Deletion
  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_FORM_URL}/events/${id}`
        );

        // Remove the deleted event from state
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event._id !== id)
        );

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "The event has been deleted.",
        });
      } catch (error) {
        console.error("Error deleting event:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete event. Please try again later.",
        });
      }
    }
  };

  // Get the events to display for the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <div className="p-6 pb-40 max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-5">
        <h1 className="text-3xl font-bold">All Events</h1>
        <Link href="/admin/events/add">
          <Button className="flex items-center gap-3 bg-[#1E88E5]">
            <FaPlus className="text-xl" />
            Add More
          </Button>
        </Link>
      </div>

      <div className="flex flex-col mt-10 gap-3">
        {loading ? (
          <p className="text-center col-span-3 text-gray-500 py-4">
            Loading events...
          </p>
        ) : error ? (
          <p className="text-center col-span-3 text-gray-500 py-4">{error}</p>
        ) : (
          currentEvents.map((event) => (
            <div
              className="flex flex-col  md:card-side bg-base-100 shadow-sm items-center rounded-md"
              key={event._id}
            >
              <figure className="md:w-[250px] w-full  object-cover flex min-h-full rounded-lg">
                <Image
                  width={250}
                  height={0}
                  src={event.eventLargeImage || event?.eventImage}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
              <div className="p-4 w-full flex flex-col justify-center">
                <h2 className="card-title text-lg">{event?.title}</h2>
                <p className="text-sm">
                  {event.description.split(" ").slice(0, 10).join(" ")}
                  {event.description.split(" ").length > 10 && "..."}
                </p>
                <div className="card-actions justify-start mt-2">
                  <div className="flex gap-3">
                    <Link
                      href={`/admin/events/edit/${event?._id}`}
                      className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 h-fit"
                    >
                      <Tooltip content="Edit">
                        <span>
                          <FiEdit2 className="text-sm" />
                        </span>
                      </Tooltip>
                    </Link>
                    <Tooltip content="Delete">
                      <span
                        className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                        onClick={() => handleDelete(event._id)}
                      >
                        <FiTrash2 className="text-sm" />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
