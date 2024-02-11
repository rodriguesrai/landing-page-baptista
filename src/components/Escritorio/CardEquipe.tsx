import instagramIcon from '../../assets/instagramIcon.svg'
import { CardEquipeProps } from '../../types/Equipe'
import { CardPersonContainer, ImgEquipe, IconSocial } from './CardEquipe.styled'

export default function CardEquipe({
  img,
  nome,
  descricao,
  contatoInstagram,
}: CardEquipeProps) {
  return (
    <>
      <CardPersonContainer>
        <ImgEquipe src={img} alt={nome} />
        <h2>{nome}</h2>
        <p>{descricao}</p>
        {contatoInstagram && (
          <a
            href={`https://www.instagram.com/${contatoInstagram}`}
            target='_blank'
          >
            <IconSocial src={instagramIcon} alt='ícone do instagram' />
          </a>
        )}
      </CardPersonContainer>
    </>
  )
}
