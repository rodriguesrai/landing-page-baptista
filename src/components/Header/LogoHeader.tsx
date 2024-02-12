import { Link } from 'react-router-dom'
import logo from '../../assets/banner_logo_advogado.jpg'
import { ImgLogo } from './LogoHeader.styled'

export default function LogoHeader() {
  return (
    <>
      <Link to='/'>
        <ImgLogo src={logo} alt='Logo Baptista' />
      </Link>
    </>
  )
}
