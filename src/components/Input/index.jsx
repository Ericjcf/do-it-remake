import { Container, InputContainer } from "./style";

function Input({ label, icon: Icon, register, name, error = "", ...rest }) {
  return (
    <Container>
      <div>
        {label} {!!error && <span>- {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
export default Input;

//O icon aqui é um componente, então não podemos chama-lo com letra minuscula, por isso fazemos um equivalente no props
//... e o chamamos como componente caso o Icon exista ou seja: {Icon &&<Icon/>}
