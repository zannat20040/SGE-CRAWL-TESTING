import React from 'react'

export default function HoverCard({data,style}) {
  return (
    <div className={`grid ${style} gap-10  mt-10`}>
    {data?.map((service, index) => (
      <div key={index} className="flex flex-col justify-center text-center items-center gap-5 hover:bg-white p-6 transition duration-500 rounded-2xl hover:shadow-xl ">
        <p className="">{service?.icon}</p>

        <div className="">
          <h2 className="mb-1 font-semibold text-lg poppins-semibold ">
            {service?.title}
          </h2>
          <p className="text-sm">{service?.description}</p>
        </div>
      </div>
    ))}
  </div>  )
}
