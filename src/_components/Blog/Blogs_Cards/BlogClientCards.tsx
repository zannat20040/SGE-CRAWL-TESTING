"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define Blog Type
interface Blog {
  _id: string;
  bannerImage: string;
  category: string;
  title: string;
  description: string;
  url: string;
}
export default function BlogClientCards() {
  const [blogData, setBlogData] = useState<Blog[] | null>(null); // Typed blogData
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data: Blog[] = await res.json(); // Ensure data is typed as Blog[]
        setBlogData(data);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getBlogData();
  }, []);

  if (loading)
    return (
      <div className="">
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div className="w-10 h-10 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {blogData?.map((blog) => (
        <div key={blog._id} className="group">
          <div className="shadow-xl rounded-[16px] flex flex-col h-full group-hover:bg-[#081831] duration-300">
            <Image
              width={100}
              height={100}
              src={blog.bannerImage}
              alt={blog.title}
              className="h-auto w-full"
            />
            <div className="p-4 pb-4 flex flex-col justify-between flex-grow">
              <div>
                <p className="inline-block w-fit px-2 py-[2px] text-[#FF8156] text-xs bg-[#FFF2EE] rounded mb-2">
                  {blog.category}
                </p>
                <p className="mb-2 text-black font-bold group-hover:text-white !mt-0 flex-grow">
                  {blog.title}
                </p>
                <p className="group-hover:text-white !mt-0">
                  {blog.description.slice(0, 150)}...
                </p>
              </div>
              <Link href={`/blogs/${blog.url}`}>
                <button className="px-4 py-2 text-white rounded-full bg-[#FE632F] hover:bg-blue-500 mt-4">
                  Continue Reading
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
