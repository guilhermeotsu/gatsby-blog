import React from "react"
import PropTypes from "prop-types"

import Sidebar from "@components/Sidebar"
import GlobalStyles from "@styles/global.js"
import MenuBar from "@components/MenuBar"
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
