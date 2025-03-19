import NewRegistration from "@/_components/Registration2/NewRegistration";
export const metadata = {
  title: "Registration",
  description:
    "Sign up to start your study abroad journey. Register now to access expert guidance, application support, and exclusive opportunities.",
  keywords: [
    "study abroad registration",
    "sign up",
    "education portal",
    "application support",
    "student registration",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/registration`,
  },
};

const page = () => {
  return (
    <div className="bg-[#FAFAFA]  poppins pb-10">
      <NewRegistration />
    </div>
  );
};

export default page;
