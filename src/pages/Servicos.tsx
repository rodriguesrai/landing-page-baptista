import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material'
import {
  AccordionsContainer,
  ContactButton,
  FAQWrapper,
  GridContainer,
  GridItem,
  GridItemHalf,
  LineComponent,
  ParagraphBody1,
  ParagraphTitle,
  ServiceBox,
  ServicesContainer,
  TitleH3,
  TitleH5,
} from './Servicos.styled'
import { FaqData } from '../data/FaqData'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FaqSection from '../components/Servicos/FaqSection'

const services = [
  {
    title: 'Aposentadoria',
    description:
      'Cuidamos do seu processo do início ao fim para que você não precise se incomodar com nada. Você vai receber todos os cálculos, processos administrativos, judiciais e até Imposto de Renda.',
  },
  {
    title: 'Auxílio-Doença',
    description:
      'Cuidamos do seu processo do início ao fim para que você não precise se incomodar com nada. Você vai receber todos os cálculos, processos administrativos, judiciais e até Imposto de Renda.',
  },
  {
    title: 'Auxílio-Doença',
    description:
      'Cuidamos do seu processo do início ao fim para que você não precise se incomodar com nada. Você vai receber todos os cálculos, processos administrativos, judiciais e até Imposto de Renda.',
  },
  {
    title: 'Plano de Previdência',
    description:
      'Cuidamos do seu processo do início ao fim para que você não precise se incomodar com nada. Você vai receber todos os cálculos, processos administrativos, judiciais e até Imposto de Renda.',
  },
]

export default function Servicos() {
  return (
    <>
      <ServicesContainer>
        <TitleH3>Nossos serviços</TitleH3>
        <ParagraphTitle>
          Com o Peres Baptista Advocacia, você tem 100% de segurança para se
          preparar para o melhor benefício possível
        </ParagraphTitle>
      </ServicesContainer>

      <Container>
        <GridContainer>
          <GridItem>
            <ServiceBox>
              <TitleH5>Consulta Previdenciária</TitleH5>
              <ParagraphTitle>
                Serviço voltado para quem precisa conhecer os seus direitos ou
                encontrar uma solução especializada para algum problema
                previdenciário. Atendemos em todo o Brasil e exterior.
              </ParagraphTitle>
              <ContactButton>ENTRAR EM CONTATO</ContactButton>
            </ServiceBox>
          </GridItem>
          <LineComponent></LineComponent>
          {services.slice(1).map((service, index) => (
            <GridItemHalf key={index}>
              <ServiceBox>
                <TitleH5>{service.title}</TitleH5>
                <ParagraphBody1>{service.description}</ParagraphBody1>
                <ContactButton>ENTRAR EM CONTATO</ContactButton>
              </ServiceBox>
            </GridItemHalf>
          ))}
        </GridContainer>
      </Container>
      <FaqSection faqs={FaqData} />
    </>
  )
}
