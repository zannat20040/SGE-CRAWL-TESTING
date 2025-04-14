import React from "react";
import Marquee from "react-fast-marquee";


export default function MarqueeBanner() {
  // Array of promotional messages
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

  return (
    <Marquee pauseOnHover autoFill direction="left" speed={150}>
      {skills.map((skill, index) => (
        <div className="flex items-center" key={index}>
          {/* Scrolling message text */}
          <p className="text-3xl lg:text-5xl text-black py-2">{skill}</p>

          {/* Decorative icon */}
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4"
          >
            <path
              d="M16.6783 0.842455L21.9105 12.9256L34.4036 17.0847L22.3205 22.3169L18.1613 34.8101L12.9292 22.727L0.435988 18.5678L12.5191 13.3356L16.6783 0.842455Z"
              fill="#15C5CE"
            />
          </svg>
        </div>
      ))}
    </Marquee>
  );
}
