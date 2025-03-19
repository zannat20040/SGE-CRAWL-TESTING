import Banner from "@/_components/Home/Banner/Banner";
import "./globals.css";
import Home_Events from "@/_components/Home/Home_Events/Home_Events";
import Home_Tab from "@/_components/Home/Home_Tab/Home_Tab";
import Home_Counter from "@/_components/Home/Home_Counter/Home_Counter";
import Home_Connection from "@/_components/Home/Home_Connection/Home_Connection";
import Home_Destination from "@/_components/Home/Home_Destination/Home_Destination";
import Home_UniversityList from "@/_components/Home/Home_UniversityList/Home_Universitylist";
import ImageGallery from "@/_components/Home/Home_ImageGallery/ImageGallery";
// import Home_Contact from "@/_components/Home/Home_Contact/Home_Contact";
import WelcomeModal from "@/_components/Home/WelcomeModal/WelcomeModal";
// import HomeVideoTestimonial from "@/_components/Home/Home_Testimonial/HomeVideoTestimonial";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" font-poppins overflow-x-hidden ">
      <WelcomeModal />
      <Link className="hidden" href="/study-destinations">
        Study
      </Link>
      <Banner />
      <Home_Events />
      <Home_Tab />
      <Home_Counter />
      {/* <HomeVideoTestimonial /> */}
      <Home_Connection />
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(13,53,234,1) 30%, rgba(44,124,249,1) 50%, rgba(13,53,234,1) 70%)",
        }}
      >
        <Home_Destination />
      </div>
      <Home_UniversityList />
      <ImageGallery />
      {/* <Home_Contact /> */}
    </div>
  );
}
