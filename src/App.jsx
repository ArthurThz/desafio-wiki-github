import { useState } from "react";

import { api_users } from "./services/api";
import logo from "./assets/github.png";
import { Container, Row } from "./styles/styles";

import Input from "./components/Input";
import ItemRepo from "./components/ItemRepo";
import Button from "./components/Button";
import UserInfo from "./components/User";
import { Title } from "./styles/styles";

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState("");
  const [input, setInput] = useState();
  const [error, setError] = useState(false);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const searchUsers = async () => {
    const { data } = await api_users.get(`/${input}`).catch((error) => {
      error ? setError(true) : setError(false);
    });
    setUser(data.id ? data : null);
    setError(false);

    const getRepos = await api_users.get(`/${input}/repos`);
    setRepos(getRepos.data);
  };

  return (
    <Container>
      <Row>
        <img src={logo} width={72} height={72} />
        <Input
          onChange={handleOnChange}
          placeholder="Digite o nome de usuário"
        />
        <Button onClick={searchUsers} />
      </Row>
      {error === true ? (
        <h1>Usuário não encontrado</h1>
      ) : (
        <>
          <Row>
            {user ? (
              <>
                <UserInfo
                  avatarPath={user.avatar_url}
                  bio={user.bio}
                  userName={user.name}
                />
              </>
            ) : null}
          </Row>

          {repos != "" ? (
            <>
              <Title>Repositórios</Title>
              {repos.map((item) => (
                <ItemRepo
                  key={item.id}
                  name={item.name}
                  language={item.language}
                  url={item.html_url}
                />
              ))}
            </>
          ) : null}
        </>
      )}
    </Container>
  );
}

export default App;
