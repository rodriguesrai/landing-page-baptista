import {
  ButtonContato,
  MainContainerInicio,
  AsideContato,
  ContainerContato,
  ImgLogoStyled,
  SmallStyled,
  PostagensSectionContainer,
  PostsContainer,
} from '../styles/Inicio.styled'
import Logo from '../assets/914228.svg'
import PostThumb from '../assets/thumbpost1.jpeg'
import Post from '../components/Inicio/Post'

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
        <PostagensSectionContainer>
          <h2>Confira alguns de nossos conteúdos</h2>
          <PostsContainer>
            <Post
              link='https://www.instagram.com/p/C14Nn98riHu/?img_index=1'
              image={PostThumb}
            />
            <Post
              link='https://www.instagram.com/p/C14Nn98riHu/?img_index=1'
              image={PostThumb}
            />
            <Post
              link='https://www.instagram.com/p/C14Nn98riHu/?img_index=1'
              image={PostThumb}
            />
            <Post
              link='https://www.instagram.com/p/C14Nn98riHu/?img_index=1'
              image={PostThumb}
            />
          </PostsContainer>
        </PostagensSectionContainer>
      </MainContainerInicio>
    </>
  )
}
