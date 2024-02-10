import { useState } from 'react'
import logo from '../assets/banner_logo_advogado.jpg'
import IconNavBarMobile from '../assets/align-justify-svgrepo-com.svg'
import {
  HeaderContainer,
  ImgLogo,
  ImgNavMobile,
  Navbar,
  NavDropdownCustom,
  NavDropdownItemCustom,
  NavIconMobile,
  NavItem,
} from '../styles/Header.styled'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

export default function Header() {
  const [openNav, setOpenNav] = useState(false)

  const toggleNavBar = () => {
    setOpenNav(!openNav)
  }
  return (
    <HeaderContainer>
      <Link to='/'>
        <ImgLogo src={logo} alt='Logo Baptista' />
      </Link>
      <NavIconMobile onClick={toggleNavBar}>
        <ImgNavMobile src={IconNavBarMobile} alt='expande menu' />
      </NavIconMobile>
      <Navbar nav={openNav}>
        <NavItem to='/'>
          <h1>Início</h1>
        </NavItem>

        <NavDropdownCustom title='O Escritório' id='nav-dropdown'>
          <NavDropdownItemCustom href='/escritorio'>
            Opção 1
          </NavDropdownItemCustom>
          <NavDropdownItemCustom href='/outra-opcao'>
            Opção 2
          </NavDropdownItemCustom>
        </NavDropdownCustom>

        <NavItem to='/escritorio'>
          <h1>O Escritório</h1>
        </NavItem>
        <NavItem to='/contatos'>
          <h1>Contatos</h1>
        </NavItem>
        <NavItem to='/servicos'>
          <h1>Plano de Previdência</h1>
        </NavItem>
      </Navbar>
    </HeaderContainer>
  )
}
