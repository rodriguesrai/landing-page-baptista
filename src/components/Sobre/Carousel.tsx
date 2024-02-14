import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'

const CarouselImage = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 500px;
`
export type CarouselProps = {
  imageSrc: string[]
}

const CarouselContainer = styled.div``

export default function MyCarousel({ imageSrc }: CarouselProps) {
  return (
    <>
      <CarouselContainer>
        <Carousel fade>
          {imageSrc.map((image, index) => (
            <Carousel.Item key={index}>
              <CarouselImage src={image} />
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselContainer>
    </>
  )
}
