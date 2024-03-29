import {
  ButtonContato,
  MainContainerInicio,
  AsideContato,
  ContainerContato,
  ImgLogoStyled,
  PostagensSectionContainer,
  PostsContainer,
  ContainerImgInicio,
  BackgroundImage,
  ImgEquipeStyled,
  LinkStyled,
} from '../styles/Inicio.styled'
import Beatriz1 from '../assets/Beatriz1.jpg'
import Beatriz2 from '../assets/Beatriz2.jpg'
import PostThumb from '../assets/thumbpost1.jpeg'
import Post from '../components/Inicio/Post'
import logo from '../assets/914228.svg'

export default function Inicio() {
  return (
    <>
      <MainContainerInicio>
        <BackgroundImage />
        <ContainerContato>
          <AsideContato>
            <ImgLogoStyled src={logo} />
            <p>
              Escritório de advocacia empenhado em proteger seus direitos,
              acolher suas dores e <b>cuidar do seu futuro.</b>
            </p>
            <LinkStyled to='/contatos'>
              <ButtonContato>
                ENTRE EM CONTATO PARA NOS INFORMAR SEU CASO
              </ButtonContato>
            </LinkStyled>
            <p>
              Atuamos em <b>diversas áreas do direito</b> com especialistas
              dedicados em resolver sua questão.
            </p>
          </AsideContato>
          <ContainerImgInicio>
            <ImgEquipeStyled src={Beatriz1} />
            <ImgEquipeStyled src={Beatriz2} />
          </ContainerImgInicio>
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
