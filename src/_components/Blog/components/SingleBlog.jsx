"use client"; // This makes the component a client-side component

import { useEffect, useState } from "react";
import Blog_BlogInbox from "@/_components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "@/_components/Blog/Blogs_Component/BlogSingle";
import BlogSingle_Banner from "@/_components/Blog/BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "@/_components/Blog/Latest_Blogs";

const SingleBlog = ({id}) => {

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog data on the client side
  useEffect(() => {
    const getBlogData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await res.json();
        setBlogData(data);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBlogData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Pass blogData as props if needed */}
      <BlogSingle_Banner blog={blogData} />
      <BlogSingle blog={blogData} />
      <Blog_BlogInbox />
      <Latest_Blogs />
    </div>
  );
};

export default SingleBlog;
