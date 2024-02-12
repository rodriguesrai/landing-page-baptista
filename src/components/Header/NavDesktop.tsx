import { Navbar, NavItem } from './NavDesktop.styled'

export default function NavDesktop() {
  return (
    <>
      <Navbar>
        <NavItem to='/'>Início</NavItem>
        <NavItem to='/escritorio'>Escritório</NavItem>
        <NavItem to='/contatos'>Contatos</NavItem>
        <NavItem to='/servicos'>Plano de Previdência</NavItem>
      </Navbar>
    </>
  )
}
