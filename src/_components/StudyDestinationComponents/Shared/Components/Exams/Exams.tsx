"use client";
 
import ExamsLargeScreen from "./ExamsLargeScreen";

const Exams = ({
  destinationName,
  examRequirement,
}: {
  destinationName: string;
  examRequirement: Array<{
    examName: string;
    requirementList: string[]; // Array of strings
  }>;
}) => {
  return (
    <div className=" m-0 pb-14 text-[#3B82F6] bg-[#F1F8FF]">
      <h1 className="px-5 pt-10 lg:pt-24 text-center font-semibold text-3xl md:text-4xl lg:text-6xl text-black">
        Exam for an {destinationName} student visa
      </h1>
      <div className="max-w-6xl mx-auto px-10 mt-6">
        {examRequirement?.length > 0 ? (
          <ExamsLargeScreen examRequirement={examRequirement} />
        ) : (
          <p className="text-center italic text-xl  mt-10 pb-20">
            No requirement related data found
          </p>
        )}
      </div>
    </div>
  );
};

export default Exams;
