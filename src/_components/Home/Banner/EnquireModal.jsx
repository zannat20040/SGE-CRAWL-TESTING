"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Slide, toast } from "react-toastify";


export default function EnquireModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const HandleEnquies = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const form = e.target; // Get the form element
    const apiUrl = process.env.NEXT_PUBLIC_API_FORM_URL;

    // Gather all form data
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      // phone: form.phone.value,
      // country: form.country.value,
      message: form.question.value,
    };

    try {
      // Make sure to pass 'data' in the request body
      await axios.post(`${apiUrl}/enquire`, data);
      toast.success(
        "Your enquiry submitted successfully. We will contact with you very soon",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
          style: { zIndex: 999999999 },
        }
      );
      handleOpen()
    } catch (error) {
      console.error("Error submitting the form:", error);
      let errMessage = "An unknown error occurred"; // Default message
      if (error instanceof Error) {
        errMessage = error.response.data || error.message;
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
      handleOpen()
    }
  };

  return (
    <>
      <Link href={"/"} className="flex justify-between" onClick={handleOpen}>
        Enquire
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
              Enquire About Your Future Study Plan
            </Typography>
            <Typography className="mt-1 font-normal text-gray-600">
              Have questions? Reach out to us with your queries, and {`we'll`}
              assist you in your journey to studying abroad.
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
        <form onSubmit={(e) => HandleEnquies(e)}>
          <DialogBody className="space-y-4 pb-0">
              {/* Subject */}
              <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Subject
              </Typography>
              <Input
                required
                type="text"
                color="gray"
                size="lg"
                placeholder="eg. Want to know about the process"
                name="subject"
                className="placeholder:opacity-100 focus:!border-gray-400 !border-gray-400"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
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

            <div className="grid grid-cols-1 gap-3">
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
              {/* <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Phone Number
                </Typography>
                <Input
                  required
                  type="number" // Changed to text for better flexibility with different phone formats
                  color="gray"
                  size="lg"
                  placeholder="eg. 01700000000"
                  name="phone"
                  className="placeholder:opacity-100 !border-gray-400 focus:!border-gray-400"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div> */}
            </div>

            {/* Your Country */}
            {/* <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Your Country
              </Typography>
              <select
                required
                className={`w-full  outline-0 focus:outline-none  px-5 py-3 rounded-md  !border-gray-400  border placeholder:opacity-100 focus:!border-2 text-sm`}
                name="country"
                defaultValue={""}
              >
                <option value={""} disabled>
                  <p>Select Your Country</p>
                </option>
                {countries.map(({ name, flags }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div> */}

            {/* Your Question */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Your Question
              </Typography>
              <Textarea
                rows={4}
                required
                placeholder="eg. Start Your Path to Global Education"
                name="question" // Added name attribute for question
                className="placeholder:opacity-100 focus:!border-gray-400 !border-gray-400"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button type="submit" className="ml-auto bg-[#00399F]" >
              Submit Enquiry
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
