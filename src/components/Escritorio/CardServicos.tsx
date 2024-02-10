import Card from 'react-bootstrap/Card'
import { ServicosData } from '../../data/ServicosData'

console.log(ServicosData)
export default function CardServicos() {
  return (
    <>
      {ServicosData.map((servico, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{servico.title}</Card.Title>
            <Card.Text>{servico.description}</Card.Text>
            <Card.Link href='#'>Informações</Card.Link>
            <Card.Link href='#'>Entre em contato</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
