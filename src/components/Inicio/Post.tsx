import { PostContainer, PostThumb } from './Postagens.styled'

type PostProps = {
  image: string
  link: string
}

export default function PostagensInicio({ image, link }: PostProps) {
  return (
    <>
      <a href={link} target='_blank'>
        <PostContainer>
          <PostThumb src={image} alt='Post Aposentar Rápido' />
        </PostContainer>
      </a>
    </>
  )
}
