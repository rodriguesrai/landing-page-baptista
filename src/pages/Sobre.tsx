import CardEquipe from '../components/Sobre/CardEquipe'
import { deploymentsData } from '../data/DeploysData'
import {
  EquipeContainer,
  UnidadeContainer,
  CardEquipeMainContainer,
  PageWrapper,
} from '../styles/Sobre.styled'
import { CamposPictures } from '../data/ImagesCarouselData'

import MyCarousel from '../components/Sobre/Carousel'

export default function Sobre() {
  return (
    <>
      <PageWrapper>
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
          <MyCarousel imageSrc={CamposPictures.imageSrc} />
        </UnidadeContainer>
      </PageWrapper>
    </>
  )
}
