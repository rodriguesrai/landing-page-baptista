import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #f2f7ff;
  display: flex;
  position: sticky;
  align-items: center;
  top: 0;
  height: auto;
  justify-content: space-evenly;
  max-width: 100vw;
  border-bottom: #fdbe34 1px solid;
  z-index: 99;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const ImgLogo = styled.img`
  width: 150px;
  height: 50px;
`
export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  color: #000;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`
export const NavDropdownCustom = styled(NavDropdown)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  z-index: 99;
`

export const NavDropdownItemCustom = styled(NavDropdown.Item)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  &:hover {
    font-weight: bold;
    transition: 0.5s;
  }
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavIconMobile = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    border: none;
  }
`
export const ImgNavMobile = styled.img`
  width: 30px;
  height: auto;
`
