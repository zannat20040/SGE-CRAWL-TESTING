import React from "react";

const ApplicationTimeline = () => {
  const timeline = [
    {
      step: 1,
      months: "January – March",
      description: "Research and shortlist universities and programs.",
    },
    {
      step: 2,
      months: "April – May",
      description: "Prepare required documents and submit applications.",
    },
    {
      step: 3,
      months: "June – July",
      description: "Receive admission offers and finalize your choice.",
    },
    {
      step: 4,
      months: "August – September",
      description: "Apply for your visa and prepare for your journey.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Application Timeline for <span className="text-blue-600">May Intake</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {timeline.map((item) => (
          <div
            key={item.step}
            className="flex items-center bg-gray-50 shadow-md rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-lg font-bold mr-6">
              {item.step}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-1">
                {item.months}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationTimeline;
