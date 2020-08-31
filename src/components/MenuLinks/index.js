import React from 'react'

import links from './content'
import * as S from './styled'

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {
        links.map((item, index) => {
          return (
            <S.MenuLinksItem key={index}>
              <S.MenuLinksLink to={item.url} title={item.label} activeClassName="active">
                {item.label}
              </S.MenuLinksLink>
            </S.MenuLinksItem>
          )
        })
      }
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks