import Blogs_Cards from "@/_components/Blog/Blogs_Cards/Blogs_Cards";
import Blogs_Banner from "@/_components/Blog/Blogs_Component/Blogs_Banner";

export const metadata = {
  title: "Blogs",
  description:
    "Explore insights, tips, and success stories that inspire and guide students on their study abroad journey.",
  keywords: [
    "study abroad tips",
    "education insights",
    "student success stories",
    "university guides",
    "study abroad blogs",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`,
  },
};
const page = () => {
  return (
    <div className="poppins py-20">
      <Blogs_Banner />
      <Blogs_Cards />
    </div>
  );
};

export default page;
