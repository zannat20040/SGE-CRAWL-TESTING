import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrLocationPin } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { useRouter } from "next/navigation";

// Define types for the event
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

interface PastEventsProps {
  pastEvents: Event[];
}

const PastEvents: React.FC<PastEventsProps> = ({ pastEvents }) => {
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

  const router = useRouter();

  const handleCardClick = (url: string) => {
    router.push(`/events/${url}`);
  };

  return (
    <div className="max-w-3xl lg:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[71px] ">
      {pastEvents.length <= 0 ? (
        <div className="text-center col-span-3">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          {pastEvents?.map((event, index) => (
            <div
              onClick={() => handleCardClick(event.eventURL)}
              key={index}
              className="cursor-pointer bg-[#FFFFFF] hover:bg-[#2563EB] card transition-all pastevents-shadow rounded-lg group:"
            >
              <div>
                <Image
                  width={100}
                  height={100}
                  src={event?.eventLargeImage || event?.eventImage}
                  alt={event?.title}
                  className="rounded-lg max-h-[214.14px] w-full h-[214.14px] lg:flex hidden "
                />
                <Image
                  width={100}
                  height={100}
                  src={event?.eventPhoneImage || event?.eventImage}
                  alt={event?.title}
                  className="rounded-lg w-full h-full  max-h-[270px]  lg:hidden flex "
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-full ">
                <div className="flex-1">
                  <h2 className="poppins-medium text-[18px] text-[#000000] pt-[18px]">
                    {event?.title}
                  </h2>
                  {event?.place && (
                    <div className="flex items-center gap-[10px] pt-[16px]">
                      <GrLocationPin className="text-lg text-[#F25025]" />

                      <p className="text-[#F25025] poppins-regular text-[14px]">
                        {event?.place}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center pt-1 pb-4  gap-1 flex-wrap">
                    <div className="flex items-center gap-1">
                      <SlCalender className="text-base text-[#F25025] " />
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
                </div>
                <Link href={`/events/${event?.eventURL}`} passHref>
                  <button
                    className="w-full poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-8 bg-[#FFFFFF] border border-[#E1E1E1]"
                    onClick={(e) => e.stopPropagation()} // Prevents parent div navigation
                  >
                    View Event Details
                  </button>
                </Link>
                {/* <Link href={`/events/${event?.eventURL}`}>
                    <button className="w-full poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-8 bg-[#FFFFFF] border border-[#E1E1E1]">
                      View Event Details
                    </button>
                  </Link> */}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PastEvents;
