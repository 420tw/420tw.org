/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const languages = require("./src/data/languages")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `420 Asia`,
    languages,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `420 Asia`,
        short_name: `420 Asia`,
        description: `420 Asia`,
        start_url: `/`,
        background_color: `#0D4F53`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/marijuana.png`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `420 Asia`,
            short_name: `420 Asia`,
            description: `420 Asia`,
          },
        ],
      },
    },
  ],
}
