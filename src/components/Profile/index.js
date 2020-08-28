'use strict'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Usando Hooks
const Profile = () => {
  // Pegando os dados do GraphQL
  const {
    site: { 
      siteMetadata: { 
        title, 
        description, 
        author 
      } 
    } 
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
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{description}</p>
    </div>
  )
}

// Usando o componente do Gatsby para renderizar
// const Profile = () => (
//   <useStaticQuery 
//     query={graphql`
//       query MySiteMetaData {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `}

//     render={({site: { siteMetadata: { title, description, author } } }) => (
//       <div className="Profile-wrapper">
//         <h1>{title}</h1>
//         <h2>{author}</h2>
//         <p>{description}</p>
//       </div>
//     )}
//   />
// )

export default Profile