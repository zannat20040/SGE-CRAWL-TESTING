import Image from "next/image";
import CoinImage from "../../../../../../../public/assets/UK Page/3. 4 Tabs/Coins-rafiki 1.svg"

const Cost = ({ costOfStudy, destinationTitle }) => {
  return (
    <div className="max-w-[1400px]  mx-auto px-4 mt-10 py-10 lg:py-0">
      <div className="flex  text-[#181A1B] items-center lg:flex-row flex-col">
      {/* flex w-full text-[#181A1B] items-center lg:flex-row flex-col */}
        <div className="lg:w-[70%] w-full mt-20 px-4">
          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-center">
            Cost of Studying in {destinationTitle}
          </h1>
          {destinationTitle === "Australia" && (
            <p className="text-xl font-medium text-center lg:w-[70%] w-full mx-auto mt-5">
              Australia is a huge country, so the cost of living varies from place
              to place and city to city. On average, around AUD 1,500 to AUD 2,500
              per month is required for living expenses:
            </p>
          )}
          {destinationTitle === "Switzerland" && (
            <p className="text-xl font-medium text-center lg:w-[70%] w-full mx-auto mt-5">
              Switzerland is one of the costliest countries for living, even by
              European standards. But, like all other countries, the cost of
              living varies by city. For example, living in Geneva and Zurich is
              generally more expensive than in Bern and Basel. Students can cut
              significant amounts by living outside of major cities, cooking at
              home, and using public transportation.
            </p>
          )}
          {destinationTitle === "USA" && (
            <p className="text-xl font-medium text-center lg:w-[70%] w-full mx-auto mt-5">
              The standard of living in the USA is high, but it is not unbearable.
              However, it does depend on different factors like the location of
              the institution and accommodations. Naturally, living in the
              city costs more than living in a remote area, but living in the city
              provides better part-time job opportunities as well as cheaper
              transportation.
            </p>
          )}

          <div className=" mx-auto text-xl mt-10 lg:w-[70%] w-full">
            {costOfStudy?.length > 0 ? (
              <table className=" bg-white border border-gray-300 mx-auto">
                <thead>
                  <tr className="bg-[#3B82F6] text-white">
                    <th className="py-2 px-4 border-b">
                      {destinationTitle === "Australia" ? "SECTOR" : "DEGREE"}
                    </th>
                    <th className="py-2 px-4 border-b">COST IN GBP/YEAR</th>
                  </tr>
                </thead>
                <tbody>
                  {costOfStudy.map((row, index) => (
                    <tr key={index} className="bg-[#EFF6FF] font-medium">
                      <td className="px-4 py-3 border-[E1E1E1] border-2">
                        {row.degree}
                      </td>
                      <td className="p-4 border-[E1E1E1] border-2 text-center">
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center italic">No cost information found</p>
            )}
          </div>
        </div>
        <div className="hidden sm:block sm:w-full md:w-[30%] m-auto">
        {/*  */}
          <Image width={100} height={100} alt='coin' 
            className="w-auto h-auto"
            src={CoinImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Cost;
