import React, { useState } from "react";
import axios from "axios"; // Make sure to import axios
import Image from "next/image";

export default function MultiImageUpload({
  setImageGallery,
  initialImagesUrl = [],
  isImagesUploaded,
  setIsImagesUploaded,
}) {
  const [imagePreviews, setImagePreviews] = useState(initialImagesUrl); // Initialize with initial images if available
  const [error, setError] = useState(""); // Error state
  const [success, setSuccess] = useState("");

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...fileURLs]);

    const uploadedUrls = [];
    try {
      setError(""); // Reset error state
      setSuccess("");
      setIsImagesUploaded(true);

      for (const file of files) {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
          formData
        );

        if (response.data.success) {
          uploadedUrls.push(response.data.data.url);
        }
      }

      if (uploadedUrls.length > 0) {
        setImageGallery(uploadedUrls); // Append new URLs to the gallery
        setSuccess("Images uploaded successfully!");
      } else {
        setError("Image upload failed. Please try again.");
      }
    } catch (uploadError) {
      setError("Image upload failed. Please try again.");
      console.log("Error uploading images:", uploadError);
    } finally {
      setIsImagesUploaded(false);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(updatedPreviews); // Remove image from previews
    setImageGallery(updatedPreviews);
  };

  return (
    <div className="flex flex-col items-start">
      <label
        className="flex h-full w-max items-end gap-4 bg-blue-50 rounded-full px-4 py-2 hover:bg-blue-100 duration-200 text-white"
        htmlFor="multiple"
      >
        <p className="text-sm font-bold text-blue-800">
          {imagePreviews.length > 0 ? "Choose more files" : "Choose files"}
        </p>
      </label>
      <input
        onChange={handleImageUpload}
        className="hidden"
        id="multiple"
        multiple
        type="file"
      />

      {/* Image Previews */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative w-full h-32">
            <Image
              width={100}
              height={100}
              src={preview}
              alt={`preview ${index + 1}`}
              className="object-cover w-full h-full rounded-md"
            />
            {/* Remove Button */}
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
            >
              X
            </button>
          </div>
        ))}
      </div>
      {/* Loading state */}
      {isImagesUploaded ? (
        <p className="text-blue-600 text-sm mt-2 font-bold">Uploading...</p>
      ) : error ? (
        <p className="mt-2 text-red-600 font-bold">{error}</p>
      ) : success ? (
        <p className="mt-2 text-sm text-green-600 font-bold">
          Image uploaded successfully!
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
