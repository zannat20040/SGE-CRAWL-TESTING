// next-sitemap.js
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',  // Adjust this to your production URL
    generateRobotsTxt: true,  // Generates robots.txt automatically
    sitemapSize: 5000,
  };
  