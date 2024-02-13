import { SocialImg, SocialLinksContainer } from './SocialLinks.styled'
import InstagramIcon from '../assets/InstagramIcon1.svg'
import WhatsAppIcon from '../assets/whatsIcon.svg'

export default function SocialLinks() {
  return (
    <>
      <SocialLinksContainer>
        <a
          href='https://www.instagram.com/beatrizbaptista.adv/'
          target='_blank'
        >
          <SocialImg src={InstagramIcon} alt='instagram' />
        </a>
        <a href='https://w.app/AI3lmU' target='_blank'>
          <SocialImg src={WhatsAppIcon} alt='whatsapp' />
        </a>
      </SocialLinksContainer>
    </>
  )
}
