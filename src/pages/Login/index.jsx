import { AnimationContainer, Background, Container, Content } from "./styles";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { FiUser, FiLock, FiMail } from "react-icons/fi";

function Login() {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastrar</h1>
            <Input
              icon={FiUser}
              label="Digite seu nome"
              placeholder="Seu Nome"
            />
            <Input
              icon={FiMail}
              label="Digite seu email"
              placeholder="Seu email"
            />
            <Input
              icon={FiLock}
              label="Informe a senha"
              placeholder="Sua senha"
              type="password"
            />
            <Input
              icon={FiLock}
              label="Confirme a senha"
              placeholder="Confirme Senha"
              type="password"
            />
            <Button>Cadastrar</Button>
            <p>
              Já possui um cadastro? clique <Link>aqui</Link> para logar
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
export default Login;
