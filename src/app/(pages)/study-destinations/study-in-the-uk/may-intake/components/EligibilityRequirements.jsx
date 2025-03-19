import React from "react";

const EligibilityRequirements = () => {
  const data = {
    undergraduate: [
      "Completed high school with minimum grades.",
      "Proven English proficiency (IELTS/TOEFL/PTE).",
      "Detailed Personal Statement.",
      "At least one Academic Reference.",
    ],
    postgraduate: [
      "Bachelor’s degree with minimum required grades.",
      "English proficiency (IELTS/TOEFL/PTE).",
      "Comprehensive Statement of Purpose.",
      "Relevant work experience (if applicable).",
    ],
  };

  return (
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Eligibility and Admission <span className="text-red-500">Criteria</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Undergraduate Programs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Undergraduate Programs
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            {data.undergraduate.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Postgraduate Programs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Postgraduate Programs
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            {data.postgraduate.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EligibilityRequirements;
