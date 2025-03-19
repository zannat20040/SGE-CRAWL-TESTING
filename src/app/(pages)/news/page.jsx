import Banner from "@/_components/shared/About/Banner";
import PhotoCard from "@/_components/shared/About/PhotoCard";
import React from "react";

export const metadata = {
  title: "News & Press",
  description:
    "Stay informed with the latest updates, trends, and insights on studying abroad, scholarships, and international education.",
  keywords: ["education news", "study abroad updates", "scholarships", "international education", "press releases"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/news`,
  },
};

export default function page() {
  const bannerDescription = [
    {
      para: "Stay informed with the latest updates from SGE. Our News & Press section keeps you connected to the most recent developments, achievements, and announcements in the education sector. Explore insightful articles, success stories, and key events that highlight our commitment to excellence and innovation. Follow us for breaking news and press releases that shape the future of global education.",
    },
  ];
  const latestNews = [
    {
      title: "New University Partnerships",
      description:
        "Explore our growing collaborations with top global universities, creating more opportunities for students in various fields like engineering, business, and arts.",
      url: "/assets/News/News Images/image004.webp", // Image from id: 2
    },
    {
      title: "Admissions Updates",
      description:
        "Don't miss the latest deadlines for upcoming intakes, application tips, and exclusive scholarship opportunities.",
      url: "/assets/News/News Images/image005.webp", // Image from id: 3
    },
    {
      title: "Program Launches",
      description:
        "Learn about newly introduced services, including study abroad consultations, career guidance programs, and student mentorship services.",
      url: "/assets/News/News Images/image006.webp", // Image from id: 4
    },
  ];

  const PressRelease = [
    {
      title: "Global Collaborations",
      description:
        "Details on agreements with international universities, providing students with direct access to world-class educational programs.",
      url: "/assets/News/News Images/image007.webp", // Image from id: 5
    },
    {
      title: "New Services",
      description:
        "Information on newly introduced student programs, workshops, and events aimed at helping students excel in their academic journeys.",
      url: "/assets/News/News Images/image008.webp", // Image from id: 6
    },
    {
      title: "Expansion News",
      description:
        "Updates on Shabuj Global's expansion into new regions or areas of expertise, allowing more students to benefit from our services.",
      url: "/assets/News/News Images/image009.webp", // Image from id: 7
    },
  ];

  const media = [
    {
      title: "Featured Articles",
      description:
        "Shabuj Global Education in the spotlight—discover articles and interviews highlighting our mission to connect students with global education opportunities.",
      url: "/assets/News/News Images/image010.webp", // Image from id: 8
    },
    {
      title: "Video Features",
      description:
        "Watch our team in action at education fairs, seminars, and interviews with media outlets discussing the future of international education.",
      url: "/assets/News/News Images/image011.webp", // Image from id: 9
    },
  ];

  const events = [
    {
      title: "Upcoming Events",
      description:
        "Details on scheduled webinars, workshops, and fairs where students can interact with university representatives, get personalized guidance, and learn about scholarship options.",
      url: "/assets/News/News Images/image001.webp", // Image from id: 10
    },
    {
      title: "Event Highlights",
      description:
        "Recaps of recent events with photo galleries, student testimonials, and key takeaways from our workshops and fairs.",
      url: "/assets/News/News Images/image003.webp", // Image from id: 11
    },
  ];

  const gallery = [
    {
      title: "Event Photos",
      description:
        "Explore images from international education fairs, student workshops, and key company events.",
      url: "/assets/News/News Images/image002.webp", // Image from id: 12
    },
    {
      title: "Videos",
      description:
        "Watch informative sessions, student success stories, and press features on Shabuj Global’s role in shaping the future of education for Bangladeshi students.",
      url: "/assets/News/News Images/image004.webp", // Reuse any image, e.g., from id: 2
    },
  ];

  return (
    <div>
      <Banner
        title={"Join a Collaborative Team"}
        description={bannerDescription}
        style={"text-white"}
      />

      {/* latest news */}
      <div className="bg-[#EFF6FF] py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              Latest News
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Stay up-to-date with our latest development
            </p>
          </div>
          <PhotoCard data={latestNews} />
        </div>
      </div>

      {/* press release */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              Press Releases
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Official announcements on key achievements and partnerships:
            </p>
          </div>
          <PhotoCard data={PressRelease} />
        </div>
      </div>

      {/* media */}
      <div className="bg-[#EFF6FF] py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              In the Media{" "}
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Explore our coverage across various platforms
            </p>
          </div>
          <PhotoCard data={media} />
        </div>
      </div>

      {/* events */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              Events{" "}
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Join us at our upcoming events and review past highlights{" "}
            </p>
          </div>
          <PhotoCard data={events} />
        </div>
      </div>

      {/* gallery */}
      <div className="bg-[#EFF6FF] py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px] ">
              Media Gallery{" "}
            </h2>
            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Take a visual tour of our journey
            </p>
          </div>
          <PhotoCard data={gallery} />
        </div>
      </div>

      <div className="pb-48"></div>
    </div>
  );
}
