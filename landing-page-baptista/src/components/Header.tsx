import { Outlet } from 'react-router-dom'
import { HeaderContainer } from '../styles/Header'


export default function Header() {
  return (
    <>
    <HeaderContainer>
      <h1>Sobre</h1>
      <h1>Serviços</h1>
      <h1>Contato</h1>
    </HeaderContainer>
    <main>
      <Outlet />
    </main>
    </>
  )
}
