'use client';
import { useState } from "react";
import ImageUpload from "./components/ImageUpload";

export default function CreateBlog() {
  const [formData, setFormData] = useState({
    readTime: "",
    title: "",
    writer: "",
    bannerImage: "",
    description: "",
    category: "",
    h1: "",
    paragraph: "",
    url: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (url: string) => {
    setFormData({ ...formData, bannerImage: url });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Blog published successfully!");
        setFormData({
          readTime: "",
          title: "",
          writer: "",
          bannerImage: "",
          description: "",
          category: "",
          h1: "",
          paragraph: "",
          url: "",
        });
      } else {
        setMessage(result.error || "Failed to publish blog.");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-20 mb-10 pb-40">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create a New Blog Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Read Time */}
          <div>
            <label className="block text-gray-700 font-semibold">Read Time</label>
            <input
              placeholder="in minutes"
              type="number"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter the blog title"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Writer */}
          <div>
            <label className="block text-gray-700 font-semibold">Writer</label>
            <input
              type="text"
              name="writer"
              value={formData.writer}
              onChange={handleChange}
              placeholder="Enter the writer's name"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Upload Banner Image</label>
            <ImageUpload setImgUrl={handleImageUpload}  />
            {formData.bannerImage && (
              <p className="mt-2 text-sm text-green-600">Image uploaded successfully!</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="Add a brief description of the blog"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter blog category"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Main Heading (H1) */}
          <div>
            <label className="block text-gray-700 font-semibold">Main Heading (H1)</label>
            <input
              type="text"
              name="h1"
              value={formData.h1}
              onChange={handleChange}
              placeholder="Enter the main heading"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Paragraph */}
          <div>
            <label className="block text-gray-700 font-semibold">Paragraph</label>
            <textarea
              name="paragraph"
              value={formData.paragraph}
              onChange={handleChange}
              rows={4}
              placeholder="Enter blog content"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* URL */}
          <div>
            <label className="block text-gray-700 font-semibold">Blog URL</label>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Enter blog URL"
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`text-center mt-4 ${
                message.includes("successfully") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
