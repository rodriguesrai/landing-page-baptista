import {
  ButtonContato,
  MainContainerInicio,
  AsideContato,
  EquipeContainer,
  ContainerContato,
  CardEquipeContainer,
  ImgLogoStyled,
  SmallStyled,
  CardContainer,
} from '../styles/Inicio'
import Arya from '../assets/arya.jpeg'
import Logo from '../assets/logo.png'
import CardEquipe from '../components/Inicio/CardEquipe'

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
        <EquipeContainer>
          <h1>Nossa equipe</h1>
          <CardEquipeContainer>
            <CardContainer>
              <CardEquipe
                img={Arya}
                nome='Arya Stark'
                descricao='Advogada especialista em direito previdenciário'
                contatoInstagram='beatrizbaptista.adv'
              />
            </CardContainer>
            <CardContainer>
              <CardEquipe
                img={Arya}
                nome='Arya Stark'
                descricao='Advogada especialista em direito previdenciário'
                contatoInstagram='beatrizbaptista.adv'
              />
            </CardContainer>
          </CardEquipeContainer>
        </EquipeContainer>
      </MainContainerInicio>
    </>
  )
}
