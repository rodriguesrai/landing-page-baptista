import { useState } from 'react'
import IconNavBarMobile from '../../assets/align-justify-svgrepo-com.svg'
import IconHome from '../../assets/1.svg'
import IconEscritorio from '../../assets/4.svg'
import IconContatos from '../../assets/2.svg'
import IconPrevidencia from '../../assets/3.svg'
import {
  Dropdown,
  ImgNavItem,
  ImgNavMobile,
  Navbar,
  NavIconMobile,
  NavItem,
  NavItemContent,
  NavItemDropdown,
  NavItemNoLink,
} from './NavMobile.styled'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'

export default function NavMobile() {
  const [openNav, setOpenNav] = useState('closed')
  const [openDropdown, setOpenDropdown] = useState('closed')

  const toggleNavBar = () => {
    setOpenNav(openNav === 'closed' ? 'open' : 'closed')
  }

  const toggleDropdown = () => {
    setOpenDropdown(openDropdown === 'closed' ? 'open' : 'closed')
  }

  return (
    <>
      <NavIconMobile onClick={toggleNavBar}>
        <ImgNavMobile src={IconNavBarMobile} alt='expande menu' />
      </NavIconMobile>
      <Navbar $nav={openNav}>
        <NavItem onClick={toggleNavBar} to='/'>
          <NavItemContent>
            <ImgNavItem src={IconHome} alt='home' />
            <p>Início</p>
          </NavItemContent>
        </NavItem>

        <NavItemNoLink onClick={toggleDropdown}>
          <NavItemContent>
            <ImgNavItem
              onClick={toggleDropdown}
              src={IconEscritorio}
              alt='escritório'
            />
            <p>Escritório</p>
            {openDropdown === 'closed' ? <FaArrowRight /> : <FaArrowDown />}
          </NavItemContent>
        </NavItemNoLink>

        {openDropdown === 'open' && (
          <Dropdown $dropdown={openDropdown}>
            <NavItemDropdown onClick={toggleNavBar} to='/escritorio'>
              Quem Somos
            </NavItemDropdown>
            <NavItemDropdown onClick={toggleNavBar} to='/escritorio'>
              Áreas de atuação
            </NavItemDropdown>
            <NavItemDropdown onClick={toggleNavBar} to='/escritorio'>
              Serviços
            </NavItemDropdown>
            <NavItemDropdown onClick={toggleNavBar} to='/escritorio'>
              Unidades
            </NavItemDropdown>
          </Dropdown>
        )}

        <NavItem onClick={toggleNavBar} to='/contatos'>
          <NavItemContent>
            <ImgNavItem src={IconContatos} alt='home' />
            <p>Contatos</p>
          </NavItemContent>
        </NavItem>

        <NavItem onClick={toggleNavBar} to='/servicos'>
          <NavItemContent>
            <ImgNavItem src={IconPrevidencia} alt='home' />
            <p>Aposentadoria Planejada</p>
          </NavItemContent>
        </NavItem>
      </Navbar>
    </>
  )
}
