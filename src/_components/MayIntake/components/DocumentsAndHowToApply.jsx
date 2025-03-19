import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DocumentsAndHowToApply = () => {
  const documentsRequired = [
    "High school or undergraduate transcripts",
    "Proof of English proficiency (IELTS/TOEFL/PTE)",
    "Personal Statement/Essay",
    "Recommendation Letters",
    "Valid Passport and visa documents",
  ];

  const howToApplySteps = [
    { step: 1, title: "Research Programs", description: "Explore programs offered for May Intake." },
    { step: 2, title: "Prepare Documents", description: "Gather transcripts, essays, and recommendation letters." },
    { step: 3, title: "Submit Applications", description: "Apply through the respective university portals." },
    { step: 4, title: "Track Progress", description: "Follow up on application status and prepare for interviews." },
    { step: 5, title: "Accept Offer", description: "Confirm your offer and start the visa process." },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Documents Required & <span className="text-blue-600">How to Apply</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Documents Required */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Documents Required</h3>
          <ul className="space-y-3 text-gray-700">
            {documentsRequired.map((doc, index) => (
              <li key={index} className="flex items-start space-x-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How to Apply */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">How to Apply</h3>
          <ol className="space-y-4 text-gray-700">
            {howToApplySteps.map((step) => (
              <li key={step.step} className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">{step.step}.</span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default DocumentsAndHowToApply;
