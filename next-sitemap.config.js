/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://hypersattv.com', // Production Domain
    generateRobotsTxt: true,
    outDir: 'out', // Crucial for static export
    generateIndexSitemap: false, // Simple sitemap is enough for single page
}
