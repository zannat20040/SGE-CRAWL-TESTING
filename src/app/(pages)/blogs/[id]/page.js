import React from "react";
import SingleBlog from "../../../../_components/Blog/components/SingleBlog";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    // Fetch the blog data
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`
    );
    const blog = await response.json();

    // Handle if blog doesn't exist or request fails
    if (!response.ok || !blog) {
      return {
        title: "Blog Not Found",
        description: "The requested blog does not exist.",
      };
    }

    const blogTitle = blog.title || "Blog Title";
    const description = blog.description.substring(0, 150) || "Blog Description";
    const canonicalUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${id}`;

    return {
      title: blogTitle,
      description: description,
      keywords: [
        "study abroad",
        "education blog",
        "student success",
        "university tips",
        "career guidance",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      title: "Error Loading Blog",
      description: "An error occurred while fetching the blog details.",
    };
  }
}

const Page = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <SingleBlog id={id} />
    </div>
  );
};

export default Page;
