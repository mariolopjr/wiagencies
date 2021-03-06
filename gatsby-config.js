module.exports = {
  siteMetadata: {
    title: 'World Insurance',
    siteUrl: 'https://wiagencies.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
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
    `gatsby-plugin-offline`
  ],
}
