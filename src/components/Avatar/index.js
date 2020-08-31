'use strict'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


// https://www.gatsbyjs.com/plugins/gatsby-image/

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              # Default, vai criar um efeito de Blur
              # https://www.gatsbyjs.com/plugins/gatsby-image/#gatsby-transformer-sharp
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
