import React from 'react'
import logo from '../assets/banner_logo_advogado.jpg'
import { HeaderContainer, ImgLogo, NavHeader, StyledLink } from '../styles/Header'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <ImgLogo src={ logo } alt="Logo Baptista"  />
      </Link>
      <NavHeader>
      <StyledLink to='/' className=''>
        <h1>Início</h1>
      </StyledLink>
      <StyledLink to='/sobre'>
        <h1>Sobre</h1>
      </StyledLink>
      <StyledLink to='/contato'>
        <h1>Contato</h1>
      </StyledLink>
      <StyledLink to='/servicos'>
        <h1>Plano de Previdência</h1>
      </StyledLink>
      </NavHeader>
    </HeaderContainer>
  )
}
