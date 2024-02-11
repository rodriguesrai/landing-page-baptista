import styled from 'styled-components'
import backgroundImagem from '../assets/atuacao_oabrj_conselhos_tutelares.jpeg'

export const MainContainerInicio = styled.div`
  display: flex;
  z-index: 1;
  max-width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContainerContato = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  max-width: 100vw;
  background-image: url(${backgroundImagem});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  gap: 10rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: auto;
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
  padding-bottom: 3rem;
  padding-top: 3rem;
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

export const AsideContato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35vw;

  p {
    text-align: left;
    margin-bottom: 35px;
    margin-top: 15px;
    font-size: 1rem;
    max-width: 95%;
    line-height: 2.5;
  }

  @media (max-width: 768px) {
    max-width: 80vw;
    margin-bottom: 3rem;
    p {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`

export const ButtonContato = styled.button`
  appearance: none;
  background-color: #000000;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family:
    Roobert,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: scale(1.05);
  }
`

export const Img = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
  margin: 10px;
`

export const ImgLogoStyled = styled.img`
  width: auto;
  height: 300px;
  @media (max-width: 768px) {
    margin-top: 3rem;
    width: 200px;
    height: auto;
  }
`
export const SmallStyled = styled.small`
  @media (max-width: 768px) {
    text-align: center;
  }
`
