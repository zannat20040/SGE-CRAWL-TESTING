import Image from "next/image";
import React from "react";

const WhyMayIntake = () => {
  return (
    <section className="max-w-7xl mx-auto my-16 px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Image Section */}
        <div className="w-full">
          <Image
          width={100} height={100}
            src='/assets/UK Page/uk universities/Aberdeen-1.webp'
            alt="May Intake UK"
            className="rounded-lg w-auto h-auto shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-blue-600">May Intake?</span>
          </h2>
          <ul className="list-disc space-y-2 text-gray-700 pl-5">
            <li>Flexible entry options for a variety of courses and universities.</li>
            <li>Additional scholarships and funding opportunities during May intake.</li>
            <li>
              A perfect time for students to align with international academic schedules.
            </li>
            <li>
              Ample time for visa processing, travel arrangements, and pre-departure
              planning.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyMayIntake;
