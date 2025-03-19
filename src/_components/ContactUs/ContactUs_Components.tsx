"use client";
import { MdDone } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import Image from "next/image";
import PhoneValidation from "../PhoneValidation/PhoneValidation";

const ContactUs_Components = () => {
  const [tik, setTik] = useState(false);
  const [width, setWidth] = useState<number>(1024);
  const [phone, setPhone]= useState<string>("")

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const HandleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_API_FORM_URL;

    const formData = new FormData(event.target as HTMLFormElement); // Create a FormData object

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    // const number = formData.get("number") as string; remove it
    const intake = formData.get("intake") as string;
    const year = formData.get("year") as string;
    const destination = formData.get("destination") as string;

    const data = {
      name,
      email,
      phoneNumber: phone,
      studyIntake: intake,
      studyYear: year,
      studyDestination: destination,
    };

    try {
      // Make sure to pass 'data' in the request body
      await axios.post(`${apiUrl}/apply`, data);
      toast.success("Your application submitted successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      // Reset the form after successful submission
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting the form:", error);
      let errMessage = "An unknown error occurred"; // Default message
      if (axios.isAxiosError(error) && error.response) {
        errMessage =
          error.response.data.message || error.response.data || error.message;
      }

      toast.error(errMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  const inputClass = `  md:rounded-md w-full  outline-none placeholder:text-xs  placeholder:text-[8px]   ${
    width >= 1024 && width <= 1300
      ? "placeholder:text-[10px]   px-2 text-[10px]"
      : width > 1300
      ? "text-base placeholder:text-base px-2 py-1"
      : "text-[8px] md:text-base pl-[2px] md:p-2 placeholder:text-[7px]"
  }`;
  const inputClass2 = `bg-gray-100 text-center flex items-center  px-1 md:p-2 text-gray-400 text-[8px] md:text-[12px] ${
    width >= 1024 && width <= 1300
      ? "placeholder:text-[10px]   px-2 text-[10px]"
      : width > 1300
      ? "text-base placeholder:text-base px-2 py-1"
      : "text-[6px] md:text-base md:p-2 "
  }`;

  return (
    <div className="relative">
      <div className="flex flex-col lg:grid xl:grid-cols-5 grid-cols-8 overflow-hidden bg-[#F5F5F5] rounded-b-2xl">
        <div className="lg:py-0 py-10 col-span-3 xl:col-span-2 flex flex-col items-center justify-center pb-0 sm:px-0 px-5 ">
          <div>
            <h1 className="text-7xl font-bold">
              We’d love <br /> to hear <br /> from you!
            </h1>
            <p className="my-10">
              Interested in studying abroad with Shabuj <br /> Global Education?
              Enter your details and <br /> {`we'll`} call you back when it
              suits you.
            </p>
          </div>
        </div>
        <div className="xl:col-span-3 col-span-5 flex flex-col justify-center items-center relative">
          <motion.div
            initial={{ y: "-200px" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className={`${
              width >= 1024 && width <= 1300 && "mt-5"
            } w-1/3 md:w-2/5   z-10 xl:w-[30%] lg:w-[30%]  absolute `}
          >
            <form
              onSubmit={(event) => HandleForm(event)}
              className=" w-full z-10 -mt-10 flex flex-col gap-1 md:gap-2 text-xs lg:text-base"
            >
              <input
                required
                className={`pt-1  ${inputClass}`}
                type="text"
                placeholder="Name"
                name="name"
              />

              <div className="flex">
                <input
                  className={`  md:rounded-l-md w-full  outline-none placeholder:text-xs  placeholder:text-[8px] pt-1   ${
                    width >= 1024 && width <= 1300
                      ? "placeholder:text-[10px]   px-2 text-[10px]"
                      : width > 1300
                      ? "text-base placeholder:text-base px-2 py-1"
                      : "text-[8px] md:text-base pl-[2px] md:p-2 placeholder:text-[7px]"
                  }`}
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                />
                <p className={`${inputClass2}   text-[8px] `}>.com</p>
              </div>

              <div className="flex gap-2">
                {/* <p className={`${inputClass2} `}>+880</p> */}
                {/* <input
                  className={`${inputClass} pt-1  placeholder:text-[7px]`}
                  type="number"
                  placeholder="Mobile Number"
                  required
                  name="number"
                /> */}
                <PhoneValidation phone = {phone} setPhone={setPhone}/>
              </div>

              <div className="space-y-2">
                <select
                  name="destination"
                  required
                  defaultValue={""}
                  className={`bg-white flex items-center justify-between pl-2 py-1 rounded-sm text-[8px] ${inputClass}`}
                >
                  {/* Preferred Study Destination */}
                  <option value={""} disabled>
                    Preferred Study Destination
                  </option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>NewZealand</option>
                  <option>Germany</option>
                  <option>UAE</option>
                  <option>Georgia</option>
                  <option>Finland</option>
                  <option>Cyprus</option>
                  <option>Switzerland</option>
                  <option>France</option>
                  <option>West Indies</option>
                  <option>Australia</option>
                  <option>Others</option>
                </select>
                <select
                  defaultValue={""}
                  name="year"
                  required
                  className={`bg-white flex items-center justify-between pl-2 py-1 rounded-sm text-[8px] ${inputClass}`}
                >
                  {/* Preferred Study Year */}
                  <option value={""} disabled>
                    Preferred Study Year
                  </option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                </select>
                <select
                  defaultValue={""}
                  required
                  name="intake"
                  className={`bg-white flex items-center justify-between pl-2 py-1 rounded-sm text-[8px] ${inputClass}`}
                >
                  {/* Preferred Study Intake */}
                  <option value={""} disabled>
                    Preferred Study Intake
                  </option>
                  <option>Summer</option>
                  <option>Fall</option>
                  <option>Winter</option>
                </select>
              </div>

              <div className="sm:flex hidden items-start mt-3 gap-2 bg-transparent text-[8px] md:text-base ">
                <p
                  onClick={() => {
                    setTik(!tik);
                  }}
                >
                  <MdDone
                    className={
                      tik
                        ? "text-white bg-[#3560ff]"
                        : "text-transparent bg-white"
                    }
                  />
                </p>
                <p
                  className={`${
                    width >= 1024 && width <= 1300
                      ? "  text-[10px]"
                      : width > 1300
                      ? "text-base"
                      : "text:sm md:text-base"
                  } text-white`}
                >
                  By clicking you agree to our{" "}
                  <span className="text-[#0d7ddc]"> Privacy Policy</span> and{" "}
                  <span className="text-[#0d7ddc]">Terms & Conditions</span>
                </p>
              </div>

              <button className="bg-[#3b82f6] py-2 mt-3 text-white font-bold p-1 lg:p-2 rounded-3xl text-[8px] md:text-base ">
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ y: "200px" }}
            animate={{ y: "0px" }}
            transition={{ duration: 1 }}
            className="z-0 xl:w-[900px] lg:w-[800px] lg:mt-10"
          >
            <Image
              src="/assets/Contact US/Holding-a-Tablet-to-the-Right.webp"
              width={900} 
              height={600} 
              alt="Holding a Tablet"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs_Components;
