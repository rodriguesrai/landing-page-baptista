import {
  ButtonStyled,
  ButtonsContainer,
  ContatosWrapper,
  EnderecoText,
  EnderecoWithIcon,
  EnderecosContainer,
  ImgButtonEmail,
  ImgButtonInstagram,
  ImgButtonWhats,
  PageWraperContato,
  SpanStyled,
  TextsContainer,
} from '../styles/Contatos.styled'
import { BackgroundImage } from '../styles/Inicio.styled'
import { SiGooglemaps } from 'react-icons/si'

export default function Contatos() {
  return (
    <>
      <PageWraperContato>
        <BackgroundImage />
        <TextsContainer>
          <h2>Entre em contato e agende uma consulta.</h2>
          <h3>Atendimento para todo o Brasil.</h3>
        </TextsContainer>
        <ContatosWrapper>
          <ButtonsContainer>
            <ButtonStyled href='https://w.app/AI3lmU' target='_blank'>
              <ImgButtonWhats />
              <SpanStyled>{'(22) 98146-7225'}</SpanStyled>
            </ButtonStyled>

            <ButtonStyled>
              <ImgButtonEmail href='mailto:baptistaadvocacia.rj@gmail.com' />
              <SpanStyled>Email</SpanStyled>
            </ButtonStyled>

            <ButtonStyled
              href='https://www.instagram.com/baptistaadvocacia/?hl=pt-br'
              target='_blank'
            >
              <ImgButtonInstagram />
              <SpanStyled>Instagram</SpanStyled>
            </ButtonStyled>
          </ButtonsContainer>
          <EnderecosContainer>
            <h2>Nossos endereços</h2>
            <EnderecoWithIcon>
              <SiGooglemaps size={25} />
              <EnderecoText>
                <p>Campos dos Goytacazes - RJ</p>
                <p>Rua Voluntários da Pátria, 487, Sala 503 | CEP 28035-260</p>
              </EnderecoText>
            </EnderecoWithIcon>
            <EnderecoWithIcon>
              <SiGooglemaps size={25} />
              <EnderecoText>
                <p>Cambuci - RJ</p>
                <p>Rua Faustino Mamede, 64, centro | CEP 28430-000</p>
              </EnderecoText>
            </EnderecoWithIcon>
          </EnderecosContainer>
        </ContatosWrapper>
      </PageWraperContato>
    </>
  )
}
