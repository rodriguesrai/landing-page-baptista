import styled from 'styled-components'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { Box } from '@mui/material'
import PatternBackground from '../assets/identidade/Pattern azul.png'

export const PageWraperContato = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100vw;
  width: 100%;
  min-height: auto;
  height: 100vh;
  gap: 8rem;
  overflow: hidden;
  padding: 2rem;

  @media (max-width: 768px) {
    padding-top: 5rem;
    height: auto;
  }

  @media (max-width: 1200px) {
    padding-top: 5rem;
    height: auto;
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
`

export const EnderecoWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`
export const EnderecoText = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 0.5rem;
`
// texto inicial
export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
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
export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: 0.5rem;
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

  &:hover {
    background-color: #0c7e3c;
    border: 1px solid #0c7e3c;
  }

  @media (max-width: 220px) {
    span {
      display: none; // Oculta o texto do link quando a largura é 220 ou menos
    }
  }
`
export const ImgButtonWhats = styled(FaWhatsapp)`
  font-size: 2rem;
  margin-right: 10px;
  flex-shrink: 0;
`
export const ImgButtonEmail = styled(MdOutlineEmail)`
  font-size: 2rem;
  margin-right: 10px;
  flex-shrink: 0;
`
export const ImgButtonInstagram = styled(FaInstagram)`
  font-size: 2rem;
  margin-right: 10px;
  flex-shrink: 0;
`
export const SpanStyled = styled.span`
  flex-grow: 1;
`
