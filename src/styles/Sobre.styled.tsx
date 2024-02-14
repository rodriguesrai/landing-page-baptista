import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

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

  p {
    text-align: left;
    max-width: 70%;
    margin-top: 1rem;
    font-size: 1rem;
  }
`
export const CardEquipeMainContainer = styled.div`
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

// unidades
export const UnidadeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
