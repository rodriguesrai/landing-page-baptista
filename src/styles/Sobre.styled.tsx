import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  padding-bottom: 5rem;
  gap: 3rem;
`

// equipe
export const CardEquipeMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 55%;
  min-height: auto;
  height: auto;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1200px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const EquipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
  gap: 3rem;
  padding-top: 3rem;
`
export const TextEquip = styled.p`
  max-width: 55%;
  line-height: 2rem;
  text-align: justify;

  @media (max-width: 1200px) {
    max-width: 80%;
  }
`

// unidades
export const UnidadeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 100vw;
  width: 100%;
  gap: 2rem;
`
