import React, { useState } from "react";
import Image from "next/image";
import strength from '../../../../../../../public/assets/Homepage/Core Strength Icon.svg'
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When does the May intake start in the UK?",
      answer:
        "The May intake typically begins in the first or second week of May. However, exact dates may vary depending on the university.",
    },
    {
      question: "Can I apply for scholarships during the May intake?",
      answer:
        "Yes, many universities offer scholarships for May intake students. Check with your chosen university for specific scholarship opportunities.",
    },
    {
      question: "What is the deadline for May intake applications?",
      answer:
        "Deadlines for May intake applications vary by university but are usually in February or March. Be sure to check the specific deadlines for your program.",
    },
    {
      question: "Can I apply for multiple courses during the May intake?",
      answer:
        "Yes, you can apply for multiple courses during the May intake, but ensure you meet the requirements and adhere to the deadlines for each application.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions <span className="text-blue-600">(FAQs)</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image with Transparent Background */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-white/50 to-blue-200/50 rounded-full"></div>
          <Image
            src={strength}
            alt="Student Illustration"
            width={400}
            priority
            height={400}
            className="rounded-full relative z-10"
          />
        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg shadow-md"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-blue-800">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl text-blue-800 transform transition-transform ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
