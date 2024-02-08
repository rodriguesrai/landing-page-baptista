import { useState } from 'react'
import logo from '../assets/banner_logo_advogado.jpg'
import {
  HeaderContainer,
  ImgLogo,
  Navbar,
  NavIconMobile,
  NavItem,
} from '../styles/Header'
import { Link } from 'react-router-dom'

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
      <NavIconMobile onClick={toggleNavBar}>Menu</NavIconMobile>
      <Navbar nav={openNav}>
        <NavItem to='/'>
          <h1>Início</h1>
        </NavItem>
        <NavItem to='/sobre'>
          <h1>Sobre</h1>
        </NavItem>
        <NavItem to='/contato'>
          <h1>Contato</h1>
        </NavItem>
        <NavItem to='/servicos'>
          <h1>Plano de Previdência</h1>
        </NavItem>
      </Navbar>
    </HeaderContainer>
  )
}
