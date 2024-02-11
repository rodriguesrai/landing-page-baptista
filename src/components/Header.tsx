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

export default function Header() {
  const [openNav, setOpenNav] = useState('closed')

  const toggleNavBar = () => {
    setOpenNav(openNav === 'closed' ? 'open' : 'closed')
  }
  return (
    <HeaderContainer>
      <Link to='/'>
        <ImgLogo src={logo} alt='Logo Baptista' />
      </Link>
      <NavIconMobile onClick={toggleNavBar}>
        <ImgNavMobile src={IconNavBarMobile} alt='expande menu' />
      </NavIconMobile>

      <Navbar $nav={openNav}>
        <NavItem to='/'>Início</NavItem>

        <NavDropdownCustom title='O Escritório' id='nav-dropdown'>
          <NavDropdownItemCustom as={Link} to='/escritorio'>
            Opção 1
          </NavDropdownItemCustom>
          <NavDropdownItemCustom as={Link} to='/escritorio'>
            FAQ
          </NavDropdownItemCustom>
        </NavDropdownCustom>

        <NavItem to='/escritorio'>O Escritório</NavItem>
        <NavItem to='/contatos'>Contatos</NavItem>
        <NavItem to='/servicos'>Plano de Previdência</NavItem>
      </Navbar>
    </HeaderContainer>
  )
}
