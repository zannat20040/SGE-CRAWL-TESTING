import Image from "next/image";
import "./Home_Connection.css";
import Link from "next/link";
import readyToTakeLeap from "../../../../public/assets/Homepage/Ready-to-take-The-Leap-Icon.png";
const Home_Connection = () => {
  return (
    <div className="w-full mx-auto py-[20%] md:py-[10%]  mt-10">
      <div
        className="w-full lg:max-w-[1150px] rounded-[40px] h-[300px] bg-no-repeat relative md:mx-auto  lg:p-0 p-2 bg-top"
        style={{
          backgroundImage: `url(assets/Homepage/ready-to-take-the-leap/leap-bg.webp)`,
        }}
      >
        <Image
          width={100}
          height={100}
          className=" w-[300px] h-[300px] lg:block hidden absolute -top-[145px] -left-[70px]"
          src={readyToTakeLeap}
          alt="leap icon"
        />
        <div className="flex flex-col h-full justify-center md:pt-16 mx-auto py-7 text-center text-white w-11/12">
          <p className="font-bold lg:text-4xl md:text-4xl text-3xl leading-[3rem]">
            Ready to take the leap?
          </p>
          <p className="lg:text-2xl md:text-xl text-base font-[300] lg:w-[45%] md:w-[55%] w-full mx-auto mb-7 mt-3">
            Connect With Our Finest Counsellors And Biggest Study Abroad
            Community
          </p>
          <Link
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={"https://wa.me/+447903108549"}
          >
            <button className=" lg:text-xl md:text-xl text-lg bg-white rounded-full border-transparent border-[1px] text-black lg:px-20 md:px-20 px-5 lg:py-3 md:py-3  py-2 hover:text-blue-500 hover:border-blue-500 hover:border-[1px] ">
              Talk to a Counsellor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home_Connection;
