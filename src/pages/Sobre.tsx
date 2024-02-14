import CardEquipe from '../components/Sobre/CardEquipe'
import { deploymentsData } from '../data/DeploysData'
import {
  EquipeContainer,
  UnidadeContainer,
  CardEquipeMainContainer,
  PageWrapper,
  TextEquip,
} from '../styles/Sobre.styled'
import { CamposUnit, CambuciUnit } from '../data/ImagesCarouselData'

import MyCarousel from '../components/Sobre/Carousel'
import { BackgroundImage } from '../styles/Inicio.styled'

export default function Sobre() {
  return (
    <>
      <PageWrapper>
        <BackgroundImage />
        <EquipeContainer>
          <TextEquip>
            Lorem ipsum dolor sit amet. Et mollitia voluptate hic dolores unde
            et dolore voluptates ut obcaecati nemo cum amet necessitatibus eos
            tempora accusamus. Qui aspernatur placeat qui earum dolor qui omnis
            dolor At aliquam odio eum iure libero cum obcaecati numquam aut
            dolores consequatur? Non ipsa itaque eos temporibus voluptatem vel
            tempora ipsa ut quisquam voluptas At saepe quia hic architecto
            praesentium. Qui vero reiciendis est quae aliquam hic praesentium
            neque ad suscipit dolor. Ut animi porro quo dignissimos totam hic
            labore quasi aut minus quia?
          </TextEquip>
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
          <h3>{CamposUnit.local}</h3>
          <MyCarousel imageSrc={CamposUnit.imageSrc} />
          <h3>{CambuciUnit.local}</h3>
          <MyCarousel imageSrc={CambuciUnit.imageSrc} />
        </UnidadeContainer>
      </PageWrapper>
    </>
  )
}
