"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ImageUpload({
  setImgUrl,
  initialImageUrl,
  setIsImageUploaded,
  isImageUploaded,
  id,
}) {
  const [showName, setShowName] = useState({ name: null });
  const [imagePreview, setImagePreview] = useState(null); // Store image preview URL
  //   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Error state

  if (initialImageUrl && !imagePreview) {
    setImagePreview(initialImageUrl); // Set initial image preview
    setShowName({ name: "Change file" });
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setShowName({ name: file.name });

      // Create a preview URL for the selected image
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);

      try {
        setError(""); // Reset error state
        setIsImageUploaded(true);
        // Create a form data to send to ImgBB
        const formData = new FormData();
        formData.append("image", file);

        // Upload image to ImgBB
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
          formData
        );

        if (response.data.success) {
          // Set image URL and pass it to the parent component
          setImgUrl(response.data.data.url);
        } else {
          setError("Image upload failed. Please try again.");
        }
      } catch (err) {
        console.log(err);

        setError("Image upload failed. Please try again.");
      } finally {
        setIsImageUploaded(false);
      }
    }
  };

  return (
    <div className="flex justify-start flex-col items-start">
      {/* File input label */}
      <label
        className="flex h-full w-max items-end gap-4 bg-blue-50 rounded-full px-4 py-2 hover:bg-blue-100 duration-200 text-white"
        htmlFor={id}
      >
        <p className="text-sm font-bold text-blue-800">
          {showName.name ? showName.name : "Choose file"}
        </p>
      </label>

      {/* Hidden file input */}
      <input
        onChange={handleFileChange}
        className="hidden"
        id={id}
        type="file"
      />

      {/* Preview of the selected image */}
      {imagePreview && (
        <div className="mt-4">
          <Image
            width={100}
            height={100}
            src={imagePreview}
            alt="Image Preview"
            className="w-36 h-28 rounded-lg"
          />
        </div>
      )}

      {/* Loading state */}
      {isImageUploaded ? (
        <p className="text-blue-600 text-sm mt-2 font-bold">Uploading...</p>
      ) : error ? (
        <p className="mt-2 text-red-600 font-bold">{error}</p>
      ) : imagePreview ? (
        <p className="mt-2 text-sm text-green-600 font-bold">
          Image uploaded successfully!
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
