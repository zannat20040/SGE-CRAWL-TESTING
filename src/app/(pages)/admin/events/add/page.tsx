"use client";
import React, { useState } from "react";
import ImageUpload from "@/_components/Events/Events_Components/ImageUpload";
// import MultiImageUpload from "@/_components/Events/Events_Components/MultiImageUpload";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import MultiImageUpload from "@/_components/BlogEditor/components/MultiImageUpload";

const isValidEventURL = (url: string): boolean =>
  /^[a-z0-9]+(-[a-z0-9]+)*$/.test(url);

export default function Page() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    eventLargeImage: "",
    eventPhoneImage: "",
    description: "",
    place: "",
    eventStartDate: "",
    eventStartTime: "",
    eventEndDate: "",
    eventEndTime: "",
    organizer: "",
    category: "",
    isOnline: false,
    joinURL: "",
    eventRegistrationForm: "",
    eventURL: "",
    imageGallery: [] as string[],
  });

  const [loading, setLoading] = useState(false);
  const [urlAvailabilityMessage, setUrlAvailabilityMessage] =
    useState<string>("");
  const [isImageUploaded, setIsImageUploaded] = useState(false); // Track image upload status
  const [isMobileImageUploaded, setIsMobileImageUploaded] = useState(false);
  const [isImagesUploaded, setIsImagesUploaded] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (name === "isOnline" && value === "on") {
      setFormData((prev) => ({
        ...prev,
        isOnline: !prev.isOnline,
        place: "", // Clear the place field when switching to online event
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData((prev) => ({
      ...prev,
      eventLargeImage: url,
    }));
  };
  const handleMobileImageUpload = (url: string) => {
    setFormData((prev) => ({
      ...prev,
      eventPhoneImage: url,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);

    const startDateTime = new Date(
      `${updatedFormData.eventStartDate}T${updatedFormData.eventStartTime}`
    );
    const endDateTime = new Date(
      `${updatedFormData.eventEndDate}T${updatedFormData.eventEndTime}`
    );

    if (startDateTime > endDateTime) {
      setDateError(true);
    } else {
      setDateError(false); // Clear error if dates are valid
    }
  };

  const handleImageGallery = (imageUrls: string[]) => {
    // Ensure imageUrls is always an array before using it
    setFormData((prev) => ({
      ...prev,
      imageGallery: [...(imageUrls || [])], // Append to the existing gallery, ensuring imageUrls is an array
    }));
  };

  const handleEventURLChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const url = e.target.value;
    setFormData((prev) => ({
      ...prev,
      eventURL: url,
    }));

    // Clear the URL availability message if the field is empty
    if (!url) {
      setUrlAvailabilityMessage("");
      return;
    }

    // Check URL format
    if (!isValidEventURL(url)) {
      setUrlAvailabilityMessage("Invalid event URL format.");
      return;
    }

    // Check URL availability
    const isUrlAvailable = await checkEventURLAvailability(url);
    if (isUrlAvailable) {
      setUrlAvailabilityMessage(
        "Event URL is already taken. Please choose another."
      );
    } else {
      setUrlAvailabilityMessage("Event URL is available.");
    }
  };

  const checkEventURLAvailability = async (url: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_FORM_URL}/events/check-event-url/${url}`
      );

      return response.data.exists;
    } catch (error) {
      console.error("Error checking URL availability:", error);
      return false; // Assume URL is unavailable if there's an error
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (isImageUploaded || isImagesUploaded || isMobileImageUploaded) {
      Swal.fire({
        icon: "error",
        title: "Stop!",
        text: "Please wait to complete uploading event image before submitting.",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_FORM_URL}/events`,
        formData
      );

      if (response.status === 200 || response.data) {
        Swal.fire({
          icon: "success",
          title: "Great",
          text: "Event created successfully",
        });
        setFormData({
          title: "",
          eventLargeImage: "",
          eventPhoneImage: "",
          description: "",
          eventStartDate: "",
          eventStartTime: "",
          eventEndDate: "",
          eventEndTime: "",
          organizer: "",
          category: "",
          isOnline: false,
          place: "",
          joinURL: "",
          eventURL: "",
          imageGallery: [],
          eventRegistrationForm: "",
        });
        router.push("/admin/events");
      }
    } catch (error: unknown) {
      console.error("Error submitting event:", error);

      let errorMessage = "An error occurred. Please try again later.";

      if (axios.isAxiosError(error)) {
        errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      Swal.fire({
        icon: "error",
        title: "Oh no!",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-20 mb-10 pb-40">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create a New Event
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Title
              <span className="text-red-500 font-bold text-lg ml-2">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter the event title"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/*large Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Large Event Banner{" "}
              <span className="text-sm italic ml-2 font-light">
                (Allowed only 1365x768px)
              </span>
              <span className="text-red-500 font-bold text-lg ml-2">*</span>
            </label>
            <ImageUpload
              id="largeUpload"
              setImgUrl={handleImageUpload}
              initialImageUrl={formData.eventLargeImage}
              setIsImageUploaded={setIsImageUploaded}
              isImageUploaded={isImageUploaded}
            />
          </div>

          {/*small Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Event Banner for Mobile{" "}
              <span className="text-sm italic ml-2 font-light">
                (Allowed only 1024x1024px )
              </span>
              <span className="text-red-500 font-bold text-lg ml-2">*</span>
            </label>
            <ImageUpload
              id="smallUpload"
              setImgUrl={handleMobileImageUpload}
              initialImageUrl={formData.eventPhoneImage}
              setIsImageUploaded={setIsMobileImageUploaded}
              isImageUploaded={isMobileImageUploaded}
            />
          </div>

          {/* Multiple image upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Multiple Images of Event
            </label>
            <MultiImageUpload
              setImageGallery={handleImageGallery}
              setIsImagesUploaded={setIsImagesUploaded}
              isImagesUploaded={isImagesUploaded}
              // initialImagesUrl={formData?.imageGallery}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Description
              <span className="text-red-500 font-bold text-lg ml-2">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="Add a brief description of the event"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
              required
            ></textarea>
          </div>

          {/* Organizer */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Organizer
            </label>
            <input
              type="text"
              name="organizer"
              value={formData.organizer}
              onChange={handleChange}
              placeholder="Enter organizer name"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* event URL */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Event Page Url
              <span className="text-red-500 font-bold text-lg ml-2">*</span>
            </label>
            <input
              type="text"
              name="eventURL"
              value={formData.eventURL}
              onChange={handleEventURLChange}
              placeholder="Enter page url, eg: event-page-url"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {urlAvailabilityMessage ? (
            <p
              className={`font-bold flex gap-2 items-center ${
                urlAvailabilityMessage === "Event URL is available."
                  ? "text-green-600"
                  : "text-red-600"
              } `}
            >
              {urlAvailabilityMessage === "Event URL is available." ? (
                <IoCheckmarkCircle className="text-xl" />
              ) : (
                <IoCloseCircle className="text-xl" />
              )}

              <span> {urlAvailabilityMessage}</span>
            </p>
          ) : (
            ""
          )}

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter event category"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Online Event Checkbox */}
          <div className="flex items-center gap-2">
            <input
              id="onlinecheckbox"
              type="checkbox"
              name="isOnline"
              checked={formData.isOnline}
              onChange={handleChange}
            />
            <label
              htmlFor="onlinecheckbox"
              className="text-gray-700 font-semibold cursor-pointer"
            >
              Online Event
            </label>
          </div>

          {/* Place (Only if not online) */}
          {!formData.isOnline && (
            <>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Place{" "}
                  <span className="text-red-500 font-bold text-lg ml-2">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="Enter event location"
                  className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Event Live Link (If available)
                </label>
                <input
                  type="url"
                  name="joinURL"
                  value={formData.joinURL}
                  onChange={handleChange}
                  placeholder="Enter Live Shared Link (if applicable)"
                  className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Event Registration Link (If available)
                </label>
                <input
                  type="url"
                  name="eventRegistrationForm"
                  value={formData.eventRegistrationForm}
                  onChange={handleChange}
                  placeholder="Enter event registration link (if applicable)"
                  className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
                />
              </div>
            </>
          )}

          {/* Join URL (Only if online) */}
          {formData.isOnline && (
            <>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Online Join Link
                  <span className="text-red-500 font-bold text-lg ml-2">*</span>
                </label>
                <input
                  required
                  type="url"
                  name="joinURL"
                  value={formData.joinURL}
                  onChange={handleChange}
                  placeholder="Enter Live Shared Link (if applicable)"
                  className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Event Registration Link (If available)
                </label>
                <input
                  type="url"
                  name="eventRegistrationForm"
                  value={formData.eventRegistrationForm}
                  onChange={handleChange}
                  placeholder="Enter event registration link (if applicable)"
                  className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
                />
              </div>
            </>
          )}

          {/* Start Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">
                Start Date
                <span className="text-red-500 font-bold text-lg ml-2">*</span>
              </label>
              <input
                type="date"
                name="eventStartDate"
                value={formData.eventStartDate}
                onChange={handleDateChange}
                className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Start Time
                <span className="text-red-500 font-bold text-lg ml-2">*</span>
              </label>
              <input
                type="time"
                name="eventStartTime"
                value={formData.eventStartTime}
                onChange={handleDateChange}
                className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          {/* End Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">
                End Date
                <span className="text-red-500 font-bold text-lg ml-2">*</span>
              </label>
              <input
                type="date"
                name="eventEndDate"
                value={formData.eventEndDate}
                onChange={handleDateChange}
                className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                End Time
                <span className="text-red-500 font-bold text-lg ml-2">*</span>
              </label>
              <input
                type="time"
                name="eventEndTime"
                value={formData.eventEndTime}
                onChange={handleDateChange}
                className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {dateError && (
            <p className="text-red-600 text-sm font-semibold flex gap-2 items-center ">
              <IoCloseCircle className="text-xl" />
              <span>End Date and Time must be after Start Date and Time.</span>
            </p>
          )}

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={
                !formData.title ||
                loading ||
                dateError ||
                urlAvailabilityMessage !== "Event URL is available." ||
                !formData.eventLargeImage ||
                !formData.eventPhoneImage ||
                !formData.description ||
                !formData.eventStartDate ||
                !formData.eventEndDate ||
                !formData.eventEndTime ||
                !formData.eventEndDate ||
                !formData.eventURL ||
                (formData.isOnline ? !formData.joinURL : !formData.place)
              }
              className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ${
                !formData.title ||
                dateError ||
                urlAvailabilityMessage !== "Event URL is available." ||
                !formData.eventLargeImage ||
                !formData.eventPhoneImage ||
                !formData.description ||
                !formData.eventStartDate ||
                !formData.eventEndDate ||
                !formData.eventEndTime ||
                !formData.eventEndDate ||
                !formData.eventURL ||
                (formData.isOnline ? !formData.joinURL : !formData.place) ||
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {loading ? "Creating..." : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
