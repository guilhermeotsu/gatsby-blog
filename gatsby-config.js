const { join } = require('path')

const paths = {
  src: join(__dirname, 'src'),
  images: join(__dirname, 'src', 'images'),
  posts: join(__dirname, 'posts'),
  imagesUploads: join(__dirname, 'static', 'assets', 'img')
}

const queries = require('./src/utils/algolia_queries.js')

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Blog do pai`,
    description: `Blog do pai criado na aula do Willian Justen`,
    author: `@myblog`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // precisa ser o primeiro para funcionar com gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: paths.imagesUploads,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: paths.images,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: paths.posts,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": join(paths.src, 'components'),
          "@styles": join(paths.src, 'styles')
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            optioms: {
              maxWidth: 960,
              linkImageToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ],
      }
    }
  ],
}
