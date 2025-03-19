import React, { useState } from "react";

import NoEvent1 from "../../../../public/assets/Events and Event Registration/Event Planning/Artboard 2.png";
import NoEvent2 from "../../../../public/assets/Events and Event Registration/Event Planning/Artboard 3.png";
import NoEvent3 from "../../../../public/assets/Events and Event Registration/Event Planning/Artboard 4.png";
import NoEvent4 from "../../../../public/assets/Events and Event Registration/Event Planning/Artboard 5.png";
import "./NoEventFound.css";
import { AxiosError } from "axios";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";

export default function NoOngoing() {
  const [loading, setLoading] = useState(false);
  // Handle form submission using e.target to get the email value directly
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on form submission
    setLoading(true);
    const email = (e.target as HTMLFormElement).email.value;
  
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_FORM_URL}/newsletter`,
        { email }
      );
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "You will get our next upcoming announcement in your email.",
        });
        (e.target as HTMLFormElement).reset();
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        Swal.fire({
          icon: "error",
          title: "Sorry!",
          text:
            err.response?.data?.message || "There is a problem. Please try again",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Sorry!",
          text: "An unknown error occurred. Please try again",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-[1350px] mx-auto">
      <h1 className="text-3xl poppins-bold text-center text-blue-900 mb-28 mt-12 px-4">
        Stay tuned for your exciting events in the future!
      </h1>
      <div className="flex flex-col lg:grid grid-cols-2 gap-8 items-center justify-between px-6">
        <div className="relative ">
          <Image
            src={NoEvent2}
            alt="no ongoing even2"
            height={100}
            width={100}
            className="back-desk relative w-full  transition-all duration-1000  top-0 z-9"
          />
          <div>
            <Image
              src={NoEvent1}
              alt="no ongoing event1"
              height={100}
              width={100}
              className="absolute w-[45%] left-24 top-48"
            />
            <Image
              src={NoEvent3}
              alt="no ongoing event3"
              height={100}
              width={100}
              className="absolute xl:w-[170px] w-[140px] bottom-4 person transition-all duration-1000 z-10 top-0"
            />
            <Image
              src={NoEvent4}
              alt="no ongoing event4"
              height={100}
              width={100}
              className="absolute w-full  z-8 xl:top-[440px] top-[370px]"
            />
          </div>
        </div>
        <div className="mt-48 sm:mt-36 lg:mt-0 flex flex-col justify-center h-full items-center">
          <h1 className="text-4xl font-normal mb-5 text-center">
            Sign up to get updates about events right in your inbox{" "}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap 2xl:flex-nowrap justify-center 2xl:justify-normal items-center gap-3"
          >
            <div className="flex items-center border-2 border-gray-600 rounded-md ">
              <input
                required
                name="email"
                type="email"
                placeholder="Please Enter Your Email"
                className=" px-4 py-[9px] bg-gray-50 md:w-96 rounded-l-md text-gray-700 font-normal focus:outline-none focus:ring-0"
              />
              <span className="px-4 py-[9px] bg-gray-50 text-gray-700 rounded-r-md font-normal ">
                .com
              </span>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="px-6 py-2  bg-blue-900 text-white border-2 border-blue-900 rounded-md font-normal flex items-center gap-x-2"
            >
              <FaRegCircleCheck className="text-lg text-white" />

              {loading ? "Subscribing..." : "Get Updates"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
