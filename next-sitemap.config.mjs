/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "https://example.com",
  generateRobotsTxt: true,
  exclude: [
    "/admin",
    "/comingSoon",
    "/privacy",
    "/logIn",
    "/ModalEventRegistration",
    "/registration",
    "/admin/welcomeModal",
    "/admin/events",
    "/admin/events/add",
    "/admin/events/edit",
    "/admin/blogs",
    "/admin/blogs/edit",
    "/admin/blogs/add",
  ],
  additionalPaths: async () => {
    const eventResponse = await fetch(`${process.env.NEXT_PUBLIC_API_FORM_URL}/events`);
    const events = await eventResponse.json();
    return events.map((event) => ({
      loc: `/events/${event.eventURL}`,
      lastmod: event.createdAt,
    }));
  },
};

export default sitemapConfig;
