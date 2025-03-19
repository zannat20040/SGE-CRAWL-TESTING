import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params; // Extract the ID from URL
    const client = await clientPromise;
    const db = client.db("SGE-NEXT"); // Replace with your database name

   
     

    // Find the blog by ID
    const blog = await db
      .collection("blogs")
      .findOne({ url: id });

    // If the blog is not found
    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    // Return the blog data
    return NextResponse.json(blog, { status: 200 });
  } 
  catch (error) {
    console.error("Error fetching single blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
