"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Slide, toast } from "react-toastify";
import unidata from "../../../../public/json/destination_data.json";
import PhoneValidation from "@/_components/PhoneValidation/PhoneValidation";

export default function ApplicationModal() {
  const [open, setOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [phone, setPhone]= useState("")

  const handleOpen = () => setOpen(!open);

  const getIntakeOptions = (destinationName) => {
    const destination = unidata?.find(
      (data) => data.destinationName === destinationName
    );
    return destination
      ? destination?.academicIntake?.map((intake) => intake.qualification)
      : [];
  };

  const HandleApplication = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const form = e.target; // Get the form element
    const apiUrl = process.env.NEXT_PUBLIC_API_FORM_URL;

    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = phone;
    const studyIntake = form.intake.value;
    const studyYear = form.year.value;
    const studyDestination = form.destination.value;

    const data = {
      name,
      email,
      phoneNumber,
      studyIntake,
      studyYear,
      studyDestination,
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

      handleOpen();
    } catch (error) {
      console.error("Error submitting the form:", error);
      let errMessage = "An unknown error occurred"; // Default message
      if (error.response?.data?.message) {
        errMessage = error.response.data.message;
      } else if (error.message) {
        errMessage = error.message;
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
      handleOpen();
    }
  };

  return (
    <>
      <Link href={"/"} className="flex justify-between" onClick={handleOpen}>
        Apply
      </Link>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="!max-w-[400px] w-auto !max-h-[500px] p-5 overflow-y-scroll !-z-10"
      >
        <DialogHeader className="relative m-0 block">
          <div className="w-4/5">
            <Typography variant="h4" color="blue-gray">
              Apply for Your Study Abroad Program{" "}
            </Typography>
            <Typography className="mt-1 font-normal text-gray-600">
              Ready to take the next step? Fill out the form below, and{" "}
              {`we'll`}
              guide you through the process of applying for your study abroad
              program.
            </Typography>
          </div>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3 top-3.5"
            onClick={handleOpen}
          >
            <HiXMark className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={(e) => HandleApplication(e)}>
          <DialogBody className="space-y-4 pb-0">
            {/* Full Name */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Full Name
              </Typography>
              <Input
                required
                type="text"
                color="gray"
                size="lg"
                placeholder="eg. John Doe"
                name="name"
                className="placeholder:opacity-100 focus:!border-gray-400 !border-gray-400"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 grid-cols-2 gap-3">
              {/* Email */}
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Email
                </Typography>
                <Input
                  required
                  color="gray"
                  size="lg"
                  type="email"
                  placeholder="eg. john@example.com"
                  name="email"
                  className="placeholder:opacity-100 focus:!border-gray-400 !border-gray-400"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              {/* Phone Number */}
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Phone Number
                </Typography>
                {/* <Input
                  required
                  type="number" // Changed to text for better flexibility with different phone formats
                  color="gray"
                  size="lg"
                  placeholder="eg. 01700000000"
                  name="number"
                  className="placeholder:opacity-100 !border-gray-400 focus:!border-gray-400"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                /> */}
                <PhoneValidation phone = {phone} setPhone={setPhone}/>
              </div>
            </div>

            {/* Preferred Study Destination */}

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Select Study Destination
              </Typography>
              <select
                onChange={(e) => setSelectedDestination(e.target.value)}
                name="destination"
                required
                defaultValue={""}
                className={`w-full  outline-0 focus:outline-none  px-5 py-3 rounded-md  !border-gray-400  border placeholder:opacity-100 focus:!border-2 text-sm`}
              >
                <option value={""} disabled>
                  Preferred Study Destination
                </option>
                {unidata?.map((data) => (
                  <option
                    key={data.destinationName}
                    value={data.destinationName}
                  >
                    {data?.destinationName}
                  </option>
                ))}
              </select>
            </div>

            {/* select study year */}

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Select Study Year
              </Typography>
              <select
                defaultValue={""}
                name="year"
                required
                className={`w-full  outline-0 focus:outline-none  px-5 py-3 rounded-md  !border-gray-400  border placeholder:opacity-100 focus:!border-2 text-sm`}
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
            </div>

            {/* select study Intake */}

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Select Study Intake
              </Typography>
              <select
                defaultValue={""}
                required
                name="intake"
                disabled={!selectedDestination}
                className={`w-full  outline-0 focus:outline-none  px-5 py-3 rounded-md  !border-gray-400  border placeholder:opacity-100 focus:!border-2 text-sm`}
              >
                {/* Preferred Study Intake */}
                <option value={""} disabled>
                  Preferred Study Intake
                </option>

                {getIntakeOptions(selectedDestination)?.length > 0 ? (
                  getIntakeOptions(selectedDestination)?.map((intake) => (
                    <option key={intake} value={intake}>
                      {intake}
                    </option>
                  ))
                ) : (
                  <option value={'Not available intake'}>Intake will be added soon.</option>
                )}
              </select>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button type="submit" className="ml-auto bg-[#00399F]">
              Submit Application
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
