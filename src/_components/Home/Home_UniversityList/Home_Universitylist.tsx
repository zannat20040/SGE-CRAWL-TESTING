import "./Home_UniversityList.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import UniversityCard from "./UniversityCard";

const Home_UniversityList = () => {
  return (
    <div className="lg:mt-[131px] mt-[40px] lg:mb-[117px] mb-[40px]">
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-[#004ACB] poppins-bold text-[50px] mb-2 px-3">
          Universities Across The Globe
        </h2>
        <p className="poppins-bold pt-5 lg:pt-0 text-4xl lg:text-[67px]">
          The Choice is Endless
        </p>
        <Image
          width={100}
          height={100}
          loading="lazy"
          className="mx-auto lg:w-[290px] w-[190px] py-3 bg-white h-auto"
          src="/assets/Homepage/University Section Animation.gif"
          alt="University Animation"
        />
      </div>

      {/* Marquee Section */}
      <Marquee className="mb-10" pauseOnHover speed={250} direction="right">
        <div className="flex gap-10">
          <UniversityCard />
        </div>
      </Marquee>

      <Marquee pauseOnHover speed={250}>
        <div className="flex gap-10">
          <UniversityCard />
        </div>
      </Marquee>

      {/* View All Universities Button */}
      <div className="text-center mt-[60px] lg:mt-[98px]">
        <Link href="/comingSoon">
          <button className="text-white bg-[#2563EB] hover:bg-[#3D7DED] rounded-[32px] mulish-regular lg:text-[21px] text-[14px] px-[89px] py-2 mb-[41px]">
            View All Universities
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home_UniversityList;
