import {
  Navbar,
  NavDropdownCustom,
  NavDropdownItemCustom,
  NavItem,
} from './NavDesktop.styled'
import { Link } from 'react-router-dom'

export default function NavDesktop() {
  return (
    <>
      <Navbar>
        <NavItem to='/'>Início</NavItem>
        <NavDropdownCustom title='O Escritório' id='nv-dropdown'>
          <NavDropdownItemCustom as={Link} to='/escritorio'>
            Unidades
          </NavDropdownItemCustom>
          <NavDropdownItemCustom as={Link} to='/escritorio'>
            FAQ
          </NavDropdownItemCustom>
        </NavDropdownCustom>
        <NavItem to='/contatos'>Contatos</NavItem>
        <NavItem to='/servicos'>Plano de Previdência</NavItem>
      </Navbar>
    </>
  )
}
