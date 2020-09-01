import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PostList = ({ slug, background, category, date, timeToRead, title, description }) => (
  <S.PostListLink to={slug}>
    <S.PostListWrapper>
      <S.PostListTag background={background}>{category}</S.PostListTag>
      <S.PostListInfo>
        <S.PostListDate>{date} - {timeToRead} min de leitura</S.PostListDate>
        <S.PostListTitle>{title}</S.PostListTitle>
        <S.PostListDescription>{description}</S.PostListDescription>
      </S.PostListInfo>
    </S.PostListWrapper>
  </S.PostListLink>
)

PostList.defaultProps = {
  background: '#1fa1f2'
}

PostList.prototype = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostList