import React, { useEffect } from "react";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import Image from "next/image";

function HeroSection({ bannerSubtitle, destinationName }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className=" pt-10 rounded-3xl relative h-[300px] lg:h-[730px] overflow-hidden group w-full ">
      <div className="flex items-center justify-between h">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 50 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          // data-aos="fade-right"
          className=" layer1"
        >
          <Image
                height={100}
                width={100}
            className="w-[800px] object-contain mt-[-200px] md:mt-[0px]  md:w-full"
            src={'/assets/Canada Page/Banner/layer1bg1.png'}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -50 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          data-aos="fade-left"
          className=" layer2"
        >
          <Image
                height={100}
                width={100}
            className="w-[800px] object-contain mt-[-200px] md:mt-[0px]   md:w-full"
            src={'/assets/Canada Page/Banner/layer1bg2.png'}
            alt=""
          />
        </motion.div>
      </div>
      <div data-aos="fade-up" className="hero-image layer3">
        <Image
          width={100}
          height={100}
          className="w-full h-auto md:h-screen object-contain md:object-fill mt-[-100px] md:mt-0"
          src={'/assets/Canada Page/Banner/2ndlayerImage.png'}
          alt=""
        />
      </div>
      <div data-aos="fade-up" className="hero-image layer4">
      <Image
        width={100}
        height={100}
        className="w-full h-auto md:h-screen object-contain md:object-fill mt-[-100px] md:mt-0"
        src={'/assets/Canada Page/Banner/layer3Bg.png'}
        alt=""
      />
      </div>
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        data-aos="fade-up"
        className="hero-image layer5"
      >
        <Image
  width={100}
  height={100}
  className="w-full h-auto md:h-screen object-contain md:object-fill mt-[-100px] md:mt-0"
  src={'/assets/Canada Page/Banner/layer4img.png'}
  alt=""
/>

      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        data-aos="fade-up"
        className="hero-image layer6"
      >
        <h1 className="text-[30px] md:text-[64px] font-[700] text-[#FF1A1A] text-center">
          Study in {destinationName}
        </h1>
        <h1 className="text[12px] md:text-[18px] text-center text-[#191F2C]">
          {bannerSubtitle}
        </h1>
      </motion.div>
    </div>
  );
}

export default HeroSection;
