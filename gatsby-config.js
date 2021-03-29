const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `A Working Copy`,
    description: `A (temp) portfolio site`,
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
        // part of adding scss to components. opting out for now, so not to include bootstrap twice, both globally and locally
        // consideration for changes later
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
    `gatsby-plugin-image`,
  ],
}
