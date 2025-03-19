import Image from "next/image";

const Banner1 = ({ university }: { university: { logo: string | null, Name: string | null } | null }) => {


  return (
    <div className="relative w-auto h-[300px] md:h-[550px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/UK Page/uk universities/Aberdeen-1.webp')" }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-end justify-center">
          {university?.logo &&
            <Image width={100} height={100}
              className="bg-white p-5 w-[200px] md:w-[370px] rounded-2xl shadow-2xl mb-[-30px] md:mb-[-60px]"
              src={university?.logo}
              alt={university?.Name ? university.Name : ""}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Banner1;
