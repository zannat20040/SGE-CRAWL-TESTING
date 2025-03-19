import SingleUniversity from "@/_components/shared/SingleUniversity/SingleUniversity";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { Name } = await params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/json/ukUni.json`
  );

  // Find the matching destination by URL

  // const decodedName = decodeURIComponent(Name);

  const universityDetails = response.data.find(
    (item) =>
      item.Name.toLowerCase()
        .replace(/ö/g, "o")
        .replace(/é/g, "e")
        .replace(/ü/g, "u")
        .replace(/ä/g, "a")
        .replace(/è/g, "e") ==
      Name.toLowerCase()
        .replace(/-/g, " ")
        .replace(/ü/g, "u")
        .replace(/%c3%a9/g, "e")
        .replace(/%c3%b6/g, "o")
        .replace(/%c3%a4/g, "a")
        .replace(/%2c/g, ",")
        .replace(/%c3%a8/g, "e")
  );
  return {
    title: universityDetails?.Name || "University Details",
    description:
      universityDetails?.Overview?.substring(0, 150) ||
      "Explore this university.",
    keywords: [
      universityDetails?.Name,
      `Study in ${universityDetails?.country}`,
      "study abroad",
      "top universities",
      "international education",
      "university admissions",
    ], 
    alternates: {
      canonical: `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/study-destinations/study-in-the-${universityDetails?.country
        ?.toLowerCase()
        .replace(/ /g, "-")}/${universityDetails?.Name?.toLowerCase().replace(
        / /g,
        "-"
      )}`,
    },
  };
}

export default async function page({ params }) {
  const { Name } = await params;

  // Fetch data for the page
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/json/ukUni.json`
  );

  // Find the matching destination by URL

  const universityDetails = response.data.find(
    (item) =>
      item.Name.toLowerCase()
        .replace(/ö/g, "o")
        .replace(/é/g, "e")
        .replace(/ü/g, "u")
        .replace(/ä/g, "a")
        .replace(/è/g, "e") ==
      Name.toLowerCase()
        .replace(/-/g, " ")
        .replace(/ü/g, "u")
        .replace(/%c3%a9/g, "e")
        .replace(/%c3%b6/g, "o")
        .replace(/%c3%a4/g, "a")
        .replace(/%2c/g, ",")
        .replace(/%c3%a8/g, "e")
  );

  return (
    <div>
      <SingleUniversity universityDetails={universityDetails} />
    </div>
  );
}
