import { AnimationContainer, Background, Container, Content } from "./styles";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Dashboard({ autenticado, setAutenticado }) {
  if (!autenticado) {
    return <Redirect to="/dashboard" />;
    // return history.push("/dashboard");
    // aqui usamos o Redirect por que o direcionamento está sendo feito de forma automática
    // quando a ação do usuário é necessária, ai usando o history.push
  }
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <p>Pintão!!</p>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
export default Dashboard;
