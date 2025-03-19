import Image from "next/image";
import project from "../../../assets/images/college-project-animate.svg";
import servicesData from "../../../assets/json/services.json";
import Link from "next/link";
import circleimg from "../../../../public/assets/Services/1. Services/Circle.png";
import airport from "../../../../public/assets/Services/1. Services/Airport-amico.jpg";
import passport from "../../../../public/assets/Services/1. Services/Health-passport-pana.jpg";
import counseling from "../../../../public/assets/Services/1. Services/counseling-pana.jpg";
const Services_Components = () => {
  const Card = ({
    circle,
    position,
    index,
  }: {
    circle: string;
    position: string;
    index: number;
  }) => {
    return (
      <div className="w-80 mx-auto lg:mx-0 relative bg-white  shadow-lg px-5 py-10 rounded-2xl">
        <h2 className="text-2xl w-1/3 font-semibold">
          {servicesData[index].title}
        </h2>
        <p className="text-sm my-5 font-medium">{servicesData[index].text}</p>
        <Link
          href=""
          className="hover:border-blue-400 hover:text-blue-400 border-[2px] border-b-[1px] rounded-full px-4 py-2 text-sm mt-5"
        >
          Learn More
        </Link>
        {circle && (
          <div>
            {position == "top-center" ? (
              <Image
                width={100}
                height={100}
                className="w-auto h-auto hidden lg:flex absolute -top-3 left-[135px]"
                src={circleimg}
                alt="circleimg"
              />
            ) : (
              <Image
                width={100}
                height={100}
                className="w-auto h-auto hidden lg:flex absolute  -right-6 top-9"
                src={circleimg}
                alt="circleimg"
              />
            )}
          </div>
        )}
      </div>
    );
  };

  const Connector1 = () => {
    return (
      <div className="border-[#8EBBE8] hidden lg:flex absolute border-2 rounded-2xl border-dashed w-[700px] -z-10 h-[80px] -top-5  border-t-0 border-l-0 "></div>
    );
  };

  const Connector2 = () => {
    return (
      <div className="border-[#8EBBE8] hidden lg:flex absolute border-2 rounded-2xl border-dashed w-[800px] -z-10 h-[80px] top-28  border-b-0 border-l-0 "></div>
    );
  };

  return (
    <div className="poppins px-5">
      <div className=" lg:flex items-center  max-w-5xl mx-auto ">
        <Image
          width={100}
          height={100}
          className="w-2/3 lg:w-1/2 mx-auto h-auto lg:mx-0"
          src={project}
          alt="projectimg"
        />
        <div className="w-2/3 md:w-2/5 mb-10 mx-auto lg:mx-0 lg:ml-auto">
          <h1 className="text-center md:text-start text-4xl lg:text-5xl my-10">
            Our Services
          </h1>
          <p className=" font-semibold lg:font-bold ">
            Welcome to Shabuj Global Education! We are dedicated to guiding you
            through the exciting journey of studying abroad. Our comprehensive
            range of services is designed to ensure a smooth and successful
            experience for every student. Explore our services below to see how
            we can help you achieve your academic dreams.
          </p>
        </div>
      </div>

      <div className="max-w-5xl z-0    mx-auto  flex flex-col items-center justify-center  gap-10 lg:gap-0">
        {/* first 2 cards */}
        <div className="relative">
          <div className="z-10 mb-10 lg:mb-0">
            <Card circle="" position="" index={0} />
          </div>
          <div className="lg:grid grid-cols-3  -z-10 lg:-mt-56">
            <div className="col-span-2   items-end lg:flex hidden ">
              <Image
                width={100}
                height={100}
                className="w-2/3 h-auto  mx-auto mr-16"
                src={counseling}
                alt="counseling img"
              />
            </div>
            <Card circle={circleimg.src} position="top-center" index={1} />
          </div>

          {/* first bordered card */}
          <Connector2 />
        </div>

        {/* second 2 cards */}
        <div className="relative">
          <div className="z-10 mb-10 lg:mb-0">
            <Card circle={circleimg.src} position="" index={2} />
          </div>
          <div className="lg:grid grid-cols-3  -z-10 lg:-mt-56">
            <div className="col-span-2   items-end lg:flex hidden "></div>
            <Card circle={circleimg.src} position="top-center" index={3} />
          </div>
          {/* second bordered card */}
          <Connector1 />
          <Connector2 />
        </div>

        {/* third 2 cards */}
        <div className="relative">
          <div className="z-10 mb-10 lg:mb-0">
            <Card circle={circleimg.src} position="" index={4} />
          </div>
          <div className="lg:grid grid-cols-3  -z-10 lg:-mt-56">
            <div className="col-span-2   items-end lg:flex hidden "></div>
            <div className="col-span-2   items-end lg:flex hidden ">
              <Image
                width={100}
                height={100}
                className="w-2/5 h-auto  ml-auto  mb-5"
                src={passport}
                alt="passport img"
              />
            </div>
            <Card circle={circleimg.src} position="top-center" index={5} />
          </div>
          <Connector1 />
          <Connector2 />
        </div>

        {/* fourth 2 cards */}
        <div className="relative">
          <div className="z-10 mb-10 lg:mb-0">
            <Card circle={circleimg.src} position="" index={6} />
          </div>
          <div className="lg:grid grid-cols-3  z-20 lg:-mt-56">
            <div className="col-span-2   items-end lg:flex hidden "></div>
            <div className="col-span-2   items-end lg:flex hidden ">
              <Image
                width={100}
                height={100}
                className="w-6/12 z-20 h-auto ml-auto mr-20"
                src={airport}
                alt="airport img"
              />
            </div>
            <Card circle={circleimg.src} position="top-center" index={7} />
          </div>
          <Connector1 />
          <Connector2 />
        </div>

        {/* fifth card */}
        <div className="relative">
          <div className="  mb-10 lg:mb-0">
            <Card circle={circleimg.src} position="" index={8} />
          </div>
          <div className="lg:grid grid-cols-3    lg:-mt-56">
            <div className="col-span-2   items-end lg:flex hidden "></div>
            <div className="col-span-2   items-end lg:flex hidden ">
              <Image
                width={100}
                height={100}
                className="w-6/12 z-10 h-auto hidden ml-auto mr-20"
                src={airport}
                alt="airport img"
              />
            </div>
            <div className="invisible">
              <Card circle="" position="" index={9} />
            </div>
            <Connector1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services_Components;
