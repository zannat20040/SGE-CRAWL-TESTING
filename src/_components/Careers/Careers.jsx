"use client";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import BangladeshCareer from "@/_components/AboutUs/Career/BangleshCareer";
import UkCareer from "@/_components/AboutUs/Career/UkCareer";
import "@/_components/Home/Banner/Banner.css";

export default function Careers() {
  const BangladeshJob = [
    {
      title: "Senior Recruitment Manager",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Dhaka",
      description: `With a minimum of 3 years' experience, you will streamline the recruitment process, working towards set targets, and devising effective strategies to attract top talent in the educational sector.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to `,
    },
    {
      title: "Senior Recruitment Manager",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Chattogram",
      description: `In this target-oriented role, you will use your experience to develop effective recruitment strategies, aiming to attract and retain the best talent in the educational sector in Chattogram.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to`,
    },
    {
      title: "Destination Manager Australia",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Dhaka",
      description: `Are you an Australian graduate with an understanding of the Australian education system? In this role, you will advise students on their journey to studying in Australia, using your first-hand knowledge to guide them through the process.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to `,
    },
    {
      title: "Destination Manager Canada",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Dhaka",
      description: `As a Canadian graduate, your role will be to assist students with their transition to studying in Canada. Your knowledge of the Canadian education system will be invaluable in providing guidance and advice to students.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to `,
    },
    {
      title: "Destination Manager UK",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Dhaka",
      description: `UK graduates, we need your expertise. In this role, you will advise students on their educational journey to the UK. Your understanding of the UK education system will be vital in guiding students to a successful transition.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to `,
    },
    {
      title: "Digital Marketing Executive",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@hsedu.co.uk",
      location: "Not specified",
      description: `We are seeking a skilled and experienced Digital Marketing Executive to join our team. As a Digital Marketing Executive, you will be responsible for managing and optimizing advertising campaigns on Facebook and Google platforms.`,
      cvInstructions:
        "To apply, send your CV and a brief cover letter introducing ourself and the role you are applying for to",
    },
  ];

  const UkJobs = [
    {
      title: "Senior Student Recruitment Manager",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Not specified",
      description: `Drive and manage our global student recruitment activities. Your expertise will drive student recruitment and shape strategies to attract the brightest talent from around the world. This target-driven role requires a deep understanding of international education systems and excellent networking skills.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to hrm@shabujglobal.com.`,
    },
    {
      title: "Global Social Media Manager",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Not specified",
      description: `Take the reins of our global social media accounts. Your primary responsibility will be to create engaging content, manage and grow our online presence. Candidates should have a strong understanding of global market trends and proven experience managing multiple platforms.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to hrm@shabujglobal.com.`,
    },
    {
      title: "Regional Manager - UK International Students",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Not specified",
      description: `Steer the recruitment and admissions processes for international students based in the UK. You'll serve as the crucial link between the students and Shabuj Global Education, ensuring a smooth transition from applicant to enrolled student.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to hrm@shabujglobal.com.`,
    },
    {
      title: "Regional Manager - EU Students",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Not specified",
      description: `Lead our outreach to both UK-based and overseas EU students. A keen understanding of European education systems and an ability to communicate effectively across cultures are vital in this role.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to hrm@shabujglobal.com.`,
    },
    {
      title: "Student Liaison Officer",
      jobType: "fulltime",
      weekdays: "Monday to Friday",
      salary: "negotiable",
      mail: "hrm@shabujglobal.com",
      location: "Not specified",
      description: `Provide support to our students and team by aiding the progression of the student pipeline. You'll be instrumental in smoothing the journey from prospect to student, ensuring that everyone is informed, engaged, and ready for the next step.`,
      cvInstructions: `To apply, send your CV and a brief cover letter introducing yourself and the role you are applying for to hrm@shabujglobal.com.`,
    },
  ];

  const data = [
    {
      label: "Bangladesh based Job Openings",
      value: "Bangladesh",
      desc: <BangladeshCareer BangladeshJob={BangladeshJob} />,
    },
    {
      label: "UK based Job Openings",
      value: "UK",
      desc: <UkCareer UkJobs={UkJobs} />,
    },
  ];

  const text = "EMPOWER YOUR CAREER .";
  const Letter = text.split("");

  return (
    <div className="bg-[#EFF6FF]">
      {/* banner */}
      <div className="relative z-[2]">
        <div className="section">
          <div className="section-bg"></div>
          <div className="section-content pt-[31px] lg:pt-[93px] lg:pb-[206px] pb-[70px] max-w-[1155px] mx-auto px-5">
            <div className="text-center lg:text-left lg:pl-10">
              <h2 className="text-[#00399f] text-center tracking-tight lg:text-left text-[45px] lg:text-[90px] font-bold lg:leading-[110px] leading-[130%]">
                Launch Your Career Journey{" "}
              </h2>
              <p className="font-normal lg:text-left text-center text-[14px] leading-[160%] lg:text-[21px] text-[#081831]   pt-[14px] lg:pb-[61px] pb-[19px]">
                We take pride in our achievements and the accolades we have
                received over the years.
                <br></br> Each award reflects our commitment to excellence,
                innovation, and dedication to our community.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center max-w-[1155px] mx-auto">
          <div className="circle">
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
            <div className="text-two">
              <p className="poppins-semibold">
                {Letter.map((item, index) => {
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

      {/* tab section */}
      <div className=" py-14 ">
        <div className="lg:mt-24  max-w-6xl mx-auto px-5   ">
          <Tabs
            value="Bangladesh"
            orientation="vertical"
            className="grid grid-cols-1  lg:grid-cols-5 gap-5 "
          >
            <TabsHeader className="w-full bg-gray-200 p-4">
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className=" lg:col-span-4">
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="py-0">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>

      <div className="pb-48"></div>
    </div>
  );
}
