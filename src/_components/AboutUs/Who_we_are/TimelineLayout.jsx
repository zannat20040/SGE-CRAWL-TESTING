"use client";
import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";

export default function TimelineLayout({timelineData}) {
 

  return (
    <div className="w-full flex flex-col gap-6 relative">
      <div className="absolute top-0 bottom-0  left-9 h-full w-1 bg-gray-200"></div>
      {timelineData?.map((data, index) => (
        <Timeline key={index}>
          <TimelineItem className="h-full ">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3 bg-[#00399F]" variant="ghost">
                {data?.icon}
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray" className="!poppins-semibold">
                  {data?.title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {data?.description}
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      ))}
    </div>
  );
}
