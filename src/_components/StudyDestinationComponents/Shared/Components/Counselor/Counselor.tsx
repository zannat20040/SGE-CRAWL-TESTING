import "./Counselor.css";
import Link from "next/link";
import Image from "next/image";
import CounsellorIMG1 from "../../../../../../public/assets/UK Page/9. Counselor/default1.png";
import CounsellorIMG2 from "../../../../../../public/assets/UK Page/9. Counselor/background.png";

const Counselor = ({
  destinationName,
  bgColor,
  number,
}: {
  destinationName: string;
  bgColor: string;
  number: string;
}) => {
  return (
    <div style={{ background: bgColor, zIndex:-2000 }} className={` py-16 mt-12 `}>
      <div className="max-w-[1154px] mx-auto ">
        <div className="flex justify-around lg:flex-row flex-col">
          <div className="lg:text-left text-center px-4">
            <h1 className="lg:poppins-semibold poppins-bold lg:text-[45px] xl:text-[56px] text-[38px] lg:leading-[72.8px] leading-[42px] -tracking-[0.01em] text-white pt-[51px] lg:pb-[69px] pb-[30px]">
              Talk to Our Expert<br></br> {destinationName} Counselor
            </h1>
            <Link
              target="blank"
              href={`https://wa.me/${number}`}
              className="poppins-bold lg:text-[18px] text-[10px] bg-white lg:px-[124px] px-[66px] lg:py-[22px] py-[16px] rounded-[36px]"
            >
              Contact Now
            </Link>
          </div>
          <div className="lg:-mb-[90px] md:-mb-[62px] -mb-[10px] Counselor mx-auto lg:-mt-[70px] relative">
            {/* Wrap images in a container */}
            <div className="counselor-image-container">
              {/* Default Image */}
              <Image
                width={534}
                height={636}
                alt="counsellor"
                src={CounsellorIMG1}
                className="default-image"
              />

              {/* Hover Image */}
              <Image
                width={534}
                height={636}
                alt="counsellor-hover"
                src={CounsellorIMG2}
                className="hover-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselor;
