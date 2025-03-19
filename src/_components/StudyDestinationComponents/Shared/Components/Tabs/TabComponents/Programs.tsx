import Image from "next/image";
import ColockImage from "../../../../../../../public/assets/UK Page/3. 4 Tabs/time flies-rafiki 1.svg"

interface ProgramDuration {
  qualification: string;
  duration: string;
  gir: string;
}
interface PostGraduationOpportunity {
  qualification: string;
  duration: string;
}

const Programs = ({
  destinationTitle,
  programDuration,
  postGraduationOpportunity,
}: {
  destinationTitle: string;
  programDuration: Array<ProgramDuration>;
  postGraduationOpportunity: Array<PostGraduationOpportunity>;
}) => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 ">
      <div className="flex w-full text-[#181A1B] items-center lg:flex-row flex-col gap-5">
        <div>
          <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-center">
            Programs and their duration in The {destinationTitle}
          </h1>
          {/* regular program duration */}
          <div className="lg:w-[70%] w-full mt-20 mx-auto">
            <p className="text-xl font-medium text-center">
              Here are the programs that the {destinationTitle} universities
              offer:
            </p>
            <div className="lg:text-xl md:text-xl mt-10 text-xs w-full ">
              {programDuration?.length > 0 ? (
                <table className="bg-white border border-gray-300 w-auto overflow-x-scroll">
                  <thead>
                    <tr className="bg-[#3B82F6] text-white">
                      <th className="py-2 px-4 border-b">
                        {" "}
                        {destinationTitle === "USA"
                          ? "PURPOSE"
                          : "QUALIFICATION"}{" "}
                      </th>
                      <th className="py-2 px-4 border-b">
                        {" "}
                        {destinationTitle === "USA"
                          ? "DETAILS"
                          : "DURATION"}{" "}
                      </th>
                      <th className="py-2 px-4 border-b">
                        {destinationTitle === "USA"
                          ? "N/A"
                          : "GRADUATE IMMIGRATION ROUTE (GIR)"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {programDuration.map((row, index) => (
                      <tr key={index} className="bg-[#EFF6FF] font-medium">
                        <td className="px-4 py-3 border-[E1E1E1] border-2">
                          {row?.qualification ? row.qualification : "N/A"}
                        </td>
                        <td className="p-4 border-[E1E1E1] border-2 text-center">
                          {row?.duration ? row.duration : "N/A"}
                        </td>
                        <td className="p-4 border-[E1E1E1] border-2 text-center">
                          {row?.gir ? row?.gir : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center italic">
                  Programs Information will be added soon.
                </p>
              )}
              {/* post graduated duration */}
              {postGraduationOpportunity?.length > 0 && (
                <div className=" w-full mt-20">
                  <p className="text-xl font-medium text-center">
                    After completing their studies, international students may
                    apply for the Temporary Graduate Visa (subclass 485). The
                    duration of this visa depends on the qualification level:
                  </p>
                  <div className="lg:text-xl md:text-xl mt-10 text-xs w-full overflow-x-scroll">
                    {postGraduationOpportunity?.length > 0 ? (
                      <table className="bg-white border border-gray-300 w-full">
                        <thead>
                          <tr className="bg-[#3B82F6] text-white">
                            <th className="py-2 px-4 border-b">
                              QUALIFICATION
                            </th>
                            <th className="py-2 px-4 border-b">DURATION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {programDuration.map((row, index) => (
                            <tr
                              key={index}
                              className="bg-[#EFF6FF] font-medium"
                            >
                              <td className="px-4 py-3 border-[E1E1E1] border-2">
                                {row?.qualification
                                  ? row?.qualification
                                  : "N/A"}
                              </td>
                              <td className="p-4 border-[E1E1E1] border-2 text-center">
                                {row?.duration ? row?.duration : "N/A"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-center italic">
                        Post Graduation Information will be added soon.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-[45%] w-full lg:block hidden">
          <Image
            width={100}
            height={100}
            className="w-[80%] h-auto mt-28 mx-auto"
            src={ColockImage}
            alt="Time flies illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
