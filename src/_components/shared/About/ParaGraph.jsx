import React from "react";

export default function ParaGraph({ description, style }) {
  return (
    <div className="flex-col gap-3 flex ">
      {description?.map((data, index) => (
        <p className={`text-base ${style}`} key={index}>
          {data.para}
        </p>
      ))}
    </div>
  );
}
