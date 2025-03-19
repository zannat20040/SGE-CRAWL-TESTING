"use client";
import { useState } from "react";
import { LuTriangle } from "react-icons/lu";

interface University {
  logo: string | null;
  Name: string | null;
  Overview: string | null;
  rank: string | null;
  location: string | null;
  established: string | null;
  History: string | null;
  "Ranking & Achievement": string | null;
  Services: string | null;
  "Department & Faculty": string | null;
  Accommodation: string | null;
  Fee: string | null;
  "international student": string | null;
  country: string | null;
  courses: string | null;
}

interface SingleUniversityAccordionProps {
  university: University | null;
}

const Single_Universty_Accordion: React.FC<SingleUniversityAccordionProps> = ({
  university,
}) => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const toggle = (key: string) => {
    setIsOpen((prevIdx) => (prevIdx === key ? null : key));
  };

  const UniversityInfo = () => {
    return (
      <div>
        {/* Overview */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("overview")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Overview
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "overview" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "overview" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "overview"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.Overview}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("history")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  History
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "history" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "history" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "history"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.History}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ranking & Achievement */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("achievement")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Ranking & Achievement
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "achievement" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "achievement" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "achievement"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.["Ranking & Achievement"]}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("faculty")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Department & Faculty
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "faculty" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "faculty" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "faculty"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.["Department & Faculty"]}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fees */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("fees")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Fees
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "fees" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "fees" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "fees"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.Fee}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("service")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Service
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "service" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "service" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "service"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.Services}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("accommodation")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Accommodation
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "accommodation" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "accommodation" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "accommodation"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.Accommodation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {university ? <UniversityInfo /> : <p>No university data available.</p>}
    </div>
  );
};

export default Single_Universty_Accordion;
