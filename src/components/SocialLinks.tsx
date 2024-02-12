import { SocialImg, SocialLinksContainer } from './SocialLinks.styled'
import InstagramIcon from '../assets/instagramIcon.svg'

export default function SocialLinks() {
  return (
    <>
      <SocialLinksContainer>
        <SocialImg src={InstagramIcon} alt='instagram' />
        <SocialImg src='' alt='facebook' />
      </SocialLinksContainer>
    </>
  )
}
