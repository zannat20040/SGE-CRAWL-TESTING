"use client";

import Marquee from "react-fast-marquee";
import data from "./image.json";

import { motion } from "framer-motion";
import Image from "next/image";
function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(93deg, rgba(40,109,202,1) 0%, rgba(0,18,182,1) 100%)",
      }}
      className="main flex flex-col items-center align pb-10 overflow-hidden z-50"
    >
      <h1 className="text-white text-4xl lg:text-[67px] text-center font-[700] leading-[87px] p-[20px]">
        Image Gallery
      </h1>
      <Marquee pauseOnHover={true}>
        {data.slice(0, 25).map((data) => (
          <div className="" key={data.id}>
            <motion.div
              initial={{}}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={() => {
                const dialog = document.getElementById(
                  data.id.toString()
                ) as HTMLDialogElement;
                if (dialog) {
                  dialog.showModal();
                }
              }}
              className="w-[300px]  h-[350px] rounded-[20px] mr-2 cursor-pointer   bg-white bg-opacity-30   grayscale hover:filter-none relative   group   mt-[50px] "
            >
              <div
                style={{
                  background:
                    "linear-gradient(93deg, rgba(37,180,186,1) 0%, rgba(222,243,135,1) 100%)",
                }}
                className="hidden absolute  bottom-0 special p-[10px]  rounded-b-[15px] group-hover:block"
              >
                <h1 className="text-white font-[500] text-[18px] leading-7">
                  {data.title}
                </h1>
                <h1 className="text-white font-[400] text-[14px] leading-[21px]">
                  {data.description}
                </h1>
              </div>
              <Image
                width={100}
                height={100}
                className="w-full h-[350px] rounded-[16px] object-cover"
                src={data?.url}
                alt={data.title}
              />
            </motion.div>

            <dialog
              id={data.id.toString()}
              className="modal flex justify-center items-center px-3"
            >
              <div className="modal-box max-w-[800px] w-full max-h-[90vh] h-auto rounded-lg overflow-y-auto ">
                {/* Close Button */}
                <form method="dialog">
                  <button className="btn outline-none btn-xs btn-circle text-xs text-blue-600 absolute z-10 right-2 top-2">
                    ✕
                  </button>
                </form>

                {/* Image and Content */}
                <div className="relative">
                  <Image
                    width={500}
                    height={400}
                    src={data.url}
                    className="w-full h-auto rounded-t-lg object-cover"
                    alt={data.title}
                  />
                  <div className="p-4 bg-white">
                    <h2 className="poppins-medium text-[18px] pb-2">
                      {data.title}
                    </h2>
                    <p className="poppins-regular text-[14px]">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Modal Overlay */}
              <form method="dialog" className="modal-backdrop">
                <button className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></button>
              </form>
            </dialog>
          </div>
        ))}
      </Marquee>

      <Marquee pauseOnHover={true} direction="right">
        {data.slice(26, 57).map((data) => (
          <div className="" key={data.id}>
            <motion.div
              initial={{}}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={() => {
                const dialog = document.getElementById(
                  data.id.toString()
                ) as HTMLDialogElement;
                if (dialog) {
                  dialog.showModal(); // Now TypeScript knows it's an HTMLDialogElement
                }
              }}
              className="w-[300px]  h-[350px] rounded-[20px] mr-2 cursor-pointer   bg-white bg-opacity-30   grayscale hover:filter-none relative   group   mt-[50px] "
            >
              <div
                style={{
                  background:
                    "linear-gradient(93deg, rgba(37,180,186,1) 0%, rgba(222,243,135,1) 100%)",
                }}
                className="hidden absolute  bottom-0 special p-[10px]  rounded-b-[15px] group-hover:block "
              >
                <h1 className="text-white font-[500] text-[18px] leading-7">
                  {data.title}
                </h1>
                <h1 className="text-white font-[400] text-[14px] leading-[21px]">
                  {data.description}
                </h1>
              </div>
              <Image
                width={100}
                height={100}
                className="w-full h-[350px] rounded-[16px] object-cover"
                src={data?.url}
                alt={data.title}
              />
            </motion.div>

            <dialog
              id={data.id.toString()}
              className="modal flex justify-center items-center px-3"
            >
              <div className="modal-box max-w-[800px] w-full max-h-[90vh] h-auto rounded-lg overflow-y-auto ">
                {/* Close Button */}
                <form method="dialog">
                  <button className="btn outline-none btn-xs btn-circle text-xs text-blue-600 absolute z-10 right-2 top-2">
                    ✕
                  </button>
                </form>

                {/* Image and Content */}
                <div className="relative">
                  <Image
                    width={500}
                    height={400}
                    src={data.url}
                    className="w-full h-auto rounded-t-lg object-cover"
                    alt={data.title}
                  />
                  <div className="p-4 bg-white">
                    <h2 className="poppins-medium text-[18px] pb-2">
                      {data.title}
                    </h2>
                    <p className="poppins-regular text-[14px]">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Modal Overlay */}
              <form method="dialog" className="modal-backdrop">
                <button className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></button>
              </form>
            </dialog>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default App;
