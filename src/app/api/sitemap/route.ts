/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { safeFetch } from "@/lib/safeFetch"; // adjust the path as needed
export const dynamic = "force-dynamic";

export async function GET() {
  const formUrl = process.env.API_FORM_URL || "";
  const baseUrl = process.env.API_BASE_URL || "";

  const staticPages = [
    "/", "/about", "/blogs", "/events", "/services", "/career", "/contact",
    "/timeline", "/award", "/news", "/partners", "/partner-with-us", "/who-we-are",
    "/applicationAssistance", "/admissionProcess", "/aidGuidance", "/globalNetwork",
    "/immigrationSupport", "/personalizedUniversity", "/collaboration",
    "/postGraduationAid", "/studentGuidance", "/recruitmentSupport", "/studentSuccess",
    "/travelAssistance", "/leader", "/study-destinations",
    "/study-destinations/study-in-the-uk/may-intake",
  ];

  // ✅ Safe API fetches (won't throw)
  const [events, blogs, studyDestinations, universityDetails] = await Promise.all([
    safeFetch(`${formUrl}/events`),
    safeFetch(`${baseUrl}/api/blogs`),
    safeFetch(`${baseUrl}/json/destination_data.json`),
    safeFetch(`${baseUrl}/json/ukUni.json`),
  ]);

  const currentDate = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static Pages
  staticPages.forEach((page) => {
    xml += `<url>\n<loc>${baseUrl}${page}</loc>\n<lastmod>${currentDate}</lastmod>\n</url>\n`;
  });

  // Events
  events?.forEach((event: any) => {
    xml += `<url>\n<loc>${baseUrl}/events/${event.eventURL}</loc>\n<lastmod>${event.createdAt || currentDate}</lastmod>\n</url>\n`;
  });

  // Blogs
  blogs?.forEach((blog: any) => {
    xml += `<url>\n<loc>${baseUrl}/blogs/${blog.url}</loc>\n<lastmod>${blog.createdAt || currentDate}</lastmod>\n</url>\n`;
  });

  // Study Destinations
  studyDestinations?.forEach((dest: any) => {
    xml += `<url>\n<loc>${baseUrl}/study-destinations/${dest.url}</loc>\n<lastmod>${currentDate}</lastmod>\n</url>\n`;
  });

  // University Pages
  universityDetails?.forEach((uni: any) => {
    const countrySlug = uni.country?.toLowerCase().replace(/ /g, "-");
    const nameSlug = uni.Name?.toLowerCase().replace(/ /g, "-");
    xml += `<url>\n<loc>${baseUrl}/study-destinations/study-in-the-${countrySlug}/${nameSlug}</loc>\n<lastmod>${currentDate}</lastmod>\n</url>\n`;
  });

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
