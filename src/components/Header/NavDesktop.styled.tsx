import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type DrowdownProps = {
  $dropdown: string
}

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
export const NavitemnNoLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`

export const NavItemNoLink = styled.div`
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
export const Navbar = styled.nav`
  position: relative;
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
// dropdown

export const Dropdown = styled.div<DrowdownProps>`
  position: absolute;
  top: 135%; /* Posiciona abaixo do header */
  width: auto; /* Largura total do elemento pai (NavItemNoLink) */
  left: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--headerColorBackground);
  color: var(--headerColorText);
  opacity: ${(props) => (props.$dropdown === 'open' ? 1 : 0)};
  height: ${(props) => (props.$dropdown === 'open' ? 'auto' : 0)};
  visibility: ${(props) => (props.$dropdown === 'open' ? 'visible' : 'hidden')};
  gap: 1rem;
  padding: 1rem;

  transition:
    opacity 0.3s ease-in-out,
    height 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
`

export const NavItemDropdown = styled(Link)`
  display: flex;
  width: auto;
  cursor: pointer;
  font-size: 1rem;
  color: var(--headerColorText);
  &:hover {
    border-bottom: none;
  }
`
