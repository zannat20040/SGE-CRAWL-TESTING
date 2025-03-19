'use client'
import React from "react";
import WhyMay from './WhyMay'
import Universities from './Universities'
import PopularCourses from './PopularCourses'
import EligibilityRequirements from './EligibilityRequirements'
import ApplicationTimeline from './ApplicationTimeline'
import DocumentsAndHowToApply from './DocumentsAndHowToApply'
import FAQSection from './FAQSection'
const Navbar = () => {
  const sections = [
    { id: "why-september-intake", label: "WHY SEPTEMBER INTAKE" },
    { id: "top-universities", label: "TOP UNIVERSITIES" },
    { id: "popular-courses", label: "POPULAR COURSES" },
    { id: "eligibility", label: "ELIGIBILITY" },
    { id: "timeline", label: "TIMELINE" },
    { id: "documents-required", label: "DOCUMENTS REQUIRED" }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="overflow-x-auto">
          <ul className="flex justify-center items-center gap-4 px-4 py-2 min-w-max border-b-2 border-gray-200">
            {sections.map((section) => (
              <li
                key={section.id}
                className="whitespace-nowrap px-4 py-2 cursor-pointer text-gray-600 hover:text-blue-800 hover:underline"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-10" id="why-september-intake" >
        <WhyMay />
      </div>
      <div className="pt-10" id="top-universities" >
        <Universities />
      </div>
      <div className="pt-10" id="popular-courses" >
        <PopularCourses />
      </div>
      <div className="pt-10" id="eligibility" >
        <EligibilityRequirements />
      </div>
      <div className="pt-10" id="timeline" >
        <ApplicationTimeline />
      </div>
      <div className="pt-10" id="documents-required" >
        <DocumentsAndHowToApply />
      </div>
      <FAQSection/>
    </div>
  );
};

export default Navbar;
