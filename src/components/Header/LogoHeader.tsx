import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/Logotipo-horizontal-branco.png'
import { Logo } from './LogoHeader.styled'

export default function LogoHeader() {
  return (
    <>
      <Link to='/'>
        <Logo src={ImgLogo} alt='Logo Escritório' />
      </Link>
    </>
  )
}
