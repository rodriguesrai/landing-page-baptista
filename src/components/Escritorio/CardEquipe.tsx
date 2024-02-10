import { IconSocial, ImgEquipe } from '../../styles/Inicio.styled'
import instagramIcon from '../../assets/instagramIcon.svg'

type CardEquipeProps = {
  img: string
  nome: string
  descricao: string
  contatoInstagram?: string
}

export default function CardEquipe(props: CardEquipeProps) {
  return (
    <>
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
    </>
  )
}