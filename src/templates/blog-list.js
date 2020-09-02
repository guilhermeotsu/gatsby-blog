import React from 'react'
import { graphql } from 'gatsby'

import Layout from "@components/Layout"
import SEO from "@components/seo"
import PostList from "@components/PostList"
import Pagination from "@components/Pagination"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

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

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
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