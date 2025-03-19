"use client"
import axios from 'axios';
import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2';
import { FiUploadCloud } from "react-icons/fi";
import Image from 'next/image';


function Page() {
    const fileInput = useRef(null)
    const fileInput2 = useRef(null)
    const [largeImageURL, setlargeImageURL] = useState()
    const [phoneImageURL, setphoneImageURL] = useState()
    const [PImagePlaceholder,setPImagePlaceholder] = useState()
    const [PImagePlaceholder2,setPImagePlaceholder2] = useState()
    const imageUploadUrl=  `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`

    // console.log("Large: "+largeImageURL);
    // console.log("Phone: "+phoneImageURL);
    

    const handelImage = ()=>{
        fileInput.current.click()
    }
    const handelImage2 = ()=>{
        fileInput2.current.click()
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setPImagePlaceholder(event.target.result);
        };
        setPImagePlaceholder(reader.readAsDataURL(file))
        reader.readAsDataURL(file);
    };
    const handleFileChange2 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setPImagePlaceholder2(event.target.result);
        };
        setPImagePlaceholder2(reader.readAsDataURL(file))
        reader.readAsDataURL(file);
    };
    
    const apiUrl = process.env.NEXT_PUBLIC_API_FORM_URL;

    const fromSubmit = async(e)=>{
        e.preventDefault()
        const form1 = new FormData()
        const form2 = new FormData()

        const fromData = e.target
        const image = e.target.desktopBanner.files[0]
        const image2 = e.target.phoneBanner.files[0]
        const formLink = fromData.FormLink.value

        form1.append("image", image);
        form2.append("image", image2);

        try {
            // Upload desktop image
            const res1 = await axios.post(imageUploadUrl, form1, {
                headers: { "content-type": "multipart/form-data" },
            });
    
            // Upload phone image
            const res2 = await axios.post(imageUploadUrl, form2, {
                headers: { "content-type": "multipart/form-data" },
            });
    
            setlargeImageURL(res1?.data?.data?.display_url);
            setphoneImageURL(res2?.data?.data?.display_url);
            
                await  axios.put(`${apiUrl}/welcome-modal`, {
                    largeImageURL: res1?.data?.data?.display_url,
                    phoneImageURL: res2?.data?.data?.display_url, formLink})
                .then(res=> res && 
                    Swal.fire({
                        title:"New  Banner published.",
                        icon:"success"
                    })
                )
                .catch(error=> 
                    Swal.fire({
                        title: error,
                        icon:"error"
                    })
                )
                const Alldata = {image, image2, largeImageURL, phoneImageURL, formLink}
                console.log(Alldata);
            
        } catch (error) {
            console.error("Image upload failed:", error);
        }

        
    }

  return (
    <div className='flex items-center justify-center w-full min-h-[100vh] mb-[100px]'>
        <form onSubmit={fromSubmit} className='p-[10px] bg-gray-300/50 rounded-md flex flex-col items-center shadow-lg w-[90%]  md:w-[70%] gap-1'>
        <div className='w-full  flex flex-col md:flex-row items-center justify-between gap-2'>
        <div className='w-[90%] md:w-[49%] flex flex-col items-center'>
        <div
            className='flex gap-2 justify-center mt-[10px]'
            >
            <input 
                // required
                ref={fileInput}
                className='hidden'
                onChange={handleFileChange}
                type="file" name="desktopBanner" id="image" />
                <Image onClick={handelImage} className='w-full  object-contain' src={PImagePlaceholder} alt="" />
            </div>
        <label 
            className='text-md font-[500] text-center bg-green-700 text-green-300 p-[10px] rounded-md hover:scale-[1.1] flex items-center hover:text-white mb-[10px] ease-in-out duration-100 cursor-pointer w-full justify-center gap-1 mt-[10px]'
            htmlFor="image"><FiUploadCloud/> Banner for desktop</label>
        </div>
        <div  className= 'w-[90%] md:w-[49%] flex flex-col items-center'>
        <div
            className='flex gap-2 justify-center mt-[10px]'
            >
            <input 
                // required
                ref={fileInput2}
                className='hidden'
                onChange={handleFileChange2}
                type="file" name="phoneBanner" id="imagePhone" />
                <Image onClick={handelImage2} className='w-full  object-contain' src={PImagePlaceholder2} alt="" />
            </div>
        <label 
            className='text-md font-[500] text-center bg-green-700 text-green-300 p-[10px] rounded-md hover:scale-[1.1] flex items-center hover:text-white mb-[10px] ease-in-out duration-100 cursor-pointer w-full justify-center gap-1 mt-[10px]'
            htmlFor="imagePhone"><FiUploadCloud/> Banner for Phone</label>
        </div>
        </div>
            {/* <input type="text" className='w-full text-xl p-[5px] rounded-md '  name="DesktopBanner" id="" placeholder='Banner for Desktop'  />
            <input type="text" className='w-full text-xl p-[5px] rounded-md '  name="MobileBanner" id="" placeholder='Banner for Mobie'  /> */}
            <input required type="text" className='w-full text-xl p-[5px] rounded-md '  name="FormLink" id="" placeholder='Form link'  />
            <input type="submit" className='text-orange-800 hover:text-white ease-in-out duration-100 hover:scale-[1.1] cursor-pointer  w-[50%] mt-[10px]  bg-orange-400 p-[10px] rounded-md'  value="Publish" />
        </form>
    </div>
  )
}

export default Page