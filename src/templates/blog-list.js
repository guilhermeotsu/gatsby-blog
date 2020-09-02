import React from 'react'
import { graphql } from 'gatsby'

import Layout from "@components/Layout"
import SEO from "@components/seo"
import PostList from "@components/PostList"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark

  console.log(postList)
  return (
    <Layout>
      <SEO title="Home" />
      {
        postList.edges.map((item, index) => {
          const { timeToRead } = item.node
          const { background, category, date, description, title } = item.node.frontmatter
          const { slug } = item.node.fields

          return (
            <PostList key={index}
              slug={slug}
              timeToRead={timeToRead}
              title={title}
              background={background}
              category={category}
              date={date}
              description={description}
            />
          )
        })
      }
    </Layout>
  )
}

export const query = graphql`
  query Markdown($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
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
      }
    }
  }`


export default BlogList