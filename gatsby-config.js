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
    title: `420 Taiwan 🥦 🦄`,
    description: `420 friendly community in Taiwan. 🥦 🦄`,
    siteUrl: `https://420tw.org`,
    twitter: `@420tw`,
    languages,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121342977-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
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
        name: `420 亞洲`,
        short_name: `420 亞洲`,
        description: `420 亞洲`,
        start_url: `/`,
        background_color: `#0D4F53`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/marijuana.png`,
        lang: "zh",
        localize: [
          {
            start_url: `/zh/`,
            lang: `zh`,
            name: `420 亞洲`,
            short_name: `420 亞洲`,
            description: `420 亞洲`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
  ],
}
