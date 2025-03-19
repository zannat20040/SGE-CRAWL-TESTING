import React from "react";
import DestinationDetails from "./DestinationDetails";

// Utility function to fetch destination data
const fetchDestinations = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/json/destination_data.json`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch destination data:", error);
    return [];
  }
};

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  try {
    const { url } = await params;

    const destinations = await fetchDestinations();
    const destination = destinations.find((item) => item.url === url);

    if (destination) {
      return {
        title:
          `Study in ${destination?.destinationName}` || "Destination Details",
        description:
          destination.meta?.substring(0, 150) || "Explore this destination.",
        keywords: [
          `Study in ${destination?.destinationName}`,
          destination?.destinationName,
          "study abroad",
          "top universities",
          "international education",
        ],
        alternates: {
          canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/study-destinations/${destination.url}`,
        },
      };
    }
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
  }

  return {
    title: "Destination Not Found",
    description: "We couldn't find the destination you're looking for.",
  };
}

// Main page component
export default async function Page({ params }) {
  const { url } = await params;

  try {
    const destinations = await fetchDestinations();
    const destination = destinations.find((item) => item.url === url);

    if (!destination) {
      return <div className="text-center py-40">Destination not found</div>;
    }

    return <DestinationDetails url={url} data={destination} />;
  } catch (error) {
    console.error("Failed to fetch destination details:", error);
    return (
      <div className="text-center py-40">
        Something went wrong. Please try again later.
      </div>
    );
  }
}
