import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #000;
  color: #fff;
  bottom: 0;
  left: 0;
  padding: 20px;
  height: auto;
  max-width: 100vw;
  border-top: #fdbe34 1px solid;
`

export const AsideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  height: auto;
  margin-top: 1rem;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
    text-align: left;

    gap: 1.5rem;
    & > aside {
      width: 100%;
      justify-content: left;
      align-items: left;
    }
  }
`

export const AsideContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  width: auto;
  height: 80%;
  word-wrap: break-word;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`
