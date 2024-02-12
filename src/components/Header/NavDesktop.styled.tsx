import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  color: var(--headerColorText);
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
  z-index: 99;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  & .dropdown-menu {
    background-color: #f2f7ff;
  }
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

  p {
    color: var(--headerColorText);
  }
`
