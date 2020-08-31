import React from 'react'

import Profile from '@components/Profile'
import SocialLinks from '@components/SocialLinks'
import * as S from './styled'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
  </S.SidebarWrapper>
)

export default Sidebar