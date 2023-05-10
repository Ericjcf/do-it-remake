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
import { Redirect } from "react-router-dom/cjs/react-router-dom";

function Login({ autenticado, setAutenticado }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido!").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(4, "mínimo de quatro dígitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/user/login", data)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("@doit:token", JSON.stringify(token));
        setAutenticado(true);
        console.log(response.data);
        return history.push("/dashboard");
      })
      .catch((err) =>
        toast.error("Email ou senha incorretos, tente novamente")
      );
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
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Logar</h1>

            <Input
              register={register}
              icon={FiMail}
              label="Digite seu email"
              placeholder="Seu email"
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Informe a senha"
              placeholder="Sua senha"
              type="password"
              name="password"
              error={errors.password?.message}
            />

            <Button type="submit">Logar</Button>
            <p>
              Ainda não possui um cadastro? clique
              <Link to="/cadastro"> aqui </Link> para Cadastrar
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
export default Login;
