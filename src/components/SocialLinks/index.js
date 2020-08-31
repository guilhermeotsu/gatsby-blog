import React from 'react'

import Icons from './icons'
import links from './content'
import * as S from './styled'

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {
        links.map((item, index) => {
          const Icon = Icons[item.label]

          return (
            <S.SocialLinksItens key={index}>
              <S.SocialLinksLink href={item.url} title={item.label} target="_blank" rel="noopener noreferrer">
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItens>
          )
        })
      }
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)


export default SocialLinks