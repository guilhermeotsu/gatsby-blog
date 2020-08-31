"use strict"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from './../Avatar'

// Usando Hooks
const Profile = () => {
  // Pegando os dados do GraphQL
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(
    graphql`
      query MySiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile
