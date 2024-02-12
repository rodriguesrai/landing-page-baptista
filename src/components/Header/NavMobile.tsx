import { useState } from 'react'
import IconNavBarMobile from '../../assets/align-justify-svgrepo-com.svg'
import {
  ImgNavMobile,
  Navbar,
  NavDropdownCustom,
  NavDropdownItemCustom,
  NavIconMobile,
  NavItem,
} from './NavMobile.styled'
import { Link } from 'react-router-dom'

export default function NavMobile() {
  const [openNav, setOpenNav] = useState('closed')

  const toggleNavBar = () => {
    setOpenNav(openNav === 'closed' ? 'open' : 'closed')
  }

  return (
    <>
      <Navbar $nav={openNav}>
        <NavItem onClick={toggleNavBar} to='/'>
          Início
        </NavItem>
        {/* <NavDropdownCustom title='Escritório' id='nav-dropdown'>
          <NavDropdownItemCustom
            as={Link}
            to='/escritorio'
            onClick={toggleNavBar}
          >
            Unidades
          </NavDropdownItemCustom>
          <NavDropdownItemCustom
            as={Link}
            to='/escritorio'
            onClick={toggleNavBar}
          >
            FAQ
          </NavDropdownItemCustom>
        </NavDropdownCustom> */}
        <NavItem onClick={toggleNavBar} to='/contatos'>
          Contatos
        </NavItem>
        <NavItem onClick={toggleNavBar} to='/servicos'>
          Plano de Previdência
        </NavItem>
      </Navbar>

      <NavIconMobile onClick={toggleNavBar}>
        <ImgNavMobile src={IconNavBarMobile} alt='expande menu' />
      </NavIconMobile>
    </>
  )
}
