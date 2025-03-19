import { Button } from "@material-tailwind/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
export default function BangleshCareer({ BangladeshJob }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 justify-between items-center ">
      {BangladeshJob.map((job, i) => (
        <div
          key={i}
          className="hover:shadow-lg bg-white rounded border p-5 pb-0 h-full flex flex-col justify-between "
        >
          <div>
            <p className="text-gray-500 text-sm">{job.weekdays}</p>
            <p className="text-xl poppins-semibold">{job.title}</p>
            <p className="bg-gray-200 rounded text-xs px-2 py-1 uppercase w-fit my-3">
              {job.jobType}
            </p>
            <p className="text-sm">{job.description}</p>
            <p className="text-sm mt-1">{job.cvInstructions}</p>
            <div className="flex gap-2 items-center text-sm my-2">
              <AiOutlineMail className=""/>
              <a
                href={`mailto:${job.mail}`}
                className="hover:text-blue-500 transition-all duration-150 underline"
              >
                {job.mail}
              </a>
            </div>
          </div>
          <div>
            <hr />
            <div className="flex gap-5 justify-between items-center py-3">
              {" "}
              <div>
                <p className="capitalize text-sm poppins-semibold ">
                  {job.salary}
                </p>
                <p className="text-gray-600 text-sm">{job.location}</p>
              </div>
              <Link href="/comingSoon">
              <Button size="sm" className="rounded-md font-normal">
                Apply Now
              </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
