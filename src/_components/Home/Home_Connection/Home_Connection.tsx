import Image from "next/image";
import Link from "next/link";
import "./Home_Connection.css";
import readyToTakeLeap from "../../../../public/assets/Homepage/Ready-to-take-The-Leap-Icon.png";

const Home_Connection = () => {
  return (
    <div className="w-full mx-auto py-[70px] md:py-[150px] md:px-16 px-4">
      {/* Section Container with background image */}
      <div
        className="w-full lg:max-w-[1150px] h-[300px] relative bg-no-repeat rounded-[40px] md:mx-auto lg:p-0 p-5 bg-top"
        style={{
          backgroundImage:
            "url(assets/Homepage/ready-to-take-the-leap/leap-bg.webp)",
        }}
      >
        {/* Decorative leap icon for large screens */}
        <Image
          width={100}
          height={100}
          className="w-[300px] h-[300px] lg:block hidden absolute -top-[145px] -left-[70px]"
          src={readyToTakeLeap}
          alt="leap icon"
        />

        {/* Text and button content */}
        <div className="flex flex-col h-full justify-center text-center text-white mx-auto py-7 md:pt-16 w-11/12">
          <p className="font-bold text-3xl md:text-4xl lg:text-4xl leading-[3rem]">
            Ready to take the leap?
          </p>

          <p className="font-light text-base md:text-xl lg:text-2xl mt-3 mb-7 w-full md:w-[55%] lg:w-[45%] mx-auto">
            Connect With Our Finest Counsellors And Biggest Study Abroad
            Community
          </p>

          {/* WhatsApp CTA Button */}
          <Link
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://wa.me/+447903108549"
          >
            <button className="text-lg md:text-xl lg:text-xl bg-white text-black rounded-full border border-transparent px-5 py-2 md:px-20 md:py-3 lg:px-20 lg:py-3 hover:text-blue-500 hover:border-blue-500">
              Talk to a Counsellor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home_Connection;
