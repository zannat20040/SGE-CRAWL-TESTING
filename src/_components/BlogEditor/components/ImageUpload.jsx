"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageUpload = ({ setImgUrl, initialImageUrl = [] }) => {
  const [imageURL, setImageURL] = useState(initialImageUrl || ""); // Default to passed initial value

  useEffect(() => {
    setImageURL(initialImageUrl); // Update state when initialImageUrl changes
  }, [initialImageUrl]);
  // To store the uploaded image URL
  const [status, setStatus] = useState(""); // To store the upload status

  const handleImageUpload = async (e) => {
    const fileInput = e.target.files[0];
    if (!fileInput) {
      setStatus("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", fileInput);

    try {
      setStatus("Uploading...");
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setImageURL(result.data.url);
        setImgUrl(result.data.url); // Pass URL back to the parent
        setStatus("Upload successful!");
      } else {
        setStatus("Upload failed. Try again!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <input
        required
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block w-full text-sm text-gray-600
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />
      {status && <p className="text-sm mt-2">{status}</p>}
      {imageURL && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <Image
            width={100}
            height={100}
            src={imageURL}
            alt="Uploaded"
            className="rounded-md h-28 w-44"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
