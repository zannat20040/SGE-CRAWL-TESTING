"use client";

import { useEffect, useState } from "react";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import BadgeComponent from "./BadgeComponent";
import { Destination } from "../../../../assets/type/interfaces";
import axios from "axios";
import footer_shape from "../../../../../public/assets/Homepage/footer/footer-Shape.webp";
import footer1 from "../../../../../public/assets/Homepage/footer/footer1.webp";
import footer2 from "../../../../../public/assets/Homepage/footer/footer2.webp";
import footer3 from "../../../../../public/assets/Homepage/footer/BritishCouncil_Logo.png";
import logo2 from "../../../../../public/assets/Homepage/footer/logo2.svg";
import vector7 from "../../../../../public/assets/Homepage/footer/vector7.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import OfficeList2 from "@/_components/OfficeList2/OfficeList2";

const Footer = () => {
  const [countries, setCountries] = useState<Destination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const textColor = "text-[#CACACA]";

  useEffect(() => {
    // Fetch data using Axios
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("/json/destination_data.json");
        setCountries(response.data);
      } catch (err) {
        console.error(err);
        // setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className=" ">
      <div>
        <div className="w-full bg-transparent z-50 -mt-[150px] mb-[-1px]">
          <Image
            width={100}
            height={100}
            src={footer_shape}
            className="w-full"
            alt="footer shape"
          />
        </div>
        <div className="bg-[#081831] px-6 relative">
          <div className="footer-1 text-center max-w-[1154px] mx-auto">
            <h2 className="font-poppins lg:text-[21px] text-[16px] text-white mb-4 pt-6 lg:pt-0">
              Our Students are Our Reference
            </h2>
            <Image
              width={100}
              height={100}
              className="mx-auto w-[200px] md:w-[250px] h-auto mb-[22px]"
              src={logo2}
              alt="logo"
            />
          </div>

          <div className="footer-2 leading-[150%] text-[#CACACA] border-t border-white pt-[35px] max-w-[1154px] mx-auto mt-[35px] flex flex-col lg:flex-row lg:gap-[117px]">
            <div className="w-3/4 lg:w-[231px] mx-auto lg:mx-0 text-center lg:text-start">
              <h2 className="mulish-bold text-base mb-4 text-blue-600 ">
                About Shabuj Global Education
              </h2>
              <p className="mulish-regular lg:text-base text-sm">
                Shabuj Global Education (also known as SG Education) is one of
                the BRITISH COUNCIL accredited education service providers in
                the UK. The company has been working since 2010 with great pride
                and service excellence. At Shabuj Global we provide services to
                local and international students for UK University admission.
              </p>
            </div>
            <div className="w-[177px]  mx-auto lg:mx-0 text-center lg:text-start">
              <h2 className="lg:mulish-bold text-blue-600  mulish-semibold text-base mb-4 mt-8 uppercase">
                Study Destinations
              </h2>
              {loading ? (
                <p className="py-4 ">Loading.....</p>
              ) : (
                <ul className="mulish-regular lg:text-base text-sm">
                  {countries?.map((country) => (
                    <li
                      key={country?.destinationName}
                      className="hover:text-blue-600"
                    >
                      <Link
                        // rel="nofollow"
                        href={`/study-destinations/${country?.url}`}
                        className="block w-full"
                      >
                        {country?.destinationName}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-[282px]  mx-auto lg:mx-0 text-center lg:text-start">
              <h2 className="lg:mulish-bold mulish-semibold text-blue-600  text-base mb-4 mt-8 uppercase">
                Services for students
              </h2>
              <ul className="flex-col flex   text-lg">
                <Link
                  className="hover:text-blue-600 text-sm"
                  href={"/personalizedUniversity"}
                >
                  <li>Personalized University Selection</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/applicationAssistance"}
                >
                  <li>Application Assistance </li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/aidGuidance"}
                >
                  <li>Scholarship and Financial Aid Guidance</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/immigrationSupport"}
                >
                  <li> Visa and Immigration Support </li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/travelAssistance"}
                >
                  <li> Pre-Departure and Post-Arrival Assistance </li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/postGraduationAid"}
                >
                  <li> Post-Graduation Support </li>
                </Link>
              </ul>
              <p className="lg:mulish-bold mulish-semibold text-blue-600  text-base mt-3 uppercase">
                Services for partners
              </p>
              <ul className=" my-4 text-lg">
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/admissionProcess"}
                >
                  <li> Seamless Admissions Process</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/studentGuidance"}
                >
                  <li>Expert Student Guidance </li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/globalNetwork"}
                >
                  <li> Access to a Global Network of Universities</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/studentSuccess"}
                >
                  <li> Enhanced Student Success</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/recruitmentSupport"}
                >
                  <li> Marketing and Recruitment Support</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/collaboration"}
                >
                  <li> Long-Term Collaboration</li>
                </Link>
              </ul>
            </div>
            <div className="w-[229px]  mx-auto lg:mx-0 text-center lg:text-start">
              <h2 className="lg:mulish-bold mulish-semibold text-blue-600  text-base mb-4 mt-8 uppercase">
                Company
              </h2>
              <ul className="mulish-regular lg:text-base text-sm">
                <Link href={"/about"}>
                  <li className="hover:text-blue-600">About Us</li>
                </Link>
                <Link href={"/career"}>
                  <li className="hover:text-blue-600">Careers</li>
                </Link>
                <Link href={"/events"}>
                  <li className="hover:text-blue-600">Events</li>
                </Link>
                <Link href={"/blogs"}>
                  <li className="hover:text-blue-600">Blog</li>
                </Link>
                <Link href={"/contact"}>
                  <li className="hover:text-blue-600">Contact Us</li>
                </Link>
              </ul>
              <Link href={"/events"}>
                <p className="lg:mulish-bold mulish-semibold text-blue-600  text-base mt-3 uppercase  pb-3">
                  upcoming events
                </p>
              </Link>
            </div>
          </div>

          <div className=" footer-3 leading-[150%] max-w-[1154px] mx-auto flex lg:flex-row flex-col lg:gap-[114px] border-t border-white justify-center items-center pt-5 lg:pt-0">
            <div className="card-shine-effect-metal p-5 m-2 rounded-2xl mx-auto ">
              <BadgeComponent />
            </div>
            <div className="mx-auto">
              <div className="md:w-[577px] w-full mx-auto   bg-[rgba(255,255,255,0.7)] rounded-2xl text-center mt-[27px] mb-[31px] overflow-hidden">
                <h2 className="px-4 lg:mulish-semibold mulish-bold lg:text-[28px] text-[18px] text-[#081831] leading-[39.2px] pt-[14px] pb-[30px]">
                  UKVI Approved Test Centre for
                </h2>
                <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:gap-[41px]">
                  <Link href="/comingSoon">
                    <Image
                      width={100}
                      height={100}
                      src={footer1}
                      className="w-[125px] max-w-full object-contain pb-8"
                      alt="footer1"
                    />
                  </Link>
                  <Link href="/comingSoon">
                    <Image
                      width={100}
                      height={100}
                      src={footer2}
                      className="w-[166px] max-w-full object-contain pb-8"
                      alt="footer2"
                    />
                  </Link>
                  <Link href="/comingSoon">
                    <Image
                      width={100}
                      height={100}
                      src={footer3}
                      className="w-[166px] max-w-full object-contain pb-8"
                      alt="footer2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white max-w-[1154px] mx-auto">
            <h2 className="lg:mulish-bold mulish-regular uppercase lg:text-lg text-base text-center text-[#CACACA] mb-6 mt-4">
              Our offices
            </h2>
            {/* <OfficesList textColor={textColor}/> */}
            <OfficeList2 textColor={textColor} />
          </div>
          <div className="footer-4 max-w-[1154px] relative z-10 mx-auto pb-6 lg:pb-0  flex flex-col lg:flex-row justify-between items-center border-t border-white">
            <div className="flex gap-[26px] mt-[21px] lg:justify-start justify-center lg:border-none border-b border-white lg:w-1/3 w-full pb-[11px]">
              <Link
                rel="nofollow noopener noreferrer"
                href="https://www.facebook.com/ShabujGlobaleducationuk/"
                target="_blank"
              >
                <FaFacebookF className="hover:bg-blue-500 text-4xl text-white p-1 rounded-md" />
              </Link>
              <Link
                rel="nofollow noopener noreferrer"
                href="https://www.instagram.com/shabujglobaleducation/"
                target="_blank"
              >
                <FaInstagram className="hover:bg-blue-500 text-4xl text-white p-1 rounded-md" />
              </Link>
              <Link
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEkbZ14xeAt8wAAAZEXbnaoJWt-ogVrPCWsB3Ufw3gb3wrzBSE3XcNHequ5lpil4I54Crsk0qaoWcyHvqLrTdX2geridADLkgc3_cGAuBn7zb4v-iR2dBdszRH3_wEnsRkelIE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fshabuj-global-education%2F"
                target="_blank"
              >
                <FaLinkedinIn className="hover:bg-blue-500 text-4xl text-white p-1 rounded-md" />
              </Link>
              <Link
                rel="nofollow noopener noreferrer"
                href="https://www.youtube.com/@shabujglobaleducation1568"
                target="_blank"
              >
                <FaYoutube className="hover:bg-blue-500 text-4xl text-white p-1 rounded-md" />
              </Link>
            </div>
            <div className="py-3 lg:py-7">
              <div className="flex lg:gap-[18px] flex-col items-center lg:flex-row text-center">
                <p className="mulish-regular text-[14px] text-[#CACACA] mt-6 lg:mt-0 px-20 lg:px-0">
                  Copyright © 2025, All Right Reserved{" "}
                  <Link href="/">
                    <span className="underline">Shabuj Global Education</span>
                  </Link>
                </p>
                <Link href="/privacy">
                  <p className="mulish-regular text-[14px] text-[#CACACA]">
                    Privacy Policy
                  </p>
                </Link>
              </div>
              <h2 className="mulish-regular text-[14px]  text-[#CACACA] lg:text-end text-center mt-4 lg:mt-0 px-10">
                {" "}
                The information on this website may not be accurate or complete
              </h2>
            </div>
          </div>
          <div className="relative">
            <Image
              width={100}
              height={100}
              src={vector7}
              alt="city bg"
              className="absolute h-auto w-auto bottom-0 hidden left-0 lg:block mx-auto right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
