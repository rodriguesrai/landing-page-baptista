import styled from 'styled-components'

export const SocialImg = styled.img`
  width: 2rem;
`

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  width: 100%;
  right: 0;
  width: 3rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  background-color: var(--headerColorBackground);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 2px solid var(--borderBottomHeader);
  border-radius: 10px 0 0 10px;
`
