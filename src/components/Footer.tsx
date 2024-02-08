import React from 'react'
import { AsideContainer, FooterContainer } from '../styles/Footer'
import AsideFooter from './Footer/AsideFooter'

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <AsideContainer>
          <AsideFooter
            title1='Endereço dos nossos escritórios:'
            text1='Rua bla bla bla, Campos dos Goytacazes'
            text2='Rua bla bla bla, Cambuci'
          />
          <AsideFooter
            title1={'Atendimento'}
            title2={'Presencial'}
            text2={'Segunda a sexta das 9h às 12h - 14h às 17h'}
            title3={'Online'}
            text3='Segunda a sexta das 9h às 18h'
          />
          <AsideFooter
            title1='Contato'
            text1='(11) 9999-9999'
            text2='(22) 9999-9999'
          />
        </AsideContainer>
      </FooterContainer>
    </>
  )
}
