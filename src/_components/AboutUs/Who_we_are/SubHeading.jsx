import React from "react";

export default function SubHeading({ label }) {
  return (
    <>
      <p className="text-[#00399F] text-lg font-semibold mb-1 ">{label}</p>
      <hr className="h-[3px] w-[60px] bg-[#00399F] mb-4 " />
    </>
  );
}
