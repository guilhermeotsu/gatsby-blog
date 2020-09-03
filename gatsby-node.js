const { createFilePath } = require(`gatsby-source-filesystem`)
const { join } = require('path')

// Criando o campo de slug dos posts
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "posts",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

// Criando as páginas dos posts
// Para cada node (nó) ele vai criar uma página de acordo com o template apenas colando os dados nela
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              background
              category
              date(formatString: "DD [de]  MMMM, YYYY", locale: "pt")
              description
              title
            }
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: join(__dirname, 'src', 'templates', 'blog-post.js'),
        // Passa dados que vao estar disponivel nas querys do graphql como variáveis
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        }
      })
    })

    const postPerPage = 6
    const numPages = Math.ceil(posts.length / postPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: join(__dirname, 'src', 'templates', 'blog-list.js'),
        context: {
          limit: postPerPage,
          skip: index * postPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}