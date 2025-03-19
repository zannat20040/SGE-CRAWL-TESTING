import React, { useState } from "react";
import Data from "../../../../../../../public/json/ukUni.json";
import Image from "next/image";

const Universities = () => {
  // Using the JSON data
  const universities = Data;

  const [search, setSearch] = useState("");

  // Filter universities with country "uk" and by search term
  const filteredUniversities = universities
    .filter((uni) => uni.country.toLowerCase() === "uk") // Filter by country
    .filter((uni) =>
      uni.Name.toLowerCase().includes(search.toLowerCase()) // Filter by search
    );

  return (
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Top Universities Offering <span className="text-blue-600">May Intake</span>
      </h2>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search universities"
          className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table Container with Fixed Height */}
      <div className="max-h-96 overflow-y-auto border rounded-lg">
        <table className="w-full table-auto border-collapse border border-gray-200 shadow-sm">
          <thead className="sticky top-0 bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Logo</th>
              <th className="px-4 py-3 text-left">University Name</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUniversities.map((uni, index) => (
              <tr
                key={index}
                className={`border-t ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <td className="px-4 py-3">
                  <Image
                    width={100}
                    height={100}
                    src={uni.logo}
                    alt={uni.Name}
                    className="w-16 h-16 object-contain"
                  />
                </td>
                <td className="px-4 py-3">{uni.Name}</td>
                <td className="px-4 py-3 text-center">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-red-500 text-white font-medium rounded shadow hover:opacity-90">
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Universities;
