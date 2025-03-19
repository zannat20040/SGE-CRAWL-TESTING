import Services_Components from "@/_components/Services/Services_Components/Services_Components";
export const metadata = {
  title: "Services",
  description:
    "Discover our expert services designed to support your study abroad journey, from personalized counseling to application assistance and beyond.",
  keywords: [
    "study abroad services",
    "education consulting",
    "application assistance",
    "personalized counseling",
    "student support",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/services`,
  },
};

const Services = () => {
  return (
    <div className="pb-10">
      <Services_Components />
    </div>
  );
};

export default Services;
