import { useState } from 'react'

import {
  Dropdown,
  Navbar,
  NavIconMobile,
  NavItem,
  NavItemContent,
  NavItemDropdown,
  NavItemNoLink,
} from './NavMobile.styled'
import { MdArrowDropDown, MdArrowDropDownCircle } from 'react-icons/md'
import { TbPigMoney } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { IoMdHome } from 'react-icons/io'
import { HiBuildingOffice } from 'react-icons/hi2'
import { BsTelephone } from 'react-icons/bs'

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
        {openNav === 'closed' ? (
          <GiHamburgerMenu size={30} />
        ) : (
          <IoMdClose size={33} />
        )}
      </NavIconMobile>
      <Navbar $nav={openNav}>
        <NavItem onClick={toggleNavBar} to='/'>
          <NavItemContent>
            <IoMdHome size={22} />
            <p>Início</p>
          </NavItemContent>
        </NavItem>

        <NavItemNoLink onClick={toggleDropdown}>
          <NavItemContent>
            <HiBuildingOffice size={22} />
            <p>Escritório</p>
            {openDropdown === 'closed' ? (
              <MdArrowDropDown />
            ) : (
              <MdArrowDropDownCircle />
            )}
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
          </Dropdown>
        )}

        <NavItem onClick={toggleNavBar} to='/contatos'>
          <NavItemContent>
            <BsTelephone size={22} />
            <p>Contatos</p>
          </NavItemContent>
        </NavItem>

        <NavItem onClick={toggleNavBar} to='/servicos'>
          <NavItemContent>
            <TbPigMoney size={22} />
            <p>Aposentadoria Planejada</p>
          </NavItemContent>
        </NavItem>
      </Navbar>
    </>
  )
}
