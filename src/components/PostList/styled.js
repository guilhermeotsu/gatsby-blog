import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostListWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`

export const PostListLink = styled(Link)`
  color: #8899a6;
  display: flex;
  text-decoration: none;

  &:hover {
    color: #1fa1f2;
  }
`

export const PostListTag = styled.div`
  align-items: center;
  background: ${props => props.background};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`

export const PostListInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostListDate = styled.time`
  font-size: 0.9rem;
`

export const PostListTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostListDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`