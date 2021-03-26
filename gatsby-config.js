const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `A Working Copy`,
    description: `Temp site for experimentation and to show some stuff`,
    author: `@whaw`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true, DEV_SSR: false },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: [`${__dirname}/src/scss/styles.scss`],
        },
        // part of adding scss to components. opting out to not include bootstrap twice, globally, then locally to component
        // sassRuleModulesTest: /\.mod\.s(a|c)ss$/, // make scss component.mobules available to components
        // additionalData: `@use "${__dirname}/src/scss/global-variables" as var;`, // make globals variables visible to component.module scss
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`, // for staticImages, without graphql
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,

    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
