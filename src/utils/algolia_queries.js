const postsQuery = `{
  posts: allMarkdownRemark(
    sort: {order: DESC, fields: frontmatter___date}
    ) {
    edges {
      node {
        # Item que o algolia usa para identificar cada um dos posts, renomeando com objectID
        objectID: id
        frontmatter {
          category
          date_timestamp: date
          date(formatString: "DD [de]  MMMM, YYYY", locale: "pt")
          description
          title
          background
        }
        fields {
          slug
        }
        # Pegando um pedaço do post
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr => 
  arr.map(({ node: { frontmatter, ...rest }}) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }))

const queries =[
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'Posts',
    settings: {
      attributesToSnippet: ['excerpt:20']
    },
  }
]

module.exports = queries