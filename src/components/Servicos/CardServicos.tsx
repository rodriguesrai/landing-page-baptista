import { ServicosData } from '../../data/ServicosData'
import {
  ButtonsContainer,
  CardButtonStyled,
  CardStyled,
  DescriptionStyled,
  TitleStyled,
} from './CardServicos.styled'

export default function CardServicos() {
  return (
    <>
      {ServicosData.map((servico, index) => (
        <CardStyled key={index}>
          <TitleStyled>{servico.title}</TitleStyled>
          <DescriptionStyled>{servico.description}</DescriptionStyled>
          <ButtonsContainer>
            <CardButtonStyled href='#'>Informações</CardButtonStyled>
            <CardButtonStyled href='#'>Entre em contato</CardButtonStyled>
          </ButtonsContainer>
        </CardStyled>
      ))}
    </>
  )
}
