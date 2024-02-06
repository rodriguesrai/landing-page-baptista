import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
  padding: 20px;
  height: 30vh;
  width: 100vw;

`;

export const AsideContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    font-weight: bold;
  }
`
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  width: 50%;
  height: 80%;
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    font-weight: bold;
  }
`;