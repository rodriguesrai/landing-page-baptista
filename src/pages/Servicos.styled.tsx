import { Box, Button, Grid, Typography } from '@mui/material'
import styled from 'styled-components'

export const TitleH3 = styled(Typography).attrs({
  variant: 'h3',
})``

export const TitleH5 = styled(Typography).attrs({
  variant: 'h5',
})``

export const ParagraphTitle = styled(Typography).attrs({
  variant: 'body1',
})`
  display: flex;
  align-items: center;
`

export const ParagraphBody1 = styled(Typography).attrs({
  variant: 'body1',
})``

export const ServicesContainer = styled(Box)`
  display: flex;
  gap: 3rem;
  justify-content: center;
  background-color: #00796b;
  color: white;
  padding: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const GridContainer = styled(Grid).attrs({
  container: true,
  spacing: 3,
})``

export const GridItem = styled(Grid).attrs({
  item: true,
  xs: 12,
})``

export const GridItemHalf = styled(Grid).attrs({
  item: true,
  xs: 12,
  sm: 6,
})``

export const ServiceBox = styled(Box)`
  margin: 2rem 0;
`

export const ContactButton = styled(Button).attrs({
  variant: 'outlined',
})`
  border-color: #00796b;
  color: #00796b;
  margin-top: 1rem;
`
export const LineComponent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 1px solid #00796b; /* Linha mais suave com espessura reduzida */
    opacity: 0.5; /* Transparência para suavizar a linha */
    z-index: 1;
  }

  span {
    display: inline-block;
    padding: 0 1rem;
    background-color: #ffffff; /* Cor de fundo para o texto se destacar */
    position: relative;
    z-index: 2;
  }
`
