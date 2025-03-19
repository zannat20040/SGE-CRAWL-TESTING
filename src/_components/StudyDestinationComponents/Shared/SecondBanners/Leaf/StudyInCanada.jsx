import React from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";

function StudyInCanada({ whyStudyDesc, bgColor, destinationName }) {
  return (
    <div className="bg-[#EFF6FF] px-10 !py-16 md:p-[20px] mx-auto flex items-center justify-center ">
      <div
        style={{ backgroundColor: bgColor }}
        className="container mx-auto p-[10px]  md:p-[20px] px-4  rounded-[20px] relative"
      >
        <motion.img
          initial={{ height: "100px", top: "-25px", left: "-25px" }}
          animate={{ height: "140px", top: 0, left: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          className="h-[100px]  absolute left-[-25px] top-[-25px] canadaleaf z-0 "
          src={"/assets/Canada Page/WhyStudy/image.png"}
        />
        <h1 className="text-[28px]  md:text-[40px] font-[600] text-white text-center">
          {" "}
          Why Study in The {destinationName}?
        </h1>
        <h1 className="text-white text-justify p-[20px] text-[14px]  md:text-[16px] z-10">
          {whyStudyDesc}
        </h1>
      </div>
    </div>
  );
}

export default StudyInCanada;
