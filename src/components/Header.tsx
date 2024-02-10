import { useState } from 'react'
import logo from '../assets/banner_logo_advogado.jpg'
import IconNavBarMobile from '../assets/align-justify-svgrepo-com.svg'
import {
  HeaderContainer,
  ImgLogo,
  ImgNavMobile,
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
      <NavIconMobile onClick={toggleNavBar}>
        <ImgNavMobile src={IconNavBarMobile} alt='expande menu' />
      </NavIconMobile>
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
