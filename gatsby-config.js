module.exports = {
  siteMetadata: {
    title: 'World Insurance',
    siteUrl: 'https://wiagencies.com',
    phone: '352-462-0414',
    fax: '800-418-4261',
    email: 'wiagencies@gmail.com',
    gmaps: 'https://www.google.com/maps/place/8+Beverly+Hills+Blvd,+Beverly+Hills,+FL+34465/@28.9267856,-82.4614126,17z',
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `World Insurance`,
        short_name: `wi`,
        start_url: `/`,
        background_color: `#138FC2`,
        theme_color: `#209CEE`,
        display: `minimal-ui`,
        icon: `static/images/ethics-registered-member-badge.png`,
        legacy: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sri`,
  ],
}
