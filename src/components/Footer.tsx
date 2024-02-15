import { AsideContainer, FooterContainer } from '../styles/Footer.styled'
import AsideFooter from './Footer/AsideFooter'

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <AsideContainer>
          <AsideFooter
            title1='Endereço dos nossos escritórios:'
            text1='Campos dos Goytacazes, RJ - Rua Voluntários da Pátria, 487, Sala 503 | CEP 28035-260'
            text2='Cambuci, RJ - Rua Faustino Mamede, 64, centro | CEP 28430-000'
          />
          <AsideFooter
            title1={'Horário de atendimento'}
            title2={'Presencial'}
            text2={'Segunda a sexta das 9h às 12h - 14h às 17h'}
            title3={'Online'}
            text3='Segunda a sexta das 9h às 18h'
          />
          <AsideFooter
            title1='Contatos'
            text1='Tel: (22) 98146-7225'
            text2='Email: baptistaadvocacia.rj@gmail.com'
          />
        </AsideContainer>
      </FooterContainer>
    </>
  )
}
