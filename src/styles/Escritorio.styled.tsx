import styled from 'styled-components'

// equipe
export const EquipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100%;
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
// unidades
export const UnidadeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CarouseImage = styled.img`
  width: 1000px;
  height: auto;
`

// servicos

export const ServicosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
