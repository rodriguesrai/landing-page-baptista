import CardEquipe from '../components/Escritorio/CardEquipe'
import { deploymentsData } from '../data/DeploysData'
import {
  EquipeContainer,
  UnidadeContainer,
  ServicosContainer,
  FaqContainer,
  CustomAccordionHeader,
  CustomAccordionBody,
  CustomAccordion,
  CardsContainer,
  CardEquipeMainContainer,
} from '../styles/Escritorio.styled'

import { Accordion } from 'react-bootstrap'
import { FaqData } from '../data/FaqData'
import CardServicos from '../components/Escritorio/CardServicos'
import MyCarousel from '../components/Escritorio/Carousel'

export default function Escritorio() {
  return (
    <>
      <EquipeContainer>
        <h1>Nossa equipe</h1>
        <CardEquipeMainContainer>
          {deploymentsData.map((deploy, index) => (
            <CardEquipe
              key={index}
              img={deploy.img}
              nome={deploy.nome}
              descricao={deploy.descricao}
              contatoInstagram={deploy.contatoInstagram}
            />
          ))}
        </CardEquipeMainContainer>
      </EquipeContainer>

      <UnidadeContainer>
        <h1>Unidades</h1>
        <MyCarousel />
      </UnidadeContainer>

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
    </>
  )
}
