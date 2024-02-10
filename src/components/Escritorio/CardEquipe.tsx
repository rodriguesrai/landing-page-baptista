import { IconSocial, ImgEquipe } from '../../styles/Inicio.styled'
import instagramIcon from '../../assets/instagramIcon.svg'
import { CardEquipeProps } from '../../types/Equipe'
import { CardPersonContainer } from '../../styles/Escritorio.styled'

export default function CardEquipe(props: CardEquipeProps) {
  return (
    <>
      <CardPersonContainer>
        <ImgEquipe src={props.img} alt={props.nome} />
        <h2>{props.nome}</h2>
        <p>{props.descricao}</p>
        {props.contatoInstagram && (
          <a
            href={`https://www.instagram.com/${props.contatoInstagram}`}
            target='_blank'
          >
            <IconSocial src={instagramIcon} alt='ícone do instagram' />
          </a>
        )}
      </CardPersonContainer>
    </>
  )
}
