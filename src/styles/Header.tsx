import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #f2f7ff;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-evenly;
  width: 100vw;
  border-bottom: #fdbe34 1px solid;
  z-index: 99;
`
export const ImgLogo = styled.img`
  width: 150px;
  height: 50px;
`
export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  h1 {
    color: black;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 5px;
  }
  h1:hover {
    font-weight: bold;
    font-size: 1.4rem;
    text-decoration: none;
  }
`
