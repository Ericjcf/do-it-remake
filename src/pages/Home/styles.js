import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px; //para que ocupe apenas um quadro no meio da tela
  h1 {
    font-size: 2.5rem;
    span {
      color: var(--orange);
    }
  }
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    button + button {
      margin-left: 1rem;
    }
  }

  span {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    flex-wrap: wrap;
  }
`;
