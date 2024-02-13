import { BackgroundImage } from '../styles/Inicio.styled'
import { MainContainer } from '../styles/NotFound.styled'
import { TbError404 } from 'react-icons/tb'

export default function NotFound() {
  return (
    <>
      <MainContainer>
        <BackgroundImage />
        <TbError404 size={90} />
        <h1>Ops! Página não encontrada</h1>
        <p>
          Parece que você tentou acessar uma página que não existe. Por favor,
          verifique o endereço ou retorne à página inicial.
        </p>
      </MainContainer>
    </>
  )
}
