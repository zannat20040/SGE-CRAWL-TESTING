import React from "react";
import serviceImg from "../../../public/assets/Homepage/footer/education-people-great-design-for-any-purposes-flat-design-vector-removebg-preview.webp";
import Image from "next/image";

export default function ServiceImageComponent() {
  return (
    <Image
      width={100}
      height={100}
      className="w-full h-full rounded-2xl"
      src={serviceImg}
      alt="serviceimg"
    />
  );
}
