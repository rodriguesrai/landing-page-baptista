import { HeaderContainer } from '../styles/Header.styled'
import NavDesktop from './Header/NavDesktop'
import LogoHeader from './Header/LogoHeader'
import NavMobile from './Header/NavMobile'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <HeaderContainer>
      {isMobileView ? <NavMobile /> : <NavDesktop />}
      <LogoHeader />
    </HeaderContainer>
  )
}
