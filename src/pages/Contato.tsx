import {
  ButtonStyled,
  ButtonsContainer,
  ContatosWrapper,
  EnderecosContainer,
  ImgButtonEmail,
  ImgButtonInstagram,
  ImgButtonWhats,
  PageWraperContato,
  TextsContainer,
} from '../styles/Contatos.styled'

export default function Contatos() {
  return (
    <>
      <PageWraperContato>
        <TextsContainer>
          <h2>Entre em contato e agende uma consulta.</h2>
          <h3>Atendimento para todo o Brasil.</h3>
        </TextsContainer>
        <ContatosWrapper>
          <EnderecosContainer>
            <h2>Nossos Endereços</h2>
            <p>Campos dos Goytacazes - RJ</p>
            <p>Rua Voluntários da Pátria, 487, Sala 503 | CEP 28035-260</p>
            <p>Cambuci - RJ</p>
            <p>Rua Faustino Mamede, 64, centro | CEP 28430-000</p>
          </EnderecosContainer>
          <ButtonsContainer>
            <ButtonStyled href='https://w.app/AI3lmU'>
              <ImgButtonWhats />
              {'(22) 98146-7225'}
            </ButtonStyled>
            <ButtonStyled>
              <ImgButtonEmail />
              baptistaadvocacia.rj@gmail.com
            </ButtonStyled>
            <ButtonStyled>
              <ImgButtonInstagram />
              baptistaadvocacia.rj@gmail.com
            </ButtonStyled>
          </ButtonsContainer>
        </ContatosWrapper>
      </PageWraperContato>
    </>
  )
}
