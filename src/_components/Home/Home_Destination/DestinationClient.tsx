"use client";

import { useDestinationData } from "@/lib/destinationUtils";
import DisplayCountries from "./DisplayCountries";
import ShowToggleButton from "./ShowToggleButton";

// Client-side wrapper component to handle destination state and logic
const DestinationClient = () => {
  // Fetch destination data and states using custom hook
  const {
    showAll,               // Whether to show all countries or a limited list
    toggleShowAll,         // Function to toggle 'showAll' state
    displayedCountries,    // Filtered countries based on showAll
    countries,             // All countries
    loading,               // Loading state
    error,                 // Error state
  } = useDestinationData();

  return (
    <>
      {/* Render the destination cards */}
      <DisplayCountries
        countries={displayedCountries}
        loading={loading}
        error={error}
      />

      {/* Render the toggle button if more than 6 countries exist */}
      <ShowToggleButton
        showAll={showAll}
        toggleShowAll={toggleShowAll}
        countriesCount={countries.length}
      />
    </>
  );
};

export default DestinationClient;
