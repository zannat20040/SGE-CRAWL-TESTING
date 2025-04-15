import { useEffect, useState } from "react";
import { Destination } from "@/assets/type/interfaces";

export const useDestinationData = () => {
  const [showAll, setShowAll] = useState(false);
  const [countries, setCountries] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("/json/destination_data.json");
        if (!response.ok) throw new Error("Failed to load destinations");
        const data: Destination[] = await response.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const displayedCountries = countries?.length > 0 ? (showAll ? countries : countries.slice(0, 6)) : [];


  return {
    showAll,
    toggleShowAll,
    countries,
    displayedCountries,
    loading,
    error,
  };
};
