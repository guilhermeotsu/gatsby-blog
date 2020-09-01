import React from 'react'

import links from './content'
import * as S from './styled'

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.NavBar>
      <S.ListBar>
        {
          links.linksTop.map((item, index) => {
            const Icon = item.icon

            return (
              <S.ItemBar key={index}>
                <S.LinkBar href={item.url} title={item.label} target="_blank">
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                </S.LinkBar>
              </S.ItemBar>
            )
          })
        }
      </S.ListBar>
    </S.NavBar>

    <S.NavBar>
      <S.ListBar>
          {
            links.linksBotton.map((item, index) => {
              const Icon = item.icon

              return (
                <S.ItemBar key={index}>
                  <S.LinkBar>
                    <S.IconWrapper>
                      <Icon />
                    </S.IconWrapper>
                  </S.LinkBar>
                </S.ItemBar>
              )
            })
          }
      </S.ListBar> 
    </S.NavBar>
  </S.MenuBarWrapper>
)

export default MenuBar