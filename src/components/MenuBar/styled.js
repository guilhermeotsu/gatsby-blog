import styled from 'styled-components'

export const MenuBarWrapper = styled.aside`
  height: 100vh;
  width: 4rem; 
  right: 0;
  align-center: center;
  background: #192734;
  padding: 1.1rem;
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-itens: center;
}
`

export const NavBar = styled.nav``

export const ListBar = styled.ul`
`

export const ItemBar = styled.li`
  padding: 0.5rem 0;
`

export const LinkBar = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
    cursor: pointer;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px
`