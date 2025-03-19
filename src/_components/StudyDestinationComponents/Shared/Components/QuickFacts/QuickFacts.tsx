import { FaCheck } from "react-icons/fa6";

const QuickFacts = ({
  facts,
  destinationTitle,
  scholarship,
}: {
  destinationTitle: string;
  facts: Array<string>;
  scholarship: Array<string>;
}) => {
  return (
    <div>
      {facts?.length > 0 && (
        <div className="pt-10 pb-28 max-w-screen-2xl mx-auto px-10">
          <p className="text-center text-4xl font-bold mb-20">
            Quick Facts of {destinationTitle}
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {facts?.map((fact, index) => (
              <div
                key={index}
                className="flex gap-3 text-xl font-normal items-start"
              >
                <FaCheck
                  className="text-white bg-blue-500 p-[6px] rounded-full flex-shrink-0"
                  style={{ width: "25px", height: "25px" }}
                />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {scholarship?.length > 0 && (
        <div className="pt-10 pb-28 max-w-screen-2xl mx-auto px-10">
          <p className="text-center text-4xl font-bold mb-20">
            Scholarship Opportunities of {destinationTitle}
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {scholarship?.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 text-xl font-normal items-start"
              >
                <FaCheck
                  className="text-white bg-blue-500 p-[6px] rounded-full flex-shrink-0"
                  style={{ width: "25px", height: "25px" }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickFacts;
