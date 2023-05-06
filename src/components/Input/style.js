import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;
export default Container;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 8px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  margin-bottom: 10px;

  input {
    margin-left: 10px;
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
    svg {
      margin-right: 1rem;
    }
  }
`;
