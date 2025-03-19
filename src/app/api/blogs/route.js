import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// GET: Fetch all blogs
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("SGE-NEXT");

    // Fetch all blogs from the "blogs" collection
    const blogs = await db.collection("blogs").find({}).toArray();

    // Return the list of blogs
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// Format the createdAt date
const formattedDate = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});


// POST: Add a new blog
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("SGE-NEXT");

    // Parse the blog data from the request body
    const body = await req.json();

    const { 
      readTime, 
      title, 
      writer, 
      bannerImage, 
      description, 
      category, 
      h1, 
      paragraph, 
      url 
    } = body;

    // Validate required fields
    if (!title || !writer || !bannerImage || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new blog object
    const newBlog = {
      readTime,
      title,
      writer,
      bannerImage,
      description,
      category,
      h1,
      paragraph,
      url,
      createdAt: formattedDate, // Automatically add the creation date
    };

    // Insert the blog into the "blogs" collection
    const result = await db.collection("blogs").insertOne(newBlog);

    // Build the response with the inserted ID and original data
    const insertedBlog = {
      ...newBlog,
      _id: result.insertedId, // Include the newly inserted document ID
    };

    // Respond with the inserted data
    return NextResponse.json(
      { message: "Blog added successfully", blog: insertedBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json({ error: "Failed to add blog" }, { status: 500 });
  }
}
