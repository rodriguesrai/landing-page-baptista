import { ButtonContato, MainContainer, AsideContato, AsideEquipe, ContainerContato } from '../styles/Inicio'
import Arya from '../assets/arya.jpeg'
import Floki from '../assets/floki.jpeg'
import CardEquipe from '../components/Inicio/CardEquipe'



export default function Inicio() {
  return (
    <>
      <MainContainer>    
        <ContainerContato>       
          <AsideContato>
          <p>Estamos aqui para proteger seus direitos, maximizar seus benefícios e guiar você por todos os desafios do sistema previdenciário. Agende uma consulta e fortaleça o seu caminho para uma aposentadoria segura e tranquila. </p>
          <a href='https://w.app/AI3lmU' target='_blank' >          
          <ButtonContato>
            Entre em contato com nossos advogados
          </ButtonContato>
          </a>
          </AsideContato>
        </ContainerContato>
          <h1>Nossa equipe</h1>
        <AsideEquipe>
          <CardEquipe
            img={ Arya }
            nome='Arya Stark'
            descricao='Advogada especialista em direito previdenciário'
            contatoInstagram='beatrizbaptista.adv'
          />
                    <CardEquipe
            img={ Arya }
            nome='Arya Stark'
            descricao='Advogada especialista em direito previdenciário'
            contatoInstagram='beatrizbaptista.adv'
          />
        </AsideEquipe>
      </MainContainer>
    </>
  )
}

