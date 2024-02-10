import { Accordion } from 'react-bootstrap'
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
  gap: 2rem;
`

export const CarouseImage = styled.img`
  width: 800px;
  height: 500px;
`

// servicos

export const ServicosContainer = styled.div`
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

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100%;
`
export const CustomAccordion = styled(Accordion)`
  width: 40vw;
  margin-bottom: 0.2rem;
`

export const CustomAccordionHeader = styled(Accordion.Header)`
  /* width: 40vw; */
`
export const CustomAccordionBody = styled(Accordion.Body)`
  /* width: 40vw; */
`
