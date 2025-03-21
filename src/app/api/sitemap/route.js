import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_API_FORM_URL;

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

    // 🟢 Fetch Dynamic Blog or Event Data
    const response = await fetch(`${baseUrl}/events`);
    if (!response.ok) throw new Error("Failed to fetch event");

    const events = await response.json();
    const currentDate = new Date().toISOString();

    // 🟢 Start Building XML Sitemap
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // 🔵 Add Static Pages
    staticPages.forEach((page) => {
      xml += `<url>\n<loc>${baseUrl}${page}</loc>\n<lastmod>${currentDate}</lastmod>\n</url>\n`;
    });

    // 🔵 Add Dynamic Pages (Blogs / Events)
    events.forEach((event) => {
      xml += `<url>\n<loc>${baseUrl}/event/${event.eventURL}</loc>\n<lastmod>${
        event.createdAt || currentDate
      }</lastmod>\n</url>\n`;
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
