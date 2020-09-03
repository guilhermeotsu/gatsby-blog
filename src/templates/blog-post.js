import React from 'react'
import { graphql } from 'gatsby'

import Layout from "@components/Layout"
import SEO from "@components/seo"
import RecommendedPost from "@components/RecommendedPost"
import * as S from "@components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { nextPost, previousPost } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date} • {post.timeToRead} min de leitura</S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPost 
        next={nextPost}
        previous={previousPost}
      />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(formatString: "DD [de]  MMMM, YYYY", locale: "pt")
        description
      }
      html
      timeToRead
    }
  }
`

export default BlogPost