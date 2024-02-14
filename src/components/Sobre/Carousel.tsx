import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'

const CarouselImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export type CarouselProps = {
  imageSrc: string[]
}

const CarouselContainer = styled.div`
  display: flex;
  width: 800px;
  max-width: 90%;
  height: auto;
`

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
