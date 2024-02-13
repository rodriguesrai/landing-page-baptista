import { Link } from 'react-router-dom'
import { H1Styled } from './LogoHeader.styled'

export default function LogoHeader() {
  return (
    <>
      <Link to='/'>
        <H1Styled>PB ADVOCACIA</H1Styled>
      </Link>
    </>
  )
}
