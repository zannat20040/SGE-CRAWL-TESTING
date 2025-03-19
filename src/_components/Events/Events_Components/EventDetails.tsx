"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import UpcomingEvents_PastEvents from "../UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";
import CountDown from "./CountDown";
import { HiOutlineLocationMarker } from "react-icons/hi";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
import { GrMapLocation } from "react-icons/gr";

interface EventFormData {
  title: string;
  eventLargeImage: string;
  eventPhoneImage: string;
  eventImage: string;
  description: string;
  place: string;
  eventStartDate: string;
  eventStartTime: string;
  eventEndDate: string;
  eventEndTime: string;
  organizer: string;
  category: string;
  isOnline: boolean;
  joinURL: string;
  eventURL: string;
  imageGallery: string[];
  startLocal: string;
  endLocal: string;
  eventRegistrationForm: string;
}

const EventDetails = ({ pageUrl }: { pageUrl: string }) => {
  const [event, setEvent] = useState<EventFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [eventImage, setEventImage] = useState<string | null>(null);
  const isDesktop = window.innerWidth >= 768;

  useEffect(() => {
    const fetchEvent = async () => {
      if (!pageUrl) return;
      setLoading(true);

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_FORM_URL}/events/eventURL/${pageUrl}`
        );

        const eventData: EventFormData = response.data;

        // Ensure start and end times exist before processing them
        if (
          eventData?.eventStartDate &&
          eventData?.eventStartTime &&
          eventData?.eventEndDate &&
          eventData?.eventEndTime
        ) {
          const startUTC = convertToUTC(
            eventData.eventStartDate,
            eventData.eventStartTime
          );
          const endUTC = convertToUTC(
            eventData.eventEndDate,
            eventData.eventEndTime
          );

          if (startUTC && endUTC) {
            setEvent({
              ...eventData,
              startLocal: convertToLocal(startUTC),
              endLocal: convertToLocal(endUTC),
            });
          } else {
            console.error("Failed to convert event times.");
            setEvent(eventData); // Keep original data without local conversion
          }
        } else {
          setEvent(eventData);
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
        setError("Failed to fetch event data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [pageUrl]);

  const HandleEventImage = (eventImage: string) => {
    setOpenModal(true);
    setEventImage(eventImage);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!event) return <div>No event found.</div>;

  return (
    <div className="pb-36 ">
      <div
        className="py-14"
        style={{
          background: `url(https://i.ibb.co/x59tdP0/Blue-Background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-5">
          <div className="lg:grid flex flex-col-reverse lg:grid-cols-2  gap-5 justify-center items-center">
            <div className="w-full">
              {/* title , desc, organizer, category, place */}
              {event.category && (
                <button className="text-xs bg-red-500 text-white px-3 py-1 rounded-md w-auto">
                  {event.category}
                </button>
              )}
              <h1 className="text-[#00399F] text-2xl lg:text-3xl mt-5 poppins-bold">
                {event.title}
              </h1>
              <p className="text-black text-sm my-5">{event.description}</p>
              <p className="text-black text-sm my-5">
                {event?.organizer && `Organized by ${event?.organizer}`}
              </p>
              {event?.place && (
                <div className="flex items-center gap-[10px] pt-[16px]">
                  <GrMapLocation className="text-lg text-[#F25025]" />

                  <p className="text-[#F25025] poppins-regular text-[14px]">
                    {event?.place}
                  </p>
                </div>
              )}

              {/* date & time */}
              <div className="flex items-center pt-1 pb-4  gap-1 flex-wrap">
                <div className="flex items-center gap-1">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9912 5.66125H6.99121C4.78207 5.66125 2.99121 7.45212 2.99121 9.66125V18.9113C2.99121 21.1204 4.78207 22.9113 6.99121 22.9113H16.9912C19.2003 22.9113 20.9912 21.1204 20.9912 18.9113V9.66125C20.9912 7.45212 19.2003 5.66125 16.9912 5.66125Z"
                      stroke="#F25025"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.99121 4.16125V7.16125"
                      stroke="#F25025"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9912 4.16125V7.16125"
                      stroke="#F25025"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.99121 10.6613H20.9912"
                      stroke="#F25025"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.99121 14.9012V14.9112"
                      stroke="#F25025"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9912 14.9012V14.9112"
                      stroke="#F25025"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.9912 14.9012V14.9112"
                      stroke="#F25025"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.9912 18.9012V18.9112"
                      stroke="#F25025"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9912 18.9012V18.9112"
                      stroke="#F25025"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.99121 18.9012V18.9112"
                      stroke="#F25025"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#F25025] poppins-regular text-[14px] pl-[5px] pr-[5px]">
                    {new Date(event?.startLocal).toLocaleDateString() ===
                    new Date(event?.endLocal).toLocaleDateString()
                      ? formatDate(event?.startLocal)
                      : `${formatDate(event?.startLocal)} - ${formatDate(
                          event?.endLocal
                        )}`}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="2.47293"
                      cy="2.91129"
                      r="2.48172"
                      fill="#F25025"
                    />
                  </svg>
                  <p className="text-[#F25025] poppins-regular text-[14px] pl-[5px]">
                    {new Date(event?.startLocal)?.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}{" "}
                    -
                    {new Date(event?.endLocal)?.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>

              {/* place */}
              {event?.place && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    event?.place
                      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          event?.place
                        )}`
                      : "/comingSoon"
                  }
                  className="w-fit px-10 font-inter rounded-full text-white bg-[#2563EB] py-3 font-light text-xs cursor-pointer flex gap-2"
                >
                  <HiOutlineLocationMarker />
                  <span> Event Location</span>
                </a>
              )}
              {event?.eventRegistrationForm && (
                <a
                  href={event?.eventRegistrationForm}
                  target="_blank"
                  rel="noopener"
                  className="w-auto px-10 font-inter rounded-full text-white bg-[#2563EB] py-3 font-light text-xs cursor-pointer"
                >
                  Register Now
                </a>
              )}
            </div>
            <div>
              {event.startLocal &&
                event.endLocal &&
                (new Date(event.startLocal).getTime() > new Date().getTime() ? (
                  <CountDown eventDate={event.startLocal} />
                ) : (
                  new Date(event.endLocal).getTime() > new Date().getTime() && (
                    <CountDown eventDate={event.endLocal} />
                  )
                ))}

              {event?.joinURL ? (
                <div className="relative w-full h-full group">
                  <Image
                    src={event?.eventLargeImage || event?.eventImage}
                    alt={event?.title}
                    width={100}
                    height={100}
                    style={{ aspectRatio: "16 / 9" }}
                    className="h-full w-full rounded-xl md:flex hidden"
                  />
                  <Image
                    src={event?.eventLargeImage || event?.eventImage}
                    alt={event?.title}
                    width={100}
                    height={100}
                    style={{ aspectRatio: "1/1" }}
                    className="h-full w-full rounded-xl flex md:hidden"
                  />
                  {/* Show the embedded content on hover */}
                  <div className="duration-500 absolute top-0 right-0 w-full h-full rounded-2xl hidden group-hover:flex justify-center items-center bg-black/50">
                    <ReactPlayer
                      url={event?.joinURL}
                      width="100%"
                      height="100%"
                      controls={true}
                      style={{
                        aspectRatio: "16/9",
                        display: isDesktop ? "flex" : "none",
                      }} // Aspect ratio for desktop
                    />
                    <ReactPlayer
                      url={event?.joinURL}
                      width="100%"
                      height="100%"
                      controls={true}
                      style={{
                        aspectRatio: "1/1",
                        display: isDesktop ? "none" : "flex",
                      }} // Aspect ratio for mobile
                    />
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={event?.eventLargeImage || event?.eventImage}
                    alt={event?.title}
                    width={100}
                    height={100}
                    style={{ aspectRatio: "16 / 9" }}
                    className="h-full w-full rounded-xl md:flex hidden"
                  />{" "}
                  <Image
                    src={event?.eventPhoneImage || event?.eventImage}
                    alt={event?.title}
                    width={100}
                    height={100}
                    style={{ aspectRatio: "1/1" }}
                    className="h-full w-full rounded-xl  flex md:hidden"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {event?.imageGallery.length > 0 && (
        <h1 className="text-4xl lg:text-5xl poppins-bold pt-10 px-4 text-center">
          Event Gallery
        </h1>
      )}
      <Marquee pauseOnHover={true} direction="right">
        {event?.imageGallery.length > 0 && (
          <div className="flex gap-4 justify-center items-center">
            {event?.imageGallery.map((image, index) => (
              <div
                className={` ${
                  index === event.imageGallery.length - 1 && "mr-4"
                }`}
                key={`img${index}`}
              >
                <motion.div
                  initial={{}}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className={`w-full h-[250px] rounded-[20px] mr-2 cursor-pointer   bg-white bg-opacity-30   grayscale hover:filter-none relative   group   mt-[50px]`}
                >
                  <Image
                    onClick={() => HandleEventImage(image)}
                    src={image}
                    alt={`gallary${index}`}
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            ))}{" "}
          </div>
        )}
      </Marquee>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 w-full h-full bg-black/80 duration-100`}
      >
        <div className="relative w-auto h-auto lg:h-[90%] mx-auto px-6">
          {eventImage && (
            <Image
              src={eventImage} // Use a default image if eventImage is null
              alt="eventpicture"
              width={100}
              height={100}
              className="w-full h-full bg-black/40 "
            />
          )}

          {/* close button */}
          <IoCloseOutline
            className="absolute text-5xl  mx-auto hover:opacity-60  right-6 top-0 drop-shadow-[0_0_10px_black] cursor-pointer bg-white p-2"
            onClick={() => setOpenModal(false)}
          />
        </div>
      </div>

      <UpcomingEvents_PastEvents />
    </div>
  );
};

export default EventDetails;

const getOrdinalSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

// Function to format the date in "22nd July, 2024" format
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${getOrdinalSuffix(day)} ${month}, ${year}`;
};

// Helper Functions
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

const convertToLocal = (utcDate: string): string => {
  return utcDate ? new Date(utcDate).toLocaleString() : "Invalid Date";
};
