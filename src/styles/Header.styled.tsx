import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  background-color: var(--headerColorBackground);
  display: flex;
  position: sticky;
  align-items: center;
  color: var(--headerColorText);
  top: 0;
  padding: 1rem;
  height: auto;
  justify-content: space-evenly;
  max-width: 100vw;
  width: 100%;
  border-bottom: var(--borderBottomHeader) 1px solid;
  z-index: 99;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`
export const ImgLogo = styled.img`
  width: 150px;
  height: 50px;
`
