// This is your layout component where `metadata` should go
export const metadata = {
    title: "Events",
    description:
      "Stay updated on our latest events, webinars, and seminars designed to help students explore study abroad opportunities and make informed decisions.",
    keywords: [
      "education events",
      "study abroad webinars",
      "student seminars",
      "university fairs",
      "career workshops",
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events`,
    },
  };
  
  export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        {children}
      </div>
    );
  }
  