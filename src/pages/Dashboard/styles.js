import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 38px;
`;

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 2rem;
  padding: 0 2.5rem;
  section {
    display: flex;

    > div {
      max-width: 80%;
      flex: 1;
      margin-right: 1rem;
    }
    button {
      max-width: 250px;
      height: 55px;
      margin: 0;
    }
  }
`;

export const TaskContainer = styled.form``;
