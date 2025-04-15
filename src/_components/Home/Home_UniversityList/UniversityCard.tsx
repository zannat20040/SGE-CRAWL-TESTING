import React from "react";
import { UniversityDetails } from "@/assets/type/interfaces";
import Image from "next/image";
import Link from "next/link";
import allUniData from "../../../../public/json/ukUni.json";

// Assert the imported JSON as Destination[]
const allUni = allUniData as UniversityDetails[];

export default function UniversityCard() {
  return (
    <>
      {allUni.map((uni, index) => {
        const nameSlug = uni.Name?.toLowerCase().replace(/\s+/g, "-");
        const countrySlug = uni.country?.toLowerCase().replace(/\s+/g, "-");
        const href =
          countrySlug && nameSlug
            ? `/study-destinations/study-in-the-${countrySlug}/${nameSlug}`
            : "#";

        return (
          <Link
            key={uni.Name || index}
            href={href}
            className="cursor-pointer flex justify-center items-center"
          >
            <Image
              width={200}
              height={150}
              loading="lazy"
              className="w-[200px] h-[150px] object-contain"
              src={uni.logo || "/assets/default-university-logo.png"}
              alt={uni.Name || "University Logo"}
            />
          </Link>
        );
      })}
    </>
  );
}
