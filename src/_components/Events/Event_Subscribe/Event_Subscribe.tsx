"use client";
import React, { useState } from "react";
import axios from "axios"; // Import axios
import Swal from "sweetalert2";
import { AxiosError } from "axios";

const Event_Subscribe = () => {
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
            err.response?.data?.message ||
            "There is a problem. Please try again",
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
    <div className="bg-[#0017E4] md:bg-gradient-to-r from-[#3793FF] to-[#0017E4] min-h-16 py-5">
      <div className="max-w-screen-lg mx-auto px-3 flex flex-col lg:flex-row justify-between items-center">
        <div className="py-5 text-white">
          <p className="text-[28px] font-semibold w-full sm:text-left text-center">
            Get Latest Updates on Overseas Education
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex gap-y-5 flex-wrap sm:flex-nowrap justify-center sm:justify-normal items-center gap-x-3"
        >
          <div className="flex items-center">
            <input
              required
              type="email"
              name="email" // Use 'name' to reference it in e.target
              placeholder="Please Enter Your Email"
              className="px-4 py-[9px] md:w-96 rounded-l-md text-gray-700 focus:outline-none focus:ring-0"
            />
            <span className="px-4 py-[9px] bg-white text-gray-700 rounded-r-md ">
              .com
            </span>
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`px-6 py-2 bg-white rounded-md flex items-center gap-x-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_5_562)">
                <path
                  d="M8.29237 12.353L13.3195 6.48803L12.1806 5.51184L8.20765 10.1469L6.53034 8.4696L5.46968 9.53026L8.29237 12.353Z"
                  fill="#4B4B4B"
                />
                <path
                  d="M17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9ZM15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9Z"
                  fill="#4B4B4B"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_562">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Event_Subscribe;
