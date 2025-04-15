import Image from "next/image";
import planepath from "../../../../public/assets/Homepage/choose-your-destination/planepath.webp";
import DestinationClient from "./DestinationClient";

// Main component for the "Choose Your Destination" section
const Home_Destination = () => {
  return (
    <div className="poppins flex flex-col py-10 lg:my-20 mt-0 mb-20 relative overflow-hidden lg:overflow-visible pb-48">
      {/* Title and decorative content */}
      <div className="text-white text-center space-y-5 py-5">
        {/* Decorative airplane path image (only visible on large screens) */}
        <div className="absolute z-5 top-[-120px] hidden lg:flex right-[8%] lg:right-[27%]">
          <Image
            width={100}
            height={100}
            src={planepath}
            alt="planepath"
            priority
            className="w-auto h-auto"
          />
        </div>

        {/* Section heading */}
        <div className="bg-[#21E5E5] bg-clip-text py-2 px-4 text-transparent text-4xl font-bold">
          <h1>Choose Your Destination</h1>
        </div>

        {/* Subheading */}
        <h1 className="text-5xl font-bold pb-10 px-4">We’ll Plan the Rest</h1>
      </div>

      {/* Client-side rendered destination content (cards + toggle button) */}
      <div>
        <DestinationClient />
      </div>
    </div>
  );
};

export default Home_Destination;
