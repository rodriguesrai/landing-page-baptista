import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const EquipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80vh;
  align-items: center;
  margin-right: 20px;
  h1 {
    font-size: 2rem;
    margin-top: 1rem;
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
  background-color: #f2f7ff;
  padding: 50px;
  height: 95vh;
  width: 100vw;
`

export const CardEquipeContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px;
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
  border: 2px solid #1a1a1a;
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

export const AsideContato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 20vw;

  p {
    text-align: left;
    margin-bottom: 35px;
    margin-top: 15px;
    font-size: 1rem;
    max-width: 80%;
    line-height: 1.8;
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