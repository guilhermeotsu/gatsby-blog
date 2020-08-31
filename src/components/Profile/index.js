import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from '@components/Avatar'

import * as S from './styled'

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
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{title}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
