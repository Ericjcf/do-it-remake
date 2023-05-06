import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${(props) => (props.whiteschema ? "#f5f5f5" : "#0c0d0d")};
  color: ${(props) => (props.whiteschema ? "#0c0d0d" : "#f5f5f5")};
  height: 35px;
  border-radius: 8px;
  border: 3px solid var(--black);
  margin-top: 1rem;
  :hover {
    transition: 0.2s;
    border: 3px solid var(--orange);
  }
`;
