import { NextResponse } from "next/server";

export async function GET() {
  const formUrl = process.env.NEXT_PUBLIC_API_FORM_URL;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const staticPages = [
      "/study-destinations/study-in-the-uk/may-intake",
      "/applicationAssistance",
      "/admissionProcess",
      "/aidGuidance",
      "/globalNetwork",
      "/immigrationSupport",
      "/personalizedUniversity",
      "/collaboration",
      "/postGraduationAid",
      "/studentGuidance",
      "/recruitmentSupport",
      "/studentSuccess",
      "/travelAssistance",
      "/about",
      "/blogs",
      "/award",
      "/",
      "/leader",
      "/contact",
      "/partner-with-us",
      "/news",
      "/partners",
      "/timeline",
      "/study-destinations",
      "/career",
      "/who-we-are",
      "/events",
      "/services",
    ];

    // 🟢 Fetch Dynamic Blog, Event Data
    const [
      eventResponse,
      blogResponse,
      studyDestinationResponse,
      universityDetailsResponse,
    ] = await Promise.all([
      fetch(`${formUrl}/events`),
      fetch(`${baseUrl}/api/blogs`),
      fetch(`${baseUrl}/json/destination_data.json`),
      fetch(`${baseUrl}/json/ukUni.json`),
    ]);

    if (!eventResponse.ok) throw new Error("Failed to fetch events");
    if (!blogResponse.ok) throw new Error("Failed to fetch blogs");
    if (!studyDestinationResponse.ok)
      throw new Error("Failed to fetch study destinations");

    const events = await eventResponse.json();
    const blogs = await blogResponse.json();
    const studyDestinations = await studyDestinationResponse.json();
    const universityDetails = await universityDetailsResponse.json();

    const currentDate = new Date().toISOString();

    // 🟢 Start Building XML Sitemap
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // 🔵 Add Static Pages
    staticPages.forEach((page) => {
      xml += `<url>\n<loc>${baseUrl}${page}</loc>\n<lastmod>${currentDate}</lastmod>\n</url>\n`;
    });

    // 🔵 Add Dynamic Event Pages
    events.forEach((event) => {
      xml += `<url>\n<loc>${baseUrl}/events/${event.eventURL}</loc>\n<lastmod>${
        event.createdAt || currentDate
      }</lastmod>\n</url>\n`;
    });

    // 🔵 Add Dynamic Blog Pages
    blogs.forEach((blog) => {
      xml += `<url>\n<loc>${baseUrl}/blogs/${blog.url}</loc>\n<lastmod>${
        blog.createdAt || currentDate
      }</lastmod>\n</url>\n`;
    });

    // 🔵 Add Dynamic Study Destination Pages
    studyDestinations.forEach((destination) => {
      xml += `<url>\n<loc>${baseUrl}/study-destinations/${destination.url}</loc>\n<lastmod>${currentDate}</lastmod>\n</url>\n`;
    });

    // 🔵 Add Dynamic Study Destination UNIVERSITY Pages
    universityDetails.forEach((university) => {
      xml += `<url>\n<loc>${baseUrl}/study-destinations/study-in-the-${university?.country
        ?.toLowerCase()
        .replace(/ /g, "-")}/${university?.Name?.toLowerCase().replace(
        / /g,
        "-"
      )}</loc>\n<lastmod>${currentDate}</lastmod>\n</url>\n`;
    });

    xml += `</urlset>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}
