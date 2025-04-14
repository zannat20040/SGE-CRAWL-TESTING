import Image from "next/image";
import CounterGrid from "./CounterGrid";
import MarqueeBanner from "./MarqueeBanner";

const CoreStrength = () => {
  return (
    <div className="mt-8">
      {/* Background section with city illustration and core stats */}
      <div
        style={{
          backgroundImage: "url('/assets/Homepage/City BG.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
        className="lg:py-32 poppins"
      >
        <div
          className="max-w-7xl mx-auto rounded-3xl "
          style={{
            backgroundSize: "cover",
            background:
              "linear-gradient(124deg, rgba(49,135,252,1) 39%, rgba(5,34,230,1) 100%)",
          }}
        >
          <div className="relative rounded-2xl">
            {/* Top section: Heading and illustration */}
            <div className="lg:flex flex-col-reverse lg:flex-row-reverse">
              <div className="lg:mt-32 lg:w-1/2 text-center py-10 lg:py-0 mx-auto text-transparent bg-clip-text text-6xl font-bold">
                <h1 className="text-gradient poppins-bold pb-2">
                  Our Core Strength
                </h1>
              </div>
              <Image
                width={100}
                height={100}
                loading="lazy"
                className="w-1/2 mx-auto lg:w-fit lg:mt-[-80px] lg:p-[10px]"
                src="/assets/Homepage/Core Strength Icon.svg"
                alt="Core Strength Icon"
              />
            </div>

            {/* Counter section with gradient overlay */}
            <div
              className="lg:absolute bottom-0 w-full rounded-lg"
              style={{
                background:
                  "linear-gradient(183deg, rgba(0,0,0,0) 30%, rgba(6,45,79,1) 90%)",
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center text-white font-bold px-10 gap-2 md:gap-10 my-5 lg:my-10 max-w-7xl mx-auto pb-10">
                <CounterGrid />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling marquee banner below the stats section */}
      <div className="inter bg-[#4BA1FF] py-10 rounded-tl-badge rounded-br-badge my-10 lg:my-0 overflow-hidden">
        <div className="bg-white -rotate-2">
          <MarqueeBanner />
        </div>
      </div>
    </div>
  );
};

export default CoreStrength;
