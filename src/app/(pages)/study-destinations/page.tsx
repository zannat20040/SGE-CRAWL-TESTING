import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Destinations from "./Destinations";
export const metadata: Metadata = {
  title: "Study Destinations",
  description:
    "Discover the best study destinations around the world. Explore top universities, programs, and opportunities to find the perfect place for your education abroad.",
  keywords: [
    "study destinations",
    "top universities",
    "study abroad locations",
    "international education",
    "best study programs",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/study-destinations`,
  },
};

const page = () => {
  return (
    <div className="pb-20 lg:pb-32">
      <div className="hidden">
        <ul className="flex flex-col gap-2">
          <Link href={`/study-destinations/study-in-the-australia`}>
            Study in the Australia
          </Link>
          <Link href={`/study-destinations/study-in-the-germany`}>
            Study in the Germany
          </Link>
          <Link href={`/study-destinations/study-in-the-uk`}>
            Study in the UK
          </Link>
          <Link href={`/study-destinations/study-in-the-usa`}>
            Study in the USA
          </Link>
          <Link href={`/study-destinations/study-in-the-switzerland`}>
            Study in the Switzerland
          </Link>
          <Link href={`/study-destinations/study-in-the-canada`}>
            Study in the Switzerland
          </Link>
        </ul>
      </div>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(13,53,234,1) 30%, rgba(44,124,249,1) 50%, rgba(13,53,234,1) 70%)",
        }}
      >
        <Destinations />
      </div>
    </div>
  );
};

export default page;