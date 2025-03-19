import Image from "next/image";
import React from "react";
import NoUpcoming from "./NoUpcoming";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaRegCalendarDays } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CountDown from "./CountDown";
import { useRouter } from "next/navigation";

export default function UpComingEvents({ upcomingEvents }) {
  // Helper function to get the ordinal suffix for the day
  const getOrdinalSuffix = (day) => {
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
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${getOrdinalSuffix(day)} ${month}, ${year}`;
  };

  const router = useRouter();

  const handleCardClick = (url) => {
    router.push(`/events/${url}`);
  };

  return (
    <div
      className={` ${
        upcomingEvents.length > 0 ? "max-w-5xl" : "max-w-[1350px]"
      } mx-auto text-center my-10 px-0  `}
    >
      <h1 className="text-4xl lg:text-5xl poppins-bold mb-10">
        Upcoming Events
      </h1>
      {/* counter */}

      {upcomingEvents?.length > 0 ? (
        <div className="px-4">
          {" "}
          <div className="">
            <CountDown eventDate={upcomingEvents[0].startLocal} />
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1 lg:items-center items-start  gap-5 justify-center my-10 ">
            {/* first event */}

            <div
              onClick={() => handleCardClick(upcomingEvents[0]?.eventURL)}
              className="cursor-pointer lg:flex lg:col-span-2 flex-col hidden justify-between  rounded-2xl text-start gap-4 shadow-2xl pt-0"
            >
              <div className="max-w-[564px] max-h-[317.25px]">
                <Image
                  width={100}
                  height={100}
                  className="h-full w-full rounded-lg"
                  src={
                    upcomingEvents[0]?.eventLargeImage ||
                    upcomingEvents[0]?.eventImage
                  }
                  alt={upcomingEvents[0]?.title}
                />
              </div>
              <div className="p-5 pt-0">
                <h2 className="font-bold text-lg ">
                  {upcomingEvents[0]?.title}
                </h2>
                <p>
                  {upcomingEvents[0]?.description
                    .split(" ")
                    .slice(0, 10)
                    .join(" ")}
                  {upcomingEvents[0]?.description.split(" ")?.length > 10
                    ? "..."
                    : ""}
                </p>
                <ul className="text-[#F25025]">
                  {upcomingEvents[0]?.place && (
                    <li className="flex items-center  gap-2 mb-1">
                      <HiOutlineLocationMarker className="text-lg" />
                      {upcomingEvents[0]?.place}
                    </li>
                  )}

                  <li className="flex gap-2 lg:items-center flex-col sm:flex-row justify-between flex-wrap">
                    <span className="flex md:flex-nowrap flex-wrap gap-2">
                      <span className="flex items-center gap-1">
                        <FaRegCalendarDays />
                        {new Date(
                          upcomingEvents[0]?.startLocal
                        ).toLocaleDateString() ===
                        new Date(
                          upcomingEvents[0]?.endLocal
                        ).toLocaleDateString()
                          ? formatDate(upcomingEvents[0]?.startLocal)
                          : `${formatDate(
                              upcomingEvents[0]?.startLocal
                            )} - ${formatDate(upcomingEvents[0]?.endLocal)}`}
                      </span>
                      <span className="flex items-center gap-1">
                        <GoDotFill />
                        {new Date(
                          upcomingEvents[0]?.startLocal
                        )?.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}{" "}
                        -
                        {new Date(
                          upcomingEvents[0]?.endLocal
                        )?.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </span>
                    </span>
                    <Link href={`/events/${upcomingEvents[0]?.eventURL}`}>
                      <span className="px-4 font-inter rounded-2xl text-white bg-[#2563EB] p-2 font-light text-xs cursor-pointer">
                        Know More
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden  gap-5 col-span-2">
              {upcomingEvents?.map((event) => (
                <div
                  onClick={() => handleCardClick(event?.eventURL)}
                  key={event?._id}
                  className="cursor-pointer flex flex-col justify-between rounded-2xl text-start gap-4 shadow-2xl  pt-0"
                >
                  <Image
                    width={100}
                    height={100}
                    className="h-[317px] w-full rounded-2xl rounded-b-none md:flex sm:hidden flex"
                    src={event?.eventPhoneImage || event?.eventImage}
                    alt={event?.title}
                  />
                  <Image
                    width={100}
                    height={100}
                    className="h-[317px] w-full rounded-2xl rounded-b-none hidden sm:flex md:hidden "
                    src={event?.eventLargeImage || event?.eventImage}
                    alt={event?.title}
                  />

                  {
                    <div className="p-5 pt-0 flex-1  flex flex-col justify-between">
                      <div>
                        <h2 className="font-bold text-lg  ">{event?.title}</h2>
                        <p>
                          {event?.description.split(" ").slice(0, 10).join(" ")}
                          {event?.description.split(" ")?.length > 10
                            ? "..."
                            : ""}
                        </p>
                      </div>
                      <ul className="text-[#F25025]">
                        {event?.place && (
                          <li className="flex items-center  gap-2 mb-1">
                            <HiOutlineLocationMarker className="text-lg" />
                            {event?.place}
                          </li>
                        )}

                        <li className="flex lg:gap-2 gap-4 lg:items-center flex-col sm:flex-row justify-between flex-wrap mt-3">
                          <span className="flex md:flex-nowrap flex-wrap gap-2">
                            <span className="flex items-center gap-2">
                              <FaRegCalendarDays />
                              {new Date(
                                event?.startLocal
                              ).toLocaleDateString() ===
                              new Date(event?.endLocal).toLocaleDateString()
                                ? formatDate(event?.startLocal)
                                : `${formatDate(
                                    event?.startLocal
                                  )} - ${formatDate(event?.endLocal)}`}
                            </span>
                            <span className="flex items-center gap-2">
                              <GoDotFill />
                              {new Date(event?.startLocal)?.toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}{" "}
                              -
                              {new Date(event?.endLocal)?.toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}
                            </span>
                          </span>
                          <Link href={`/events/${event?.eventURL}`}>
                            <span className="w-auto px-10 font-inter rounded-full text-white bg-[#2563EB] py-3 font-light text-xs cursor-pointer">
                              Know More
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                </div>
              ))}
            </div>

            {/* other two */}
            <div className=" lg:col-span-3 flex-col justify-evenly gap-5 lg:flex hidden">
              {upcomingEvents?.slice(1, 3)?.map((event) => (
                <div
                  onClick={() => handleCardClick(event?.eventURL)}
                  key={event?._id}
                  className="cursor-pointer flex flex-col lg:flex-row items-center justify-center rounded-2xl text-start space-y-2 shadow-2xl  gap-3  "
                >
                  <Image
                    width={100}
                    height={100}
                    className="max-h-[214.14px] w-full h-[214.14px] lg:w-[214.14px] lg:h-[214.14px] max-w-[214.14px] rounded-2xl "
                    src={event?.eventPhoneImage || event?.eventImage}
                    alt={event?.title}
                  />
                  <div className=" w-full !mt-0 p-5">
                    <h2 className="font-bold  ">{event?.title}</h2>
                    <p className="text-sm">
                      {event.description.split(" ").slice(0, 10).join(" ")}
                      {event.description.split(" ").length > 10 && "..."}
                    </p>

                    <ul className="text-[#F25025]  space-y-1 text-xs mt-3">
                      {event?.place && (
                        <li className="flex items-center  gap-2">
                          <HiOutlineLocationMarker />
                          {event?.place}
                        </li>
                      )}

                      <li className="flex items-center justify-between lg:gap-4 gap-3  flex-wrap !mt-3 ">
                        <span>
                          <span className="flex gap-2">
                            <FaRegCalendarDays />
                            {new Date(
                              event?.startLocal
                            ).toLocaleDateString() ===
                            new Date(event.endLocal).toLocaleDateString()
                              ? formatDate(event?.startLocal)
                              : `${formatDate(
                                  event?.startLocal
                                )} - ${formatDate(event?.endLocal)}`}
                          </span>
                          <span className="flex gap-2">
                            <GoDotFill />
                            {new Date(event?.startLocal)?.toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )}{" "}
                            -
                            {new Date(event?.endLocal)?.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </span>
                        </span>{" "}
                        <Link href={`/events/${event?.eventURL}`}>
                          {" "}
                          <span className="font-inter rounded-full text-white bg-[#2563EB] py-3 font-light text-xs px-6 cursor-pointer">
                            Know More
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
              {/* event card */}
            </div>
          </div>
        </div>
      ) : (
        <NoUpcoming />
      )}
    </div>
  );
}
