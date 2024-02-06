import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #FFD700;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 10%vh;
  
`
export const ImgLogo = styled.img`
  width: 150px;
  height: 50px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  h1 {
    color: #e96666;
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