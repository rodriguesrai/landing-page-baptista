import { Link } from 'react-router-dom'
import styled from 'styled-components'

type NavbarProps = {
  nav: boolean
}

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #f2f7ff;
  display: flex;
  position: sticky;
  top: 0;
  height: auto;
  justify-content: space-evenly;
  max-width: 100vw;
  border-bottom: #fdbe34 1px solid;
  z-index: 99;
`
export const ImgLogo = styled.img`
  width: 150px;
  height: 50px;
`
export const Navbar = styled.nav<NavbarProps>`
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

  @media (max-width: 768px) {
    display: ${(props) => (props.nav ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    background-color: #f2f7ff;
    width: 95vw;
    height: auto;
    z-index: 1;
    border-radius: 0 20px 0 20px;

    button {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: #f2f7ff;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
`
export const NavIconMobile = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #f2f7ff;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    margin-right: 10px;
  }
`
export const ImgNavMobile = styled.img`
  width: 30px;
  height: auto;
`

export const NavItem = styled(Link)`
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 5px;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    font-size: 1.4rem;
  }
`
