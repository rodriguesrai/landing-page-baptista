import { useState } from 'react'
import {
  Dropdown,
  Navbar,
  NavItem,
  NavItemDropdown,
  NavitemnNoLinkContainer,
  NavItemNoLink,
} from './NavDesktop.styled'
import { MdArrowDropDown, MdArrowDropDownCircle } from 'react-icons/md'

export default function NavDesktop() {
  const [openDropdown, setOpenDropdown] = useState('closed')

  const toggleDropdown = () => {
    setOpenDropdown(openDropdown === 'closed' ? 'open' : 'closed')
  }
  return (
    <>
      <Navbar>
        <NavItem to='/'>Início</NavItem>
        <NavitemnNoLinkContainer>
          <NavItemNoLink onClick={toggleDropdown}>Escritório</NavItemNoLink>
          {openDropdown === 'closed' ? (
            <MdArrowDropDown />
          ) : (
            <MdArrowDropDownCircle />
          )}
        </NavitemnNoLinkContainer>
        <Dropdown $dropdown={openDropdown}>
          <NavItemDropdown onClick={toggleDropdown} to='/escritorio'>
            Quem Somos
          </NavItemDropdown>
          <NavItemDropdown onClick={toggleDropdown} to='/escritorio'>
            Áreas de Atuação
          </NavItemDropdown>
        </Dropdown>
        <NavItem to='/contatos'>Contatos</NavItem>
        <NavItem to='/servicos'>Plano de Previdência</NavItem>
      </Navbar>
    </>
  )
}
