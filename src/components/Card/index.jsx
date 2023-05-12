import { Container } from "./styles";
import { FiClipboard, FiCalendar } from "react-icons/fi";
import { Button } from "../Button";
import { useForm } from "react-hook-form";

function Card({ title, date, onClick }) {
  return (
    <Container>
      <span>
        <FiClipboard /> {title}
      </span>
      <hr />
      <span>
        <FiCalendar /> {date}
      </span>

      <Button onClick={onClick}>Finalizar Tarefa</Button>
    </Container>
  );
}
export default Card;
