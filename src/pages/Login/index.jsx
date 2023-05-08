import { AnimationContainer, Background, Container, Content } from "./styles";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {
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
  } = useForm(schema);

  const onSubmitFunction = (data) => {
    console.log(data);
  };

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
              Já possui um cadastro? clique <Link>aqui</Link> para logar
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
export default Login;
