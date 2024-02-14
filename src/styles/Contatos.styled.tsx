import styled from 'styled-components'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export const PageWraperContato = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100vw;
  width: 100%;
  height: 95vh;
  padding-bottom: 5rem;
  gap: 8rem;
`

export const ContatosWrapper = styled.div`
  display: flex;
  gap: 3rem;
`
export const EnderecosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
  gap: 3rem;
  padding-top: 3rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition:
    transform 150ms,
    box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #0c7e3c;
    border: 1px solid #0c7e3c;
  }
`
export const ImgButtonWhats = styled(FaWhatsapp)`
  font-size: 2rem;
  margin-right: 10px;
`
export const ImgButtonEmail = styled(MdOutlineEmail)`
  font-size: 2rem;
  margin-right: 10px;
`
export const ImgButtonInstagram = styled(FaInstagram)`
  font-size: 2rem;
  margin-right: 10px;
`
