import { Container } from "./style";

export const Button = ({ children, whiteschema, ...rest }) => {
  return (
    <Container whiteschema={whiteschema} type="button" {...rest}>
      {children}
    </Container>
  );
};
