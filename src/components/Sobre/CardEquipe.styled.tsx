import styled from 'styled-components'

export const CardPersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  gap: 1rem;
  padding-top: 1rem;
  background-color: aliceblue;

  p {
    text-align: center;
    width: 60%;
  }
`

export const ImgEquipe = styled.img`
  display: flex;
  width: 200px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const IconSocial = styled.img`
  width: 50px;
  height: auto;
  margin: 10px;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.1);
  }
`
