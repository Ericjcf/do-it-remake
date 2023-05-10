import styled, { keyframes } from "styled-components";
import verde from "../../assets/verde.png";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Background = styled.div`
  //aqui a div está criada, porém só vai renderizar esse elemento caso o tamanho de tela seja no minimo 1100px
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${verde}) no-repeat, #0f0227;
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  //aqui é o container do formulário com animação
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 0.3s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    > div {
      margin-bottom: 10px;
    }
  }
  h1 {
    margin-bottom: 2rem;
  }
  p {
    margin-top: 1rem;
    a {
      font-weight: bold;
      color: var(--orange);
    }
  }
`;
