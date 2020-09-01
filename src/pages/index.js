import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import PostList from "@components/PostList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostList 
      slug="/slug/"
      background="tomato"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga nao as drogas"
      description="Veja aqui cinco beneficios de usar drogas"
    />
  </Layout>
)

export default IndexPage
