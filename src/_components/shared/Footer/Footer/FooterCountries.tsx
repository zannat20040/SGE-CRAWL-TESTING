"use client";
import { Destination } from "@/assets/type/interfaces";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function FooterCountries() {
  const [countries, setCountries] = useState<Destination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("/json/destination_data.json");
        setCountries(response.data);
      } catch (err) {
        console.error(err);
        // setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);
  return (
    <>
      {loading ? (
        <p className="py-4 ">Loading.....</p>
      ) : (
        <ul className="mulish-regular lg:text-base text-sm">
          {countries?.map((country) => (
            <li key={country?.destinationName} className="hover:text-blue-600">
              <Link
                // rel="nofollow"
                href={`/study-destinations/${country?.url}`}
                className="block w-full"
              >
                {country?.destinationName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
