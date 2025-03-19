/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React from "react";
import NoOngoing from "./NoOngoing";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function OnGoingEvents({ ongoingEvents }) {
  return (
    <div className="text-center space-y-10 font-bold ">
      <div className="">
        <div
          style={{
            background: `url(https://i.ibb.co.com/x59tdP0/Blue-Background.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`pt-[60px] pb-[200px] `}>
            <h1 className="text-4xl lg:text-5xl poppins-bold ">
              Ongoing Event
            </h1>
            {ongoingEvents?.length <= 0 ? (
              <NoOngoing />
            ) : (
              <div className="max-w-5xl mx-auto px-8 mb-6">
                <h2 className="text-[#00399F] text-2xl lg:text-3xl mt-5">
                  {ongoingEvents[0].title}{" "}
                </h2>
                <p className="mt-4 font-normal text-base text-black">
                  {ongoingEvents[0].description
                    .split(" ")
                    .slice(0, 50)
                    .join(" ")}
                  {ongoingEvents[0].description.split(" ").length > 50
                    ? "..."
                    : ""}
                </p>
              </div>
            )}
          </div>
        </div>
        {ongoingEvents?.length > 0 && (
          <div className="-mt-40 lg:-mt-48 max-w-5xl mx-auto border-b-2 px-10 border-[#CACACA] pb-20">
            {ongoingEvents[0]?.joinURL ? (
              <ReactPlayer
                url={ongoingEvents[0]?.joinURL}
                width="100%"
                height="auto"
                controls={true}
                style={{ aspectRatio: "16 / 9" }} // Adjust aspect ratio as needed
              />
            ) : (
              <Link href={`/events/${ongoingEvents[0]?.eventURL}`}>
                <Image
                  width={100}
                  height={100}
                  className="mx-auto rounded-3xl md:block hidden mb-10 min-h-[214.14px] min-w-[214.14px] w-full h-full  shadow-lg"
                  src={
                    ongoingEvents[0].eventLargeImage ||
                    ongoingEvents[0].eventImage
                  }
                  alt="ongoingEvents"
                />
                <Image
                  width={100}
                  height={100}
                  className="mx-auto rounded-3xl md:hidden block mb-10  w-auto h-auto  shadow-lg"
                  src={
                    ongoingEvents[0].eventPhoneImage ||
                    ongoingEvents[0].eventImage
                  }
                  alt="ongoingEvents"
                />
              </Link>
            )}

            {/* button show logic */}
            {ongoingEvents[0]?.joinURL &&
            ongoingEvents[0].place &&
            !ongoingEvents[0]?.eventRegistrationForm ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between items-center mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    ongoingEvents[0]?.place
                      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          ongoingEvents[0]?.place
                        )}`
                      : "/comingSoon"
                  }
                  className={``}
                >
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <HiOutlineLocationMarker />
                    <span> Event Location</span>
                  </div>
                </a>
                <Link href={`/events/${ongoingEvents[0]?.eventURL}`}>
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <span> See Event Details</span>
                  </div>
                </Link>
              </div>
            ) : ongoingEvents[0]?.eventRegistrationForm &&
              ongoingEvents[0].place &&
              !ongoingEvents[0]?.joinURL ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between items-center mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    ongoingEvents[0]?.place
                      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          ongoingEvents[0]?.place
                        )}`
                      : "/comingSoon"
                  }
                  className={``}
                >
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <HiOutlineLocationMarker />
                    <span> Event Location</span>
                  </div>
                </a>
                <a
                  href={ongoingEvents[0]?.eventRegistrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <span>Register Now</span>
                  </div>
                </a>
              </div>
            ) : !ongoingEvents[0]?.eventRegistrationForm &&
              ongoingEvents[0].place &&
              !ongoingEvents[0]?.joinURL ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  ongoingEvents[0]?.place
                    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        ongoingEvents[0]?.place
                      )}`
                    : "/comingSoon"
                }
                className={``}
              >
                <div
                  className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
            rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                >
                  <HiOutlineLocationMarker />
                  <span> Event Location</span>
                </div>
              </a>
            ) : ongoingEvents[0]?.joinURL &&
              ongoingEvents[0]?.eventRegistrationForm &&
              ongoingEvents[0].place ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between items-center mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    ongoingEvents[0]?.place
                      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          ongoingEvents[0]?.place
                        )}`
                      : "/comingSoon"
                  }
                  className={``}
                >
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <HiOutlineLocationMarker />
                    <span> Event Location</span>
                  </div>
                </a>
                <a
                  href={ongoingEvents[0]?.eventRegistrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <span>Register Now</span>
                  </div>
                </a>
                <Link
                  href={`/events/${ongoingEvents[0]?.eventURL}`}
                  className="md:col-span-1 sm:col-span-2"
                >
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <span> See Event Details</span>
                  </div>
                </Link>
              </div>
            ) : ongoingEvents[0]?.joinURL &&
              ongoingEvents[0]?.eventRegistrationForm &&
              !ongoingEvents[0].place ? (
              <div className="grid grid-cols-2 gap-2 justify-between items-center mt-10">
                <a
                  href={ongoingEvents[0]?.eventRegistrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <span>Register Now</span>
                  </div>
                </a>
                <Link href={`/events/${ongoingEvents[0]?.eventURL}`}>
                  <div
                    className="hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                  >
                    <span> See Event Details</span>
                  </div>
                </Link>
              </div>
            ) : (
              <>
                {ongoingEvents[0]?.eventRegistrationForm ? (
                  <a
                    href={ongoingEvents[0]?.eventRegistrationForm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className=" mt-10 hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                    >
                      <span>Register Now</span>
                    </div>
                  </a>
                ) : (
                  <Link href={`/events/${ongoingEvents[0]?.eventURL}`}>
                    <div
                      className="mt-10 hover:bg-[#2563EB] hover:text-white bg-white text-[#2563EB]
                rounded-3xl w-full py-3 flex justify-center gap-4  items-center duration-500 transition-all"
                    >
                      <span> See Event Details</span>
                    </div>
                  </Link>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
