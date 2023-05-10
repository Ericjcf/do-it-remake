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

function Cadastro({ autenticado, setAutenticado }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido!").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(4, "mínimo de quatro dígitos")
      .required("Campo Obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas são diferentes")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post("/user/register", user)
      .then((response) => {
        console.log(response.data);
        toast.success("Conta criada com sucesso");

        return history.push("/");
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
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastrar</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Digite seu nome"
              placeholder="Seu Nome"
              name="name"
              error={errors.name?.message}
            />
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
            <Input
              register={register}
              icon={FiLock}
              label="Confirme a senha"
              placeholder="Confirme Senha"
              type="password"
              name="confirmPassword"
              error={errors.confirmPassword?.message}
            />
            <Button type="submit">Cadastrar</Button>
            <p>
              Já possui um cadastro? clique <Link to="/login">aqui</Link> para
              logar
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
export default Cadastro;
