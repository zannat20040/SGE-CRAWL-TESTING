"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BlogResponsiveBanner() {
  const [width, setWidth] = useState<number>(1024);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div
      className={`${
        width >= 1024 && width <= 1300
          ? "max-w-4xl ml-auto"
          : width > 1300
          ? "max-w-6xl mx-auto"
          : "max-w-4xl"
      }  flex flex-col lg:flex-row items-center   relative`}
    >
      <motion.div
        initial={{ x: "-200px" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={`${
          width >= 1024 && width <= 1300
            ? "max-w-xl -left-28"
            : width > 1300
            ? "max-w-2xl"
            : "max-w-xs"
        }  lg:absolute z-20   overflow-hidden  px-5`}
      >
        <div className="  bg-white  shadow-lg px-5 py-10 rounded-2xl">
          <div className="text-white font-light mb-5 bg-[#ff8156] w-fit px-2 rounded-md">
            UK University
          </div>
          <h1 className="text-2xl lg:text-5xl mb-2 lg:mb-5 font-semibold">
            Choosing the Right UK University and Course: Factor to Consider
          </h1>
          <p className="mb-2 lg:mb-10 font-semibold text-lg">
            Embarking on higher education in the UK is a crucial journey that
            sets the stage for your future career and personal development...
          </p>
          <Link href={"/comingSoon"}>
            <button className="bg-[#2563eb] mt-5 text-white px-4 py-2 rounded-full">
              Continue Reading
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "200px" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:absolute hidden lg:flex   justify-end z-10 px-5 -right-0"
      >
        <Image
          width={100}
          height={100}
          className=" w-10/12 mx-auto lg:mx-0"
          src="/assets/Blog/Rectangle 2.webp"
          alt=""
        />
      </motion.div>
    </div>
  );
}
