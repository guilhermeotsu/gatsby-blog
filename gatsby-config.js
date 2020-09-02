const { join } = require('path')

const paths = {
  src: join(__dirname, 'src'),
  images: join(__dirname, 'src', 'images'),
  posts: join(__dirname, 'posts')
}

module.exports = {
  siteMetadata: {
    title: `Blog do pai`,
    description: `Blog do pai criado na aula do Willian Justen`,
    author: `@myblog`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        plugins: [],
      }
    }
  ],
}
