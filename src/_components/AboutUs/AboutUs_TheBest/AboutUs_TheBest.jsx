import Image from "next/image";

const AboutUs_Thebest = () => {
  return (
    <div className=" pt-[64px] pb-[72px] bg-[#EFF6FF]">
      <div className=" max-w-[1157px] mx-auto">
        <div className="text-center mx-8 ">
          <h2 className="poppins-semibold text-[40px] leading-[56px] -tracking-[0.02em] text-[#081831]">
            Why We Are The Best
          </h2>
          <p className="poppins-regular text-[16px] text-[#000000] lg:w-[760px] mx-auto">
            Shabuj Global provides an excellent service to students with their
            admission to top quality universities and colleges in the UK. Shabuj
            Global helps students from all over the world. Home Students, EU
            students and International students have all benefitted from our
            help and advice.
          </p>
        </div>
        <div className="flex gap-[50px] px-4 items-baseline lg:flex-row flex-col mt-10">
          <div className="mx-auto">
            <div>
              <Image
                priority
                width={100}
                height={100}
                src="/assets/About Us/5. Why we are the best/Group-128.webp"
                className="w-56"
                alt="image"
              />
            </div>
            <div className="text-center">
              <p className="poppins-medium text-[18px] text-[#000000] -pt-2">
                Recognized by<br></br>
                Top Universities
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div>
              <Image
                priority
                width={100}
                height={100}
                src="/assets/About Us/5. Why we are the best/Group-125.webp"
                className="w-auto"
                alt="image"
              />
            </div>
            <div className="text-center">
              <p className="poppins-medium text-[18px] text-[#000000] pt-[25px]">
                Strong And Well<br></br>
                Educated Team
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div>
              <Image
                priority
                width={100}
                height={100}
                src="/assets/About Us/5. Why we are the best/Group-126.webp"
                className="w-auto"
                alt="image"
              />
            </div>
            <div className="text-center">
              <p className="poppins-medium text-[18px] text-[#000000] pt-[25px]">
                Experienced<br></br> Student Consultant
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div>
              <Image
                priority
                width={100}
                height={100}
                src="/assets/About Us/5. Why we are the best/Layer_1.webp"
                className="w-auto"
                alt="image"
              />
            </div>
            <div className="text-center">
              <p className="poppins-medium text-[18px] text-[#000000] pt-[25px]">
                Help Students<br></br>
                For Scholarships
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs_Thebest;
