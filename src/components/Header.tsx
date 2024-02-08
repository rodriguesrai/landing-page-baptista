import React from 'react'
import logo from '../assets/banner_logo_advogado.jpg'
import { HeaderContainer, ImgLogo, NavHeader } from '../styles/Header'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <ImgLogo src={logo} alt='Logo Baptista' />
      </Link>
      <NavHeader>
        <Link to='/'>
          <h1>Início</h1>
        </Link>
        <Link to='/sobre'>
          <h1>Sobre</h1>
        </Link>
        <Link to='/contato'>
          <h1>Contato</h1>
        </Link>
        <Link to='/servicos'>
          <h1>Plano de Previdência</h1>
        </Link>
      </NavHeader>
    </HeaderContainer>
  )
}
