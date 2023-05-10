import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import { useState, useEffect } from "react";

function Routes() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@doit:token"));

    if (token) {
      return setAutenticado(true);
    }
  }, [autenticado]);

  return (
    <Switch>
      <Route exact path="/">
        <Home autenticado={autenticado} />
      </Route>
      <Route path="/login">
        <Login autenticado={autenticado} setAutenticado={setAutenticado} />
      </Route>
      <Route path="/cadastro">
        <Cadastro autenticado={autenticado} />
      </Route>
      <Route path="/dashboard">
        <Dashboard autenticado={autenticado} setAutenticado={setAutenticado} />
      </Route>
    </Switch>
  );
}

export default Routes;
