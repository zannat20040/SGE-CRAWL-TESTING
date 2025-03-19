import React from "react";

export default function ParaGraph({ description  }:{description: React.ReactNode }) {
  return (
    <span className="flex-col gap-3 flex bg-white rounded-md shadow-md p-6 ">
        <span className={`text-base  `} >
          {description}
        </span>
    </span>
  );
}
