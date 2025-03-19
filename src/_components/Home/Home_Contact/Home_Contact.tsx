"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Home_Contact.css";
import Swal from "sweetalert2";
import destinationData from "../../../../public/json/destination_data.json";
import PhoneValidation from "@/_components/PhoneValidation/PhoneValidation";
import 'react-phone-input-2/lib/style.css'
// import { title } from "process";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

const Home_Contact = () => {
  const text = "DREAM BIG STUDY ABROAD.";
  const Letter = text.split("");
 

  // const [selectedDestination, setSelectedDestination] = useState("");
  const [validateInput, setvalidateInput] = useState("")

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDestination, setSelectedDestination] = useState("");

  const getIntakeOptions = (destinationName: string): string[] => {
    const destination = destinationData?.find(
      (data) => data.destinationName === destinationName
    );

    return destination?.academicIntake
      ? destination.academicIntake.map(
          (intake: { qualification: string }) => intake.qualification
        )
      : [];
  };

  const [phone, setPhone]= useState<string>("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneCode: "",
    studyDestination: "",
    studyYear: "",
    studyIntake: "",
    agreeToTerms: false,
  });

  useEffect(()=>{
    setFormData((prevData)=>({
      ...prevData,
      phoneNumber: phone
    }))
  },[phone])
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      // Use checked property if input is a checkbox; otherwise, use value
      [name]:
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : value,
    });

    // Update selectedDestination when changing studyDestination
    if (name === "studyDestination") {
      // setSelectedDestination(value);
      setFormData((prev) => ({
        ...prev,
        studyIntake: "", // Reset study intake when destination changes
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_API_FORM_URL;
  
    // Combine the phone code and phone number
    const fullPhoneNumber = `${formData.phoneCode}${formData.phoneNumber}`;
  
    try {
      if (!validateCaptcha(validateInput)) {
        Swal.fire({
          icon: 'error',
          title: 'Captcha Validation Failed',
          text: 'Please complete the captcha correctly.',
        });
        return;
      }
  
      const response = await axios.post(`${apiUrl}/apply`, {
        ...formData,
        phoneNumber: fullPhoneNumber, // Send the full phone number
      });
  
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "Our counsellor will contact you soon",
        });
  
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          phoneCode: "",
          studyDestination: "",
          studyYear: "",
          studyIntake: "",
          agreeToTerms: false,
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was an error submitting your form. Please try again later.',
      });
    }
  };
  

  return (
    <div className="bg-[#E7E7E7] pt-[98px] pb-[250px] overflow-hidden px-4 ">
      <div className="text-center">
        <h2 className="poppins-bold lg:text-[38px] text-[28px] text-[#081831] leading-[130%] -tracking-[0.02em] lg:pb-[39px] pb-5">
          It’s Time to Start Your Journey With Us
        </h2>
        <p className="mulish-regular text-[16px] text-[#1F1F1F] leading-[150%] pb-[18px]">
          Book Your{" "}
          <span className="bg-[#88F3D0] rounded-sm px-1 font-medium py-1">
            FREE
          </span>{" "}
          Consultation with Certified Counsellors
        </p>
      </div>
      <div className="flex justify-center text-center">
        <div className="max-w-[565px] lg:mx-auto md:mx-auto mx-5">
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white rounded w-full lg:h-[40px] h-[45px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none block mx-auto mb-[10px]"
            />
            <div className="relative text-center mb-[10px]">
              <input
                required
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" bg-white rounded w-full lg:h-[40px] h-[45px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none pr-10"
              />
              <span className="absolute flex items-center right-[10px] top-3 inter-regular text-[12px] text-[#8E8E8E]">
                .com
              </span>
            </div>
            <div className="flex gap-2">
              
              <PhoneValidation phone = {phone} setPhone={setPhone}/>
            </div>

            <select
              name="studyDestination"
              value={formData.studyDestination}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="" disabled>
                Preferred Study Destination
              </option>
              {destinationData?.map((destination) => (
                <option
                  key={destination?.destinationName}
                  value={destination?.destinationName}
                >
                  {destination?.destinationName}
                </option>
              ))}
              <option value="Others">Others</option>
            </select>

            <select
              name="studyYear"
              value={formData.studyYear}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="">Preferred Study Year</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>

            <select
              name="studyIntake"
              value={formData.studyIntake}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="">Preferred Study Intake</option>
              {getIntakeOptions(formData.studyDestination)?.map(
                (intake, index) => (
                  <option key={index} value={intake}>
                    {intake}
                  </option>
                )
              )}
              <option value="Others">Others</option>
            </select>

            <div className="flex items-start lg:items-center space-x-2 lg:max-w-[565px] max-w-[290px] lg:mx-auto mb-[10px]">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1"
              />
              <p className="poppins-regular text-[12px] leading-[22px]">
                By clicking you agree to our{" "}
                <Link href="/privacy" className="text-[#008AFF] cursor-pointer">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <span className="text-[#008AFF] cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                *
              </p>
            </div>

            <div className="flex gap-2 w-full rounded-md flex-col md:flex-row items-center">
                    <div>
                    <LoadCanvasTemplate />
                    </div>
                    <input 
                    type="text" 
                    className="bg-white rounded w-full lg:h-[40px] h-[30px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none block mx-auto mb-[10px]"
                    value={validateInput}
                    onChange={(e)=>setvalidateInput(e.target.value)}
                     />
                </div>

            <button
              type="submit"
              className="lg:poppins-bold mulish-regular lg:text-[18px] text-[14px] lg:px-[81px] lg:py-[10px] px-[17px] py-2 bg-[#2563EB] hover:bg-[#3D7DED] text-white rounded-[32px]"
              // disabled={!formData.agreeToTerms} // Disable button if terms are not agreed
            >
              Book Free Counselling
            </button>
          </form>
        </div>
      </div>

      <div className="lg:block hidden">
        <div className="App">
          <section>
            {Letter.map((item, index) => (
              <span
                key={index}
                className="letters"
                style={{ transform: `rotate(${index * 15.5}deg)` }}
              >
                {item}
              </span>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home_Contact;
