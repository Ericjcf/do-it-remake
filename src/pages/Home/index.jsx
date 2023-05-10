import { Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Home({ autenticado, setAutenticado }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (autenticado) {
    return <Redirect to="/dashboard" />;
    // return history.push("/dashboard");
    // aqui usamos o Redirect por que o direcionamento está sendo feito de forma automática
    // quando a ação do usuário é necessária, ai usando o history.push
  }

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
