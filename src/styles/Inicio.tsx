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
export const EquipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80vw;
  align-items: center;
  margin-right: 20px;
  h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }

  p {
    text-align: left;
    max-width: 70%;
    margin-top: 1rem;
    font-size: 1rem;
  }
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
  border: solid red 3px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: auto;
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

export const CardEquipeContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const ImgEquipe = styled.img`
  display: flex;
  width: 200px;
  height: auto;
  border-radius: 50%;
  margin: 10px;
`

export const IconSocial = styled.img`
  width: 50px;
  height: auto;
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
