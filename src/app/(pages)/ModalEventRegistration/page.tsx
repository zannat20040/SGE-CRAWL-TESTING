"use client";
import PhoneValidation from '@/_components/PhoneValidation/PhoneValidation'
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';


function EventRegistrationForm() {
  const [phoneNumber, setPhone]= useState<string>("")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SubmitFunction = (e:any)=>{
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    e.preventDefault()
    const name = e.target.name.value
    const phone = phoneNumber
    const email = e.target.email.value
    const interestedCourse = e.target.course.value
    const country = e.target.country.value
    const AllInfo = {name, phone, email, interestedCourse, country}
    if (name&& phoneNumber && email && interestedCourse && country) {
      axios.post("https://api-form-shabuj-global-main.vercel.app/modal-registration", AllInfo)
      .then(()=>{
        Swal.fire({
          title:`your registration submitted successfully`,
          icon:"success"
        })
      })
      .catch(error=>{
        console.log(error);

        if (error.response && error.response.data && error.response.data.error) {
          const errorMessage = error.response.data.error;
          if (errorMessage.includes('duplicate key error collection')) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'This email is already registered. Please use a different email.',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
              text: 'Please try again later.',
            });
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            text: 'Please try again later.',
          });
        }
      })
    }
    else{
      Swal.fire({
        title:"Fill all the data",
        icon:"error"
      })
    }
    
  }
  return (
    <div className="pb-20 min-h-screen flex flex-col items-center justify-center bg-[#EFF6FF] text-center px-5">
      <form onSubmit={(e)=>SubmitFunction(e)} action="" className='flex flex-col p-[10px] rounded-md bg-gray-300/45 w-[95%] md:w-[70%]'>
      <h1 className='text-xl md:text-4xl text-center mb-[20px]'>Register Now</h1>
        <input required  className='p-[10px] text-[14px] rounded-md mb-[5px]'  type="text" name="name" id="" placeholder='Name' />
        <PhoneValidation phone = {phoneNumber} setPhone={setPhone}/>
        <input required  className='p-[10px] text-[14px] rounded-md mt-[5px]  mb-[10px]'  type="email" name="email" id="" placeholder='Email' />
        <input required  className='p-[10px] text-[14px] rounded-md mb-[10px]'  type="text" name="course" id="" placeholder='Interested course' />
        <input required  className='p-[10px] text-[14px] rounded-md mb-[10px]'  type="text" name="country" id="" placeholder='Interested countey' />
        <input className='cursor-pointer bg-green-200 text-green-600 text-xl w-fit p-[10px] rounded-md hover:text-white ease-in-out duration-75 ml-auto' type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default EventRegistrationForm