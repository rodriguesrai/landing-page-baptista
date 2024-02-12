import { Link } from 'react-router-dom'
import styled from 'styled-components'

type NavbarProps = {
  $nav: string
}

type DrowdownProps = {
  $dropdown: string
}

export const NavItemContent = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  color: var(--headerColorText);
  &:hover {
    border-bottom: 1px solid #bcc44c;
  }
`
// navItens
export const NavItem = styled(Link)`
  display: flex;
  width: auto;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--headerColorText);

  p {
    color: var(--headerColorText);
  }
`
export const NavItemNoLink = styled.div`
  display: flex;
  width: auto;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--headerColorText);
`
//dropdown
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
export const Dropdown = styled.div<DrowdownProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  color: var(--headerColorText);
  opacity: ${(props) => (props.$dropdown === 'open' ? 1 : 0)};
  height: ${(props) => (props.$dropdown === 'open' ? 'auto' : 0)};
  visibility: ${(props) => (props.$dropdown === 'open' ? 'visible' : 'hidden')};
  gap: 0.7rem;

  transition:
    opacity 0.3s ease-in-out,
    height 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
`

export const Navbar = styled.nav<NavbarProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: ${(props) => (props.$nav === 'open' ? 1 : 0)};
  height: ${(props) => (props.$nav === 'open' ? 'auto' : 0)};
  visibility: ${(props) => (props.$nav === 'open' ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease-in-out,
    height 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  position: absolute;
  top: 55px;
  background-color: var(--headerColorBackground);
  width: 90vw;
  height: auto;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 1.5rem;

  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
`
export const NavIconMobile = styled.button`
  color: var(--headerColorText);
  display: flex;
  border: none;
  background-color: transparent;
  padding-right: 6rem;
`
