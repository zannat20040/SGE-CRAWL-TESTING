import EventDetails from "@/_components/Events/Events_Components/EventDetails";

export async function generateMetadata({ params }) {
  const { pageUrl } = params;

  try {
    // Fetch the event data
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_FORM_URL}/events/eventURL/${pageUrl}`
    );
    const details = await response.json();

    // Handle if event doesn't exist or request fails
    if (!response.ok || !details) {
      return {
        title: "Event Details Not Found",
        description: "The requested event does not exist.",
      };
    }

    const eventTitle = details.title || "Event Title";
    const description =
      details.description.substring(0, 150) || "Event Description";
    const canonicalUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${details.eventURL}`;

    return {
      title: eventTitle,
      description: description,
      keywords: [
        "education events",
        "study abroad webinars",
        "student seminars",
        "university fairs",
        "career workshops",
        `${details.category}`,
      ],
      alternates: {
        canonical: canonicalUrl,
      },
    };
  } catch (error) {
    console.error("Error fetching event data:", error);
    return {
      title: "Error Loading event",
      description: "An error occurred while fetching the event details.",
    };
  }
}





const Page = ({ params }) => {
  const { pageUrl } = params; // Destructure the pageUrl directly from params

  return (
    <div>
      <EventDetails pageUrl={pageUrl} />{" "}
    </div>
  );
};

export default Page;
