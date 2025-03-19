"use client";
import React, { useEffect, useState } from "react";
import { Destination } from "@/assets/type/interfaces";
import Banner3 from "@/_components/StudyDestinationComponents/Shared/Banners/Banner3/Banner3";
import Banner1 from "@/_components/StudyDestinationComponents/Shared/Banners/Banner1/Banner1";
import Banner2 from "@/_components/StudyDestinationComponents/Shared/Banners/Banner2/Banner2";
import Banner4 from "@/_components/StudyDestinationComponents/Shared/Banners/Banner4/Banner4";
import Banner5 from "@/_components/StudyDestinationComponents/Shared/Banners/Banner5/HeroSection";
import Car from "@/_components/StudyDestinationComponents/Shared/SecondBanners/Car/Car";
import Tower from "@/_components/StudyDestinationComponents/Shared/SecondBanners/Tower/Tower";
import Germany from "@/_components/StudyDestinationComponents/Shared/SecondBanners/Germany/Germany";
import Statue from "@/_components/StudyDestinationComponents/Shared/SecondBanners/Statue/Statue";
import Leaf from "@/_components/StudyDestinationComponents/Shared/SecondBanners/Leaf/StudyInCanada";
import QuickFacts from "@/_components/StudyDestinationComponents/Shared/Components/QuickFacts/QuickFacts";
import Tabs from "@/_components/StudyDestinationComponents/Shared/Components/Tabs/Tabs";
import AnimatedText from "@/_components/StudyDestinationComponents/Shared/Components/AnimatedText/AnimatedText";
import RequirementCard from "@/_components/StudyDestinationComponents/Shared/Components/RequirementCard/RequirementCard";
import Exams from "@/_components/StudyDestinationComponents/Shared/Components/Exams/Exams";
import GuidanceBanner from "@/_components/StudyDestinationComponents/Shared/Guidence/GuidenceBanner";
import University_Required_Docs from "@/_components/StudyDestinationComponents/Shared/Components/UniversityRequiredDocs/University_Required_Docs";
import Doc1 from "@/_components/StudyDestinationComponents/Australia/SVG/Doc1";
import Doc2 from "@/_components/StudyDestinationComponents/Australia/SVG/Doc2";
import Doc3 from "@/_components/StudyDestinationComponents/Australia/SVG/Doc3";
import FAQ from "@/_components/StudyDestinationComponents/Shared/Components/FAQ/FAQ";
import FAQUK from "@/_components/StudyDestinationComponents/UK/SVG/FAQUK";
import Counselor from "@/_components/StudyDestinationComponents/Shared/Components/Counselor/Counselor";
import UniversityCards from "@/_components/StudyDestinationComponents/Shared/Components/UniversityCards/UniversityCards.jsx";
import axios from "axios";
import Link from "next/link";

interface DestinationDetailsProps {
  url: string;
  data: Destination;
}

interface University {
  logo: string | null;
  Name: string | null;
  Overview: string | null;
  rank: string | null;
  location: string | null;
  established: string | null;
  History: string | null;
  "Ranking & Achievement": string | null;
  Services: string | null;
  "Department & Faculty": string | null;
  Accommodation: string | null;
  Fee: string | null;
  "international student": string | null;
  country: string | null;
  courses: string | null;
}

const DestinationDetails: React.FC<DestinationDetailsProps> = ({
  url,
  data,
}) => {
  const [universities, setUniversities] = useState<University[]>([]);

  // Fetch the universities once the component is mounted
  //this causes error in the production 
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/json/ukUni.json`
        );
        const filteredUniversities = response.data.filter(
          (uni: University) =>
            uni.country?.toLowerCase() === data.destinationName.toLowerCase()
        );
        setUniversities(filteredUniversities);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, [data.destinationName]); // Add dependency for data.destinationName

  // May intake list
  const mayIntake = ["UK"];
  // banner country list
  const banner1Countries = ["UK", "UAE", "New Zealand", "France", "Cyprus"];
  const banner3Countries = [
    "West-Indies",
    "Switzerland",
    "Germany",
    "Georgia",
    "Canada",
  ];

  // why study here country list
  const whyStudyHereCountries1 = [
    "Switzerland",
    "New Zealand",
    "France",
    "Cyprus",
    "Australia",
  ];
  const whyStudyHereCountries2 = [
    "UAE",
    "UK",
    "Georgia",
    "Finland",
    "Canada",
  ];
  const whyStudyHereCountries3 = ["USA"];

  return (
    <div>
      <div>
        {universities?.map((university, index) => (
          <Link
            href={`/study-destinations/${url}/${university?.Name?.toLowerCase().replace(
              / /g,
              "-"
            )}`}
            key={index}
            className=" hidden"
          >
            Uni
          </Link>
        ))}
      </div>

      {/* May intake for uk page */}
      {mayIntake.includes(data?.destinationName) && (
        <div>
          <Link
            href="/study-destinations/study-in-the-uk/may-intake"
            className=" hidden"
          >
            May Intake
          </Link>
        </div>
      )}

      {/* banner */}
      {data?.destinationName === "USA" ? (
        <Banner4
          destinationName={data?.destinationName}
          bannerSubtitle={data?.destinationDescription}
        />
      ) : data?.destinationName === "Canada" ? (
        <Banner5
          destinationName={data?.destinationName}
          bannerSubtitle={data?.destinationDescription}
        />
      ) : banner1Countries.includes(data?.destinationName) ? (
        <Banner1
          destinationName={data?.destinationName}
          bannerSubtitle={data?.destinationDescription}
        />
      ) : banner3Countries.includes(data?.destinationName) ? (
        <Banner3
          destinationName={data?.destinationName}
          bannerSubtitle={data?.destinationDescription}
        />
      ) : (
        <Banner2
          destinationName={data?.destinationName}
          bannerSubtitle={data?.destinationDescription}
        />
      )}

      {/* why study here */}
      {data?.destinationName === "USA" ? (
        <Statue
          destinationName={data?.destinationName}
          bannerSubtitle={data?.destinationDescription}
          bgColor={data?.bgColor}
        />
      ) : data?.destinationName === "Canada" ? (
        <Leaf
          destinationName={data?.destinationName}
          bgColor={data?.bgColor}
          whyStudyDesc={data?.whyStudyDescription}
        />
      ) : whyStudyHereCountries1.includes(data?.destinationName) ? (
        <Car
          destinationName={data?.destinationName}
          bgColor={data?.bgColor}
          whyStudyDesc={data?.whyStudyDescription}
        />
      ) : whyStudyHereCountries2.includes(data?.destinationName) ? (
        <Tower
          destinationName={data?.destinationName}
          bgColor={data?.bgColor}
          whyStudyDesc={data?.whyStudyDescription}
        />
      ) : whyStudyHereCountries3.includes(data?.destinationName) ? (
        <Statue
          destinationName={data?.destinationName}
          bannerSubtitle={data?.destinationDescription}
          bgColor={data?.bgColor}
        />
      ) : (
        <Germany
          destinationName={data?.destinationName}
          bgColor={data?.bgColor}
          whyStudyDesc={data?.whyStudyDescription}
        />
      )}

      {/* quick Facts */}
      {data?.quickFacts?.length > 0 && (
        <QuickFacts
          destinationTitle={data?.destinationName}
          facts={data?.quickFacts}
          scholarship={data?.scholarship}
        />
      )}

      {/* tabs */}
      <Tabs
        postGraduationOpportunity={data?.postGraduationOpportunity}
        destinationTitle={data?.destinationName}
        programDuration={data.programDuration}
        costOfStudy={data.costOfStudy}
        academicIntake={data.academicIntake}
        preparationTime={data.preparationTime}
      />

      {/* animated text */}
      <AnimatedText
        destinationName={data.destinationName}
        popularIn={data.popularIn}
      />

      <UniversityCards
        url={url}
        universities={universities}
        destinationName={data?.destinationName}
      />

      {/* requirement card */}
      <RequirementCard
        destinationName={data?.destinationName}
        requirement={data?.studyRequirement}
      />

      {/* exams */}
      <Exams
        examRequirement={data.examRequirement}
        destinationName={data?.destinationName}
      />

      {/* university required docs */}
      <GuidanceBanner number={data?.expertNumber} />

      {/* required docs */}
      <University_Required_Docs
        destinationName={data.destinationName}
        documents={data.documents}
        statement={data.statement}
        application={data.application}
        doc1={Doc1}
        doc2={Doc2}
        doc3={Doc3}
      />

      <FAQ
        FAQData={data?.faq}
        bgColor={data?.bgColor}
        FAQimg={FAQUK}
        destinationName={data?.destinationName}
      />

      <Counselor
        number={data?.expertNumber}
        destinationName={data?.destinationName}
        bgColor={data?.bgColor}
      />
    </div>
  );
};

export default DestinationDetails;
