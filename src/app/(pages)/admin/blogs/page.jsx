"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`
        );
        setBlogs(response.data);
      } catch (error) {
        setError("Failed to fetch blogs");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-6 pb-40">
      <div className="flex justify-between  items-center gap-5">
        <h1 className="text-3xl font-bold">All Blogs</h1>
        <Link href="/admin/blogs/edit">
          <Button className="flex items-center gap-3 bg-[#1E88E5] ">
            <FaPlus className="text-xl" />
            Add More
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-3 text-gray-500 py-4">
            Loading blogs...
          </p>
        ) : error ? (
          <p className="text-center col-span-3 text-gray-500 py-4">{error}</p>
        ) : (
          blogs?.map((blog) => (
            <Card key={blog._id} className="shadow-lg border border-gray-200 ">
              <CardHeader floated={false} className="relative">
                <Image
                  src={blog?.bannerImage}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-56 object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className=" flex flex-col justify-between ">
                  <div>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {blog?.title}
                    </Typography>
                    <Typography color="gray" className="line-clamp-3">
                      {blog?.description.split(".")[2] || blog?.description}
                    </Typography>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Tooltip content="Edit">
                      <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <FiEdit2 className="text-xl" />
                      </span>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <FiTrash2 className="text-xl" />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
