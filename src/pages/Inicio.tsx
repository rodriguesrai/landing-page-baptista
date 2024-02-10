import {
  ButtonContato,
  MainContainerInicio,
  AsideContato,
  ContainerContato,
  ImgLogoStyled,
  SmallStyled,
} from '../styles/Inicio.styled'
import Logo from '../assets/logo.png'

export default function Inicio() {
  return (
    <>
      <MainContainerInicio>
        <ContainerContato>
          <ImgLogoStyled src={Logo} />
          <AsideContato>
            <p>
              Estamos aqui para proteger seus direitos, maximizar seus
              benefícios e guiar você por todos os desafios do sistema
              previdenciário. Agende uma consulta e fortaleça o seu caminho para
              uma aposentadoria segura e tranquila.{' '}
            </p>
            <a href='https://w.app/AI3lmU' target='_blank'>
              <ButtonContato>
                Entre em contato com nossos advogados
              </ButtonContato>
            </a>
            <SmallStyled>
              Atendimento presencial e{' '}
              <strong>on-line para todo o Brasil.</strong>
            </SmallStyled>
          </AsideContato>
        </ContainerContato>
      </MainContainerInicio>
    </>
  )
}
