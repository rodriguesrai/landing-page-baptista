import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type NavbarProps = {
  $nav: string
}

export const NavDropdownCustom = styled(NavDropdown)`
  display: flex;
  cursor: pointer;
  justify-content: center;
  font-size: 1.2rem;
  max-width: 30%;

  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;

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
export const NavItem = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #000;
  max-width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`

export const Navbar = styled.nav<NavbarProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: ${(props) => (props.$nav === 'open' ? 1 : 0)};
  height: ${(props) => (props.$nav === 'open' ? 'auto' : 0)};
  visibility: ${(props) => (props.$nav === 'open' ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease-in-out,
    height 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  position: absolute;
  top: 60px;
  background-color: var(--headerColor);
  width: 85vw;
  height: auto;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0 20px 0 20px;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
export const NavIconMobile = styled.button`
  display: flex;
  border: none;
`
export const ImgNavMobile = styled.img`
  width: 30px;
  height: auto;
`
