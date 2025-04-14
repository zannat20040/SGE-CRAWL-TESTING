import Link from "next/link";
import Image from "next/image";
import "./Home_Tab.css";

import studentIcon from "/public/assets/Homepage/For-Students-Icon.png";
import partnerIcon from "/public/assets/Homepage/For-Partners-Icon.png";

const tabData = [
  {
    id: "students",
    label: "For Students",
    heading: "Get complete guidance in your study abroad journey from start to finish",
    description:
      "Shabuj Global Education helps you with Course & University Selection, Interview and Test Preparation, Visa Application and Admission and more – so you can join your dream university with ease!",
    btnText: "Start Now",
    imgSrc: studentIcon,
    alt: "Students Icon",
    color: "text-[#2563EB]",
  },
  {
    id: "partners",
    label: "For Partners",
    heading: "Wow your students with Shabuj Global Education's trusted admission process",
    description:
      "No more lack of trust and transparency – we treat your business as our own. With SGE’s 1500+ strong university network, experienced counsellors, and dedicated customer support, you can just focus on increasing your student reach and leave the processing part to us!",
    btnText: "Explore More",
    imgSrc: partnerIcon,
    alt: "Partners Icon",
    color: "text-[#3560FF]",
  },
];

const Home_Tab = () => {
  return (
    <section className="tabs-area !transform-none lg:pt-[175px] max-w-[1154px] mx-auto">
      {tabData.map((tab, index) => (
        <div key={tab.id} className="single-tab px-4 lg:px-10">
          <input
            className="div-inputs"
            id={tab.id}
            type="radio"
            name="tab"
            defaultChecked={index === 0}
          />
          <label
            className={`tab-btn inter-bold text-[20px] rounded-[32px] py-[10px] px-[120px] bg-white ${
              index === 0 ? "text-[#004ACB]" : "text-[#2563EB]"
            } mr-[22px] label`}
            htmlFor={tab.id}
          >
            {tab.label}
          </label>

          <div className="tab-content color_div text-center lg:text-left pt-[50px] md:pt-[150px] lg:pt-0 mb-[56px]">
            <h3 className={`poppins-semibold text-[28px] ${tab.color} mb-[14px]`}>
              {tab.label}
            </h3>

            <div className="flex flex-col lg:flex-row justify-between gap-[28px] items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h2 className="poppins-semibold text-[20px] lg:text-[38px] text-[#081831] leading-[130%] max-w-lg ">
                  {tab.heading}
                </h2>
                <p className="mulish-regular text-[12px] lg:text-[16px] text-[#1F1F1F] pt-[14px] max-w-lg ">
                  {tab.description}
                </p>
                <Link href="/comingSoon">
                  <button className="bg-[#2563EB] hover:bg-[#126def] mulish-regular lg:text-[21px] text-[14px] text-white rounded-[32px] lg:px-[85px] px-10 lg:py-2 py-[8px] mt-6 mx-auto lg:mx-0">
                    {tab.btnText}
                  </button>
                </Link>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 pt-6 md:pt-10 lg:pt-0">
                <Image
                  src={tab.imgSrc}
                  alt={tab.alt}
                  width={100}
                  height={100}
                  className="mx-auto w-[200px] md:w-[300px] lg:w-[447px] aspect-[1/1]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home_Tab;
