import styled from 'styled-components'
import imagemdefundo from '../assets/fundoinicio.svg'
import { Link } from 'react-router-dom'

export const MainContainerInicio = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
`

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${imagemdefundo});
  background-size: auto;
  opacity: 0.08;
  z-index: -1;
`

export const ContainerContato = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 95vh;
  max-width: 60vw;
  width: 100%;
  gap: 10rem;

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    height: auto;
    padding-top: 3rem;
    max-width: 90vw;
  }
`

export const ImgLogoStyled = styled.img`
  width: 300px;
  height: auto;
  max-width: 100vw;
  @media (max-width: 768px) {
    width: 200px;
    height: auto;
  }
`
export const LinkStyled = styled(Link)``

export const ContainerImgInicio = styled.div`
  display: flex;
  max-width: 100vw;

  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ImgEquipeStyled = styled.img`
  width: 19rem;
  height: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const AsideContato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35vw;
  width: 100%;

  p {
    text-align: justify;
    margin-bottom: 1rem;
    margin-top: 15px;
    font-size: 1.1rem;
    max-width: 95%;
    line-height: 2.5;
  }

  @media (min-width: 769px) and (max-width: 1300px) {
    max-width: 80vw;
    width: 100%;
    margin-bottom: 3rem;
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    max-width: 80vw;
    margin-bottom: 3rem;
    p {
      text-align: center;
      margin-bottom: 0;
    }
  }
`
export const ButtonContato = styled.button`
  font-size: 17px;
  padding: 0.5em 2em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background: #17ac37;
  color: white;
  border-radius: 4px;

  &:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, #06640b 0%, #24af18 100%);
  }

  &:active {
    transform: translate(0em, 0.2em);
  }
`

// posts
export const PostagensSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  width: 100%;
  min-height: auto;
  background-color: lemonchiffon;
  gap: 2rem;
  padding-bottom: 5rem;
  padding-top: 3rem;

  h2 {
    text-align: center;
  }
`
export const PostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 100vw;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
