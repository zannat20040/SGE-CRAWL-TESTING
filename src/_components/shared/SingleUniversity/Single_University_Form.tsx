/* eslint-disable react/prop-types */
import { useState } from "react";
import Image from "next/image";
import Input from "./Input";
import Swal from "sweetalert2";

export default function Single_University_Form({Name}:{Name:string}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: 0,
    countryOfResidence: "",
    desiredCourse: "",
    desiredUniversity: "",
    lastAcademicQualification: "",
    englishTestStatus: "",
    nearestSGEOffice: "",
    universityName:Name
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_FORM_URL}/universityRegistrations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      }

      // Optionally handle success, e.g., show a message or reset the form
      Swal.fire({
        icon: "success",
        title: "Thank You",
        text: "Our counsellor will contact you soon"
      });
      setFormData({
        name: "",
        email: "",
        phoneNumber: 0,
        countryOfResidence: "",
        desiredCourse: "",
        desiredUniversity: "",
        lastAcademicQualification: "",
        englishTestStatus: "",
        nearestSGEOffice: "",
        universityName:Name

      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const Label = ({ text }: { text: string }) => {
    return (
      <p className="font-medium text-lg">
        {text}
        <span className="text-red-500">*</span>
      </p>
    );
  };

  return (
    <div className="font-poppins ml-auto w-full mt-10">
      <div className="shadow-xl rounded-2xl">
        <div className="bg-[#3b82f6] text-center text-white p-5 rounded-t-2xl">
          <h2 className="md:text-2xl text-xl font-semibold">
            Want to Study at {Name}?
          </h2>
        </div>
        <form className="p-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <Label text="Name" />
            <Input text="Your Name" type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <Label text="Email" />
            <div className="flex items-center justify-between border-[2px] hover:border-[#3b82f6] w-full p-1 rounded-md">
              <input
                className="focus:outline-none placeholder:text-xs placeholder:text-gray-300 w-full"
                placeholder="Your Email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="text-gray-400 bg-[#fafafa] text-xs px-2">.com</span>
            </div>
          </div>
          <div>
            <Label text="Phone Number" />
            <div className="flex items-center gap-5 text-xs">
              <span className="flex p-2 border-[1px] rounded-md">
                <Image width={100} height={100} className="w-auto h-auto" src="https://i.ibb.co.com/QjQfzT1/contents.png" alt="" />
                <p className="pr-2">+880</p>
              </span>
              <Input text="1891123654" type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label text="Country of Residence" />
            <Input text="Select your current country" type="text" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} />
          </div>
          <div>
            <Label text="Desired Course" />
            <Input text="Write your desired course name" type="text" name="desiredCourse" value={formData.desiredCourse} onChange={handleChange} />
          </div>
          <div>
            <Label text="Desired University" />
            <Input text="Write your desired university name" type="text" name="desiredUniversity" value={formData.desiredUniversity} onChange={handleChange} />
          </div>
          <div>
            <Label text="Last Academic Qualification" />
            <Input text="Bachelor" type="text" name="lastAcademicQualification" value={formData.lastAcademicQualification} onChange={handleChange} />
          </div>
          <div>
            <Label text="English Test Status" />
            <Input text="IELTS" type="text" name="englishTestStatus" value={formData.englishTestStatus} onChange={handleChange} />
          </div>
          <div>
            <Label text="Which SGE Office is Nearest to You?" />
            <Input text="Dhanmondi, Dhaka" type="text" name="nearestSGEOffice" value={formData.nearestSGEOffice} onChange={handleChange} />
          </div>
          <div className="p-5">
            <button type="submit" className="font-inter bg-[#2563EB] hover:bg-[#3b82f6] text-white px-5 py-4 text-xs w-full rounded-full">
              Schedule Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
