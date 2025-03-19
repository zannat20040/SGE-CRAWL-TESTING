import React from "react";

export default function FloatingCard({ services, style }) {
  return (

<div className=" w-3/4 max-w-4xl mx-auto relative -top-12">
        <div className={`bg-white p-8 rounded-lg shadow-xl grid ${style} gap-5`}>
          {services?.map((service, index) => (
            <div key={index} className="flex  items-start gap-3">
              <div className="italic text-[#00399F]  text-3xl font-bold ">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <div>
                <h2 className="mb-1  text-lg poppins-semibold ">
                  {service?.title}
                </h2>
                <p className="text-sm">{service?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
