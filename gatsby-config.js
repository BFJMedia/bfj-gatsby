// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteConfig = require('./config.js');

module.exports = {
  siteMetadata: {
    url: siteConfig.url,
    title: "Gatsby WordPress Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with WordPress",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter WordPress Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
  ],
}
