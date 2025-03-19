import LogIn from "@/_components/LogIn/LogIn";
export const metadata = {
    title: "Log In",
    description:
      "Access your account to track your study abroad applications, connect with experts, and stay updated on the latest opportunities.",
    keywords: ["log in", "student portal", "study abroad account", "application tracking", "education login"],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/logIn`,
    },
  };
  
const page = () => {
  return (
    <div>
      <LogIn />
    </div>
  );
};

export default page;
