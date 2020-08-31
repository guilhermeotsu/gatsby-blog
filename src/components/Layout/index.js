import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Profile from "@components/Profile"

// container
const LayoutWrapper = styled.section`
  display: flex;
`

// lista de posts 
const LayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <aside>
        <Profile></Profile>
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout