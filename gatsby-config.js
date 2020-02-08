module.exports = {
  siteMetadata: {
    title: `dabramson.io`,
    description: `Dylan Abramsons Personal Website`,
    author: `@dylanabramson33`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-transition-link`,
    //   options: {
    //     layout: require.resolve('./src/components/layout.js')
    //   }
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans`,
          'Indie Flower',
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/bg`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ibirdjjzk7ze`,
        accessToken: "bC7gr6_qiaIFebFbFxaJtUfga03JRKHcv8ogCbmLQmE",
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
