import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import PostList from "@components/PostList"

const IndexPage = () => {
  const { 
    allMarkdownRemark: {
      edges
    }
  } = useStaticQuery(
    graphql`
      query Markdown {
        allMarkdownRemark {
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
  )

  return (
    <Layout>
      <SEO title="Home" />
      {
        edges.map((item, index) => {
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

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <PostList 
//       slug="/slug/"
//       background="tomato"
//       category="Misc"
//       date="30 de Julho de 2019"
//       timeToRead="5"
//       title="Diga nao as drogas"
//       description="Veja aqui cinco beneficios de usar drogas"
//     />
//   </Layout>
// )

export default IndexPage
