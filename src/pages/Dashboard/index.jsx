import { InputContainer, Container, TaskContainer } from "./styles";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import Card from "../../components/Card/";
import { useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Dashboard({ autenticado, setAutenticado }) {
  const { register, handleSubmit } = useForm();
  const [tasks, setTasks] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@doit:accessToken"))
  );

  function loadTasks() {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      // .then((response) => setTasks(response.data.data)) essa é a resposta simples sem precisar de conversão de data
      .then((response) => {
        const apiTasks = response.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTasks(apiTasks);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadTasks();
  }, []);

  const onSubmit = ({ task }) => {
    if (!task) {
      return toast.error("A tarefa precisa de um nome");
    }

    api
      .post(
        "/task",
        { description: task },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTasks());
  };

  const handleCompleted = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);
    api
      .put(
        `/task/${id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => setTasks(newTasks));
  };

  if (!autenticado) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <time>10 de maio de 2023</time>
        <section>
          <Input
            register={register}
            icon={FiEdit2}
            placeholder="Adicionar tarefa nova"
            name="task"
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TaskContainer>
        {tasks.map((task) => (
          <Card
            key={task._id}
            title={task.description}
            date={task.createdAt}
            onClick={() => handleCompleted(task._id)}
          ></Card>
        ))}
      </TaskContainer>
    </Container>
  );
}
export default Dashboard;
