import styled from 'styled-components'

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: min-content;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px #007bff;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const CardButtonStyled = styled.a`
  border: solid rex 3px;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: #0056b3;
  }
`
export const TitleStyled = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`
export const DescriptionStyled = styled.p`
  font-size: 1rem;
  text-align: center;
  text-align: center;
`
