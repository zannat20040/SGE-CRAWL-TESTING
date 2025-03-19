import Image from "next/image";
import DeadlineImage from "../../../../../../../public/assets/UK Page/3. 4 Tabs/Deadline-rafiki 1.svg"

const Deadline = ({
  destinationTitle,
  preparationTime,
}: {
  destinationTitle: string;
  preparationTime: string;
}) => {
  return (
    <div className="max-w-[1400px]  mx-auto px-4 mt-10 py-10 lg:py-0">
      <div className="flex w-full text-[#181A1B] items-center lg:flex-row flex-col">
        {preparationTime ? (
          <div className="lg:w-[70%] w-full">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-center">
              Deadline for the {destinationTitle} Universities
            </h1>
            <p className="text-xl font-medium text-center mx-auto mt-5">
              {preparationTime}
            </p>
          </div>
        ) : (
          <p className="lg:w-[70%] w-full text-center text-lg italic">
            No deadline data found
          </p>
        )}
        <div className="lg:w-[35%] w-full lg:block hidden">
          <Image
            width={100}
            height={100}
            className="w-full h-auto"
            src={DeadlineImage}
            alt="Deadline illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Deadline;
