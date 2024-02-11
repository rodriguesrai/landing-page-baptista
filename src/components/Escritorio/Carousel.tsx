import ImageOne from '../../assets/escritórios/download (1).jpeg'
import ImageTwo from '../../assets/escritórios/download.jpeg'
import Imagem3 from '../../assets/escritórios/download 3.jpg'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

export const CarouseImage = styled.img`
  width: 800px;
  height: 500px;
`
export const CarouseWrapper = styled.div`
  display: flex;
`

export default function MyCarousel() {
  return (
    <>
      <CarouseWrapper>
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
      </CarouseWrapper>
    </>
  )
}
