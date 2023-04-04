import { useState } from "react";

import { api_users, api_repos } from "./services/api";
import logo from "./assets/github.png";
import { Container } from "./styles/styles";

import Input from "./components/Input";
import ItemRepo from "./components/ItemRepo";
import Button from "./components/Button";

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const handleUser = (event) => {
    const value = event.target.value;
    setUser(value);
  };

  const searchUsers = async () => {
    const { data } = await api_users.get(`/${user}`).catch((error) => {
      error ? setError(true) : setError(false);
    });
    setUser(data.id ? data : null);

    console.log(data);
  };

  return (
    <Container>
      <img src={logo} width={72} height={72} />
      <Input onChange={handleUser} placeholder="Digite o nome de usuário" />
      <Button onClick={searchUsers} />
      {error === true ? <p>Usuário não encontrado</p> : null}
      <ItemRepo />
    </Container>
  );
}

export default App;
