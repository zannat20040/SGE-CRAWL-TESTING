"use client";
// import star from '../../assets/Star 3.png'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const CoreStrength = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });
  const counterStyle = "text-4xl  md:text-5xl text-center";
  const skills = [
    "Connecting Global Talent with Top Universities Worldwide Since 2010!",
    "Global Reach, Local Expertise – Shaping Education Beyond Borders",
    "Free UK University Guidance with 100% Satisfaction",
    "We've got you covered with access to most Russell Group universities in the UK!",
    "We've got you covered with access to top U.S.A, Australia, Canada universities!",
    "From Admission to Visa – Simplifying Your U.S. University Journey!",
    "Making UK Education Dreams Come True – Free Guidance Since 2010!",
    "Excellence in UK Admissions – British Council Accredited and Student-Focused!",
    "Your Gateway to Australian Education – Free Admission Guidance!",
    "Experience Canada’s Best Universities with Expert Support!",
  ];
  const counterDatas = [
    {
      img: 'assets/Homepage/our-core-strength/vector1.webp',
      number: 21,
      text: "Global Offices",
    },
    {
      img: 'assets/Homepage/our-core-strength/vector2.webp',
      number: 100,
      text: "UK Education Fair",
    },
    {
      img: 'assets/Homepage/our-core-strength/vector3.webp',
      number: 100000,
      text: "Courses Offered",
    },
    {
      img: 'assets/Homepage/our-core-strength/vector4.webp',
      number: 370,
      text: "Colleagues",
    },
    {
      img: 'assets/Homepage/our-core-strength/vector5.webp',
      number: 250,
      text: "University Partners",
    },
    {
      img:'assets/Homepage/our-core-strength/vector6.webp',
      number: 153000,
      text: "Student Served",
    },
  ];
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="mt-8 ">
      <div
        style={{
          backgroundImage: `url('/assets/Homepage/City BG.svg')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
        className="lg:py-32 poppins"
      >
        <div
          className="    max-w-7xl mx-auto rounded-3xl "
          style={{
            background:
              "linear-gradient(124deg, rgba(49,135,252,1) 39%, rgba(5,34,230,1) 100%) ",
          }}
        >
          <div className="rounded-2xl  relative  ">
            <div className="lg:flex  flex-col-reverse lg:flex-row-reverse ">
              <div className="  lg:mt-32 lg:w-1/2 text-center lg:py-0 py-10 mx-auto  bg-clip-text lg:inline-block text-transparent text-6xl font-bold">
                <h1 className="text-gradient poppins-bold pb-2">
                  Our Core Strength
                </h1>
              </div>
              <Image
                width={100}
                height={100}
                className=" lg:mt-[-80px] lg:p-[10px] w-1/2 mx-auto lg:w-fit"
                src="/assets/Homepage/Core Strength Icon.svg"
                alt="strength icon"
              />
            </div>
            <div
              style={{
                background:
                  "linear-gradient(183deg, rgba(0,0,0,0) 30%, rgba(6,45,79,1) 90%)",
              }}
              className="lg:absolute rounded-lg bottom-0 flex justify-between w-full  "
            >
              <div className="grid grid-cols-2 md:grid-cols-3  text-center lg:grid-cols-6 my-5 px-10   text-white md:gap-10 gap-2    lg:w-full lg:my-10 mx-auto  font-bold  ">
                {counterDatas.map((counter, index) => (
                  <div
                    key={index}
                    className=" m-0 text-center flex flex-col items-center justify-between "
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-auto h-auto"
                      src={counter?.img}
                      alt={counter?.text}
                    />
                    <div className={counterStyle} ref={ref}>
                      {" "}
                      {isVisible && (
                        <CountUp end={counter?.number} duration={2.5} />
                      )}
                      {index !== 0 && "+"}
                    </div>
                    <h2 className="text-xs lg:text-base font-light    ">
                      {counter?.text}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inter bg-[#4BA1FF] py-10 rounded-tl-badge rounded-br-badge lg:my-0 my-10 overflow-hidden">
        <div className="bg-white -rotate-2 ">
          <Marquee pauseOnHover autoFill direction="left" speed={150}>
            {skills.map((skill, index) => (
              <div className="flex items-center" key={index}>
                <p className="text-3xl lg:text-5xl text-black py-2">{skill}</p>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6783 0.842455L21.9105 12.9256L34.4036 17.0847L22.3205 22.3169L18.1613 34.8101L12.9292 22.727L0.435988 18.5678L12.5191 13.3356L16.6783 0.842455Z"
                    fill="#15C5CE"
                  />
                </svg>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default CoreStrength;
