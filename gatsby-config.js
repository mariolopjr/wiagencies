module.exports = {
  siteMetadata: {
    title: 'World Insurance',
    siteUrl: 'https://wiagencies.com',
    auto: 'https://florida.clutchinsurance.com/new/quote?productTerritory=FL&assignedAgency=843500-000-000',
    home: 'https://thehearth.com/homeowners-insurance-quotes/?assignedAgency=843500-000-000',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `World Insurance`,
        short_name: `wi`,
        start_url: `/`,
        background_color: `#138FC2`,
        theme_color: `#209CEE`,
        display: `minimal-ui`,
        // icon: `src/images/logo.svg`,
        legacy: false,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print Removed Selectors
        tailwind: false, // Enable tailwindcss support
        whitelist: [ 'whitelistclass', 'bg', 'gatsby-image-wrapper'], // Don't remove this selector
        ignore: [] // Ignore file/folder
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=31536000, immutable",
            "Content-Security-Policy: script-src 'self' 'unsafe-inline'",
            "Referrer-Policy: same-origin",
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          ],
          "/*.js": [
            "X-Content-Type-Options: nosniff",
          ],
          "/sw.js": [
            "Cache-Control: no-cache",
          ],
          "/*.html": [
            "Cache-Control: no-cache",
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
          ],
        },
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
  ],
}
