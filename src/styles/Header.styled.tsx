import { Link } from 'react-router-dom'
import styled from 'styled-components'

type NavbarProps = {
  nav: boolean
}

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
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    font-size: 1.4rem;
  }
`

export const Navbar = styled.nav<NavbarProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  border: solid red 3px;
  h1 {
    color: black;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 8px;
  }
  h1:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.nav ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    background-color: #f2f7ff;
    width: 85vw;
    height: auto;
    z-index: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0 20px 0 20px;
    gap: 1rem;

    ${NavItem} {
      position: relative;
      padding-bottom: 0.5rem;

      &:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        right: 0;
        bottom: 0;
        width: 115%;
        height: 1px;
        background-color: #ccc;
      }
    }

    ${NavItem}:first-child {
      margin-top: 1rem;
    }
    ${NavItem}:last-child {
      margin-bottom: 1rem;
    }
  }
`
export const NavIconMobile = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    border: none;
    cursor: pointer;
  }
`
export const ImgNavMobile = styled.img`
  width: 30px;
  height: auto;
`