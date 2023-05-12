import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  margin: 10px 5px;
  border-radius: 4px;
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 1rem;
  border: 1px solid var(--black);
  color: var(--black);

  hr {
    width: 80%;
    margin: 10px 0;
  }
  button {
    margin-top: 100px;
    align-self: flex-end;
  }
  svg {
    font-size: 1.1rem;
    color: var(--orange);
    margin-right: 5px;
    transform: translateY(2px);
  }
`;
