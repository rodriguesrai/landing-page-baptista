import { Container, Grid, Typography } from '@mui/material'
import {
  ContactButton,
  LineComponent,
  Paragraph,
  ServiceBox,
  ServicesContainer,
} from './Servicos.styled'

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

export default function PageTest() {
  return (
    <div>
      <ServicesContainer>
        <Typography variant='h3'>Nossos serviços</Typography>
        <Paragraph variant='body1'>
          Com o Peres Baptista Advocacia, você tem 100% de segurança para se
          preparar para o melhor benefício possível
        </Paragraph>
      </ServicesContainer>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ServiceBox>
              <Typography variant='h5'>Consulta Previdenciária</Typography>
              <Typography variant='body1'>
                Serviço voltado para quem precisa conhecer os seus direitos ou
                encontrar uma solução especializada para algum problema
                previdenciário. Atendemos em todo o Brasil e exterior.
              </Typography>
              <ContactButton variant='outlined'>
                ENTRAR EM CONTATO
              </ContactButton>
            </ServiceBox>
          </Grid>
          <LineComponent></LineComponent>
          {/* Grid para os serviços restantes */}
          {services.slice(1).map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ServiceBox>
                <Typography variant='h5'>{service.title}</Typography>
                <Typography variant='body1'>{service.description}</Typography>
                <ContactButton variant='outlined'>
                  ENTRAR EM CONTATO
                </ContactButton>
              </ServiceBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
