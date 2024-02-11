import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  max-width: 300px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`
export const PostThumb = styled.img`
  width: 100%;
  height: 100%;
`
export const PostContent = styled.div`
  padding: 10px;
`
