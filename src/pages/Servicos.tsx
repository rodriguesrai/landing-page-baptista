import CardServicos from '../components/Servicos/CardServicos'
import { FaqData } from '../data/FaqData'
import { Accordion } from 'react-bootstrap'
import { PageServicosWrapper } from '../components/Servicos/Servicos.styled'
import {
  ServicosContainer,
  CardsContainer,
  FaqContainer,
  CustomAccordion,
  CustomAccordionHeader,
  CustomAccordionBody,
} from '../components/Servicos/Servicos.styled'

export default function Servicos() {
  return (
    <>
      <PageServicosWrapper>
        <ServicosContainer>
          <h1>Serviços</h1>
          <CardsContainer>
            <CardServicos />
          </CardsContainer>
        </ServicosContainer>
        <FaqContainer>
          <h1>Perguntas frequentes</h1>
          {FaqData.map((item, index) => (
            <CustomAccordion
              defaultActiveKey={index === 0 ? '0' : null}
              key={index}
            >
              <Accordion.Item eventKey='0'>
                <CustomAccordionHeader>{item.pergunta}</CustomAccordionHeader>
                <CustomAccordionBody>{item.resposta}</CustomAccordionBody>
              </Accordion.Item>
            </CustomAccordion>
          ))}
        </FaqContainer>
      </PageServicosWrapper>
    </>
  )
}
