import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/boxicons-logos'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-itens: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItens = styled.li``

export const SocialLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2
  }
`

export const IconWrapper = styled.div`
  ${StyledIconBase} {
    fill: #bbb;
    width: 30px;
    height: 30px
  }
`