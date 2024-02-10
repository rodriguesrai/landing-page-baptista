import CardEquipe from '../components/Escritorio/CardEquipe'
import {
  EquipeContainer,
  CardEquipeContainer,
  CardContainer,
  UnidadeContainer,
  CarouseImage,
  ServicosContainer,
  FaqContainer,
  CustomAccordionHeader,
  CustomAccordionBody,
  CustomAccordion,
  CardsContainer,
} from '../styles/Escritorio.styled'
import 'bootstrap/dist/css/bootstrap.css'
import Arya from '../assets/arya.jpeg'
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from '../assets/escritórios/download (1).jpeg'
import ImageTwo from '../assets/escritórios/download.jpeg'
import Imagem3 from '../assets/escritórios/download 3.jpg'
import { Accordion } from 'react-bootstrap'
import { FaqData } from '../data/FaqData'
import CardServicos from '../components/Escritorio/CardServicos'

export default function Escritorio() {
  return (
    <>
      <EquipeContainer>
        <h1>Nossa equipe</h1>
        <CardEquipeContainer>
          <CardContainer>
            <CardEquipe
              img={Arya}
              nome='Arya Stark'
              descricao='Advogada especialista em direito previdenciário'
              contatoInstagram='beatrizbaptista.adv'
            />
          </CardContainer>
          <CardContainer>
            <CardEquipe
              img={Arya}
              nome='Arya Stark'
              descricao='Advogada especialista em direito previdenciário'
              contatoInstagram='beatrizbaptista.adv'
            />
          </CardContainer>
        </CardEquipeContainer>
      </EquipeContainer>
      <UnidadeContainer>
        <h1>Unidades</h1>
        <Carousel>
          <Carousel.Item>
            <CarouseImage src={ImageOne} alt='Image One' />
          </Carousel.Item>
          <Carousel.Item>
            <CarouseImage src={ImageTwo} alt='Image Two' />
          </Carousel.Item>
          <Carousel.Item>
            <CarouseImage src={Imagem3} alt='Image Two' />
          </Carousel.Item>
        </Carousel>
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
