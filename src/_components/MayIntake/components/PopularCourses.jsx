import React from "react";
import { FaBusinessTime, FaLaptopCode, FaHardHat, FaGlobe, FaHeartbeat, FaPalette } from "react-icons/fa";

const PopularCourses = () => {
  const courses = [
    { id: 1, name: "Business & Management", icon: <FaBusinessTime size={40} className="text-blue-500" /> },
    { id: 2, name: "Computer Science & IT", icon: <FaLaptopCode size={40} className="text-purple-500" /> },
    { id: 3, name: "Engineering & Technology", icon: <FaHardHat size={40} className="text-orange-500" /> },
    { id: 4, name: "Social Sciences and Humanities", icon: <FaGlobe size={40} className="text-green-500" /> },
    { id: 5, name: "Medicine & Health", icon: <FaHeartbeat size={40} className="text-red-500" /> },
    { id: 6, name: "Arts & Design", icon: <FaPalette size={40} className="text-pink-500" /> },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Popular Courses for <span className="text-red-500">May Intake</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{course.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">{course.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
