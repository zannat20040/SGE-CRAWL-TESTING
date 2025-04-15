import { ShowToggleButtonProps } from "@/assets/type/interfaces";

// A toggle button component to show/hide all destinations
export default function ShowToggleButton({
  showAll,
  toggleShowAll,
  countriesCount,
}: ShowToggleButtonProps) {
  // Don't render the button if total countries are 6 or fewer
  if (countriesCount <= 6) return null;

  return (
    <div className="text-center">
      <button
        onClick={toggleShowAll} // Toggle showAll state on click
        className="relative z-20 font-semibold bg-white px-16 py-2 mt-32 rounded-3xl mx-auto w-fit cursor-pointer"
      >
        {/* Button label changes based on showAll state */}
        {showAll ? "See less" : "Explore More"}
      </button>
    </div>
  );
}
