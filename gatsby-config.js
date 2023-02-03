/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `A Working Copy`,
    siteUrl: `https://whaw.github.io/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-180963166-1",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 3351251,
        sv: 6,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/data/",
      },
      __key: "data",
    },
  ],
};
