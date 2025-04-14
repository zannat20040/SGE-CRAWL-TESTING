import "./Banner.css";
import EnquireModal from "../Banner/EnquireModal";
import ApplicationModal from "../Banner/ApplicationModal";

const Banner = () => {
  const heading = "DREAM BIG STUDY ABROAD.";
  const animatedLetters = heading.split("");

  return (
    <div className="relative z-[2]">
      {/* Banner background and content container */}
      <div className="section">
        <div className="section-bg" />

        <div className="section-content pt-[31px] lg:pt-[93px] lg:pb-[206px] pb-[70px] max-w-[1155px] mx-auto">
          <div className="text-center lg:text-left lg:pl-10 w-2/3 px-2 lg:ml-0 mx-auto">
            {/* Main Heading */}
            <h2 className="text-[#00399f] tracking-tight text-[45px] lg:text-[90px] font-bold leading-[130%] lg:leading-[110px]">
              Start Your Path to Global Education
            </h2>

            {/* Subheading */}
            <p className="text-[#081831] font-normal text-[14px] lg:text-[21px] leading-[160%] pt-[14px] lg:pb-[61px] pb-[19px] lg:pl-6">
              We take pride in our ability to help students achieve their academic goals and succeed in life.
            </p>

            {/* CTA Buttons */}
            <div className="buttons-group-container">
              <div className="buttons-group">
                <EnquireModal />
                <ApplicationModal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative spinning circular text */}
      <div className="hidden lg:flex justify-center items-center max-w-[1155px] mx-auto">
        <div className="circle relative w-[200px] h-[200px]">
          {/* Bouncing Arrow Icon */}
          <div className="icon">
            <svg
              width="56"
              height="56"
              className="animate-bounce"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3333 9.33333C30.3333 8.04467 29.2887 7 28 7C26.7113 7 25.6667 8.04467 25.6667 9.33333V42.2002L14.4832 31.0168C13.572 30.1055 12.0946 30.1055 11.1834 31.0168C10.2722 31.928 10.2722 33.4054 11.1834 34.3166L24.7002 47.8333C26.5226 49.6558 29.4774 49.6558 31.2998 47.8333L44.8166 34.3166C45.7278 33.4054 45.7278 31.928 44.8166 31.0168C43.9054 30.1055 42.428 30.1055 41.5168 31.0168L30.3333 42.2002V9.33333Z"
                fill="#35383F"
              />
            </svg>
          </div>

          {/* Circular Text Animation */}
          <div className="text-two">
            <p className="poppins-semibold">
              {animatedLetters.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="letter"
                    style={{
                      transform: `rotate(${index * 15.5}deg)`,
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
