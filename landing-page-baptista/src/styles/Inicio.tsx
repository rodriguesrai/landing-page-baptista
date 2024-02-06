import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  z-index: 1 ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
`;

export const ButtonContato = styled.button`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const AsideContato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 20vw;
  margin-right: 20px;

  p {
    margin-bottom: 15px;
    margin-top: 15px;
    font-size: 1rem;
  }
`;

export const AsideEquipe = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80vh;
  align-items: center;
  margin-right: 20px;

  p {
    text-align: left;
    max-width: 70%;
    margin-top: 15px;
    font-size: 1rem;
  }
`;

export const ContainerContato = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding: 100px;
  width: 100vw;
  margin: 20px;
`;

export const Img = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
  margin: 10px;
`;

export const ImgEquipe = styled.img`
  display: flex;
  width: 200px;
  height: auto;
  border-radius: 50%;
  margin: 10px;
`;

export const CardEquipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
`;

export const IconSocial = styled.img`
  width: 50px;
  height: auto;
  margin: 10px;
`;