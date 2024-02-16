import styled from 'styled-components'
import { Accordion } from 'react-bootstrap'

export const PageServicosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 2rem;
  padding: 3rem 1rem;
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
  flex-wrap: wrap;
  gap: 1rem;
`
// faq
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
  width: 40vw;
`
export const CustomAccordionBody = styled(Accordion.Body)`
  width: 40vw;
`
