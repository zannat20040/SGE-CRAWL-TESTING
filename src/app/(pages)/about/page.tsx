import AboutUs_components from "@/_components/AboutUs/AboutUs_components";
import AboutUs_MeetOurFounder from "@/_components/AboutUs/AboutUs_MeetOurFounder/AboutUs_MeetOurFounder";
import AboutUs_Thebest from "@/_components/AboutUs/AboutUs_TheBest/AboutUs_TheBest";
import Home_Connection from "@/_components/Home/Home_Connection/Home_Connection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us", 
  description:
    "Explore how we support students with expert counseling, application assistance, and tailored study programs.",
  keywords: [
    "student support",
    "education counseling",
    "study abroad",
    "application assistance",
    "tailored study programs",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about`,
  },
};
const page = () => {
  return (
    <div>
      <AboutUs_components />
      <AboutUs_MeetOurFounder />
      <AboutUs_Thebest />
      <div className="pb-20">
        <Home_Connection />
      </div>
    </div>
  );
};

export default page;
