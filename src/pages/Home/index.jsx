import { Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          DO<span>.</span>IT
        </h1>
        <span>Um aplicativo para organização de tarefas</span>
        <div>
          <Button whiteschema onClick={() => handleNavigation("/login")}>
            Logar
          </Button>
          <Button onClick={() => handleNavigation("/cadastro")}>
            Cadastrar
          </Button>
        </div>
      </Content>
    </Container>
  );
}
export default Home;
