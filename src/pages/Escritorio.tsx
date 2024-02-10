import CardEquipe from '../components/Escritorio/CardEquipe'
import {
  EquipeContainer,
  CardEquipeContainer,
  CardContainer,
  UnidadeContainer,
  CarouseImage,
  ServicosContainer,
} from '../styles/Escritorio.styled'
import 'bootstrap/dist/css/bootstrap.css'
import Arya from '../assets/arya.jpeg'
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from '../assets/escritórios/download (1).jpeg'
import ImageTwo from '../assets/escritórios/download.jpeg'
import Imagem3 from '../assets/escritórios/download 3.jpg'
import { Button, Card } from 'react-bootstrap'

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
        <h1>Escritórios</h1>
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
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </ServicosContainer>
    </>
  )
}
