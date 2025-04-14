"use client";

import Image from "next/image";
import Link from "next/link";
import BadgeComponent from "./BadgeComponent";
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
import FooterCountries from "./FooterCountries";

const Footer = () => {
  const textColor = "text-[#CACACA]";

  const studentServices = [
    {
      href: "/personalizedUniversity",
      label: "Personalized University Selection",
    },
    { href: "/applicationAssistance", label: "Application Assistance" },
    { href: "/aidGuidance", label: "Scholarship and Financial Aid Guidance" },
    { href: "/immigrationSupport", label: "Visa and Immigration Support" },
    {
      href: "/travelAssistance",
      label: "Pre-Departure and Post-Arrival Assistance",
    },
    { href: "/postGraduationAid", label: "Post-Graduation Support" },
  ];

  const partnerServices = [
    { href: "/admissionProcess", label: "Seamless Admissions Process" },
    { href: "/studentGuidance", label: "Expert Student Guidance" },
    {
      href: "/globalNetwork",
      label: "Access to a Global Network of Universities",
    },
    { href: "/studentSuccess", label: "Enhanced Student Success" },
    { href: "/recruitmentSupport", label: "Marketing and Recruitment Support" },
    { href: "/collaboration", label: "Long-Term Collaboration" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/career", label: "Careers" },
    { href: "/events", label: "Events" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/ShabujGlobaleducationuk/",
      icon: FaFacebookF,
    },
    {
      href: "https://www.instagram.com/shabujglobaleducation/",
      icon: FaInstagram,
    },
    {
      href: "https://www.linkedin.com/company/shabuj-global-education/",
      icon: FaLinkedinIn,
    },
    {
      href: "https://www.youtube.com/@shabujglobaleducation1568",
      icon: FaYoutube,
    },
  ];

  const partners = [
    { src: footer1, alt: "footer1", width: 125, height: 80 },
    { src: footer2, alt: "footer2", width: 166, height: 80 },
    { src: footer3, alt: "footer3", width: 166, height: 80 },
  ];

  return (
    <div>
      <div className="w-full bg-transparent z-50 -mt-[150px] mb-[-1px]">
        <Image
          src={footer_shape}
          alt="footer shape"
          width={1440}
          height={100}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="bg-[#081831] px-6 relative">
        <div className="footer-1 text-center max-w-[1154px] mx-auto">
          <h2 className="font-poppins lg:text-[21px] text-[16px] text-white mb-4 pt-6 lg:pt-0">
            Our Students are Our Reference
          </h2>
          <Image
            src={logo2}
            alt="logo"
            width={250}
            height={80}
            className="mx-auto w-[200px] md:w-[250px] h-auto mb-[22px]"
          />
        </div>

        <div className="footer-2 leading-[150%] text-[#CACACA] border-t border-white pt-[35px] max-w-[1154px] mx-auto mt-[35px] flex flex-col lg:flex-row lg:gap-[117px]">
          <div className="w-3/4 lg:w-[231px] mx-auto lg:mx-0 text-center lg:text-start">
            <h2 className="mulish-bold text-base mb-4 text-blue-600">
              About Shabuj Global Education
            </h2>
            <p className="text-sm lg:text-base">
              Shabuj Global Education (also known as SG Education) is one of the
              BRITISH COUNCIL accredited education service providers in the UK.
              We provide services to local and international students for UK
              University admission since 2010.
            </p>
          </div>

          <div className="w-[177px] mx-auto lg:mx-0 text-center lg:text-start">
            <h2 className="lg:mulish-bold text-blue-600  mulish-semibold text-base mb-4 mt-8 uppercase">
              Study Destinations
            </h2>
            <FooterCountries />
          </div>

          <div className="w-[282px] mx-auto lg:mx-0 text-center lg:text-start">
            <h2 className="lg:mulish-bold mulish-semibold text-blue-600  text-base mb-4 mt-8 uppercase">
              Services for students
            </h2>
            <ul className="text-sm space-y-1">
              {studentServices.map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-blue-600">
                  <li>{label}</li>
                </Link>
              ))}
            </ul>
            <h3 className="lg:mulish-bold mulish-semibold text-blue-600  text-base mt-3 uppercase">
              Services for partners
            </h3>
            <ul className="text-sm space-y-1 mt-2">
              {partnerServices.map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-blue-600">
                  <li>{label}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="w-[229px] mx-auto lg:mx-0 text-center lg:text-start">
            <h2 className="lg:mulish-bold mulish-semibold text-blue-600  text-base mb-4 mt-8 uppercase">
              Company
            </h2>
            <ul className="text-sm space-y-1">
              {companyLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-blue-600">
                  <li>{label}</li>
                </Link>
              ))}
            </ul>
            <Link href="/events">
              <p className="lg:mulish-bold mulish-semibold text-blue-600  text-base mt-3 uppercase  pb-3">
                Upcoming Events
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-4 footer-3 leading-[150%] max-w-[1154px] mx-auto flex lg:flex-row flex-col lg:gap-[114px] border-t border-white justify-center items-center pt-5 lg:pt-0">
          <div className="card-shine-effect-metal p-5 m-2 rounded-2xl mx-auto  bg-[#B6B6B6] ">
            <BadgeComponent />
          </div>

          <div className="mx-auto">
            <div className="md:w-[577px] w-full mx-auto   bg-[rgba(255,255,255,0.7)] rounded-2xl text-center mt-[27px] mb-[31px] overflow-hidden p-[18px] ">
              <h2 className="lg:mulish-semibold mulish-bold lg:text-[28px] text-[18px] text-[#081831] leading-[39.2px] pb-[30px]">
                UKVI Approved Test Centre for
              </h2>
              <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:gap-[41px]">
                {partners.map(({ src, alt, width, height }, i) => (
                  <Link key={i} href="/comingSoon">
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white max-w-[1154px] mx-auto">
          <h2 className="text-[#CACACA] text-center text-base lg:text-lg mt-4 mb-6 uppercase">
            Our offices
          </h2>
          <OfficeList2 textColor={textColor} />
        </div>

        <div className="footer-4 max-w-[1154px] mx-auto pb-6 lg:pb-0 flex flex-col lg:flex-row justify-between items-center border-t border-white">
          <div className="flex gap-[26px] mt-[21px] lg:justify-start justify-center border-b lg:border-none pb-[11px]">
            {socialLinks.map(({ href, icon: Icon }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Icon className="hover:bg-blue-500 text-4xl text-white p-1 rounded-md" />
              </Link>
            ))}
          </div>

          <div className="py-3 lg:py-7 text-center">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <p className="text-[#CACACA] text-[14px]">
                © 2025, All Right Reserved{" "}
                <Link href="/">
                  <span className="underline">Shabuj Global Education</span>
                </Link>
              </p>
              <Link href="/privacy">
                <p className="text-[#CACACA] text-[14px]">Privacy Policy</p>
              </Link>
            </div>
            <h2 className="text-[#CACACA] text-[14px] mt-4">
              The information on this website may not be accurate or complete
            </h2>
          </div>
        </div>

        <div className="relative">
          <Image
            src={vector7}
            alt="city bg"
            width={1200}
            height={200}
            className="absolute hidden lg:block left-0 right-0 mx-auto bottom-0 w-auto h-auto"
          />
          F
        </div>
      </div>
    </div>
  );
};

export default Footer;
