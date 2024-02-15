import styled from 'styled-components'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export const PageWraperContato = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100vw;
  width: 100%;
  min-height: 95vh;
  height: 100%;
  gap: 8rem;
  padding: 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 5rem;
  }

  @media (max-width: 1200px) {
    padding-top: 5rem;
  }
`

export const ContatosWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  max-width: 100%;
`

// enderecos
export const EnderecosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 2rem;

  h2 {
    text-align: center;
  }

  @media (max-width: 480px) {
  }
`

export const EnderecoWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`
export const EnderecoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
//
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
// buttons
export const ButtonsContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 100%;
`
// button
export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: 0.5rem;
  word-break: break-word; // quebra o texto do botão
  justify-content: center;
  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  padding: 8px 20px;
  text-align: center;
  transition:
    transform 150ms,
    box-shadow 150ms;
  touch-action: manipulation;

  &:hover {
    background-color: #0c7e3c;
    border: 1px solid #0c7e3c;
  }

  @media (max-width: 480px) {
    flex-direction: column;
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
