/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

function PhoneValidation({phone,setPhone}:any) {
      // Phone validation Function
    //   const [phone, setPhone] = useState("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [isValid, setIsValid] = useState(true);      
      
      const validatePhoneNumber = (phoneNumber: any, country: any) => {
        if (!country) return false;
        return phoneNumber.startsWith(country.dialCode);
      };
  return (
    <div className='w-full mb-[5px]'>
        <PhoneInput
                country={"gb"}
                value={phone}
                onChange={(value, country) => {
                  setPhone(value);
                  setIsValid(validatePhoneNumber(value, country));
                }}
                containerClass="w-full mt-[5px]"
                inputClass="!w-full !pl-[70px] !h-[45px] !bg-white !border !border-gray-300 !rounded-lg !outline-none !text-sm"
                buttonClass="!absolute !left-2 !top-1/2 !-translate-y-1/2 !border-r !border-gray-300 !bg-gray-100 !p-2"
                dropdownClass="!bg-white !border !border-gray-300 !shadow-md"
              />

            {/*Phone Validation  */}
    </div>
  )
}

export default PhoneValidation