import { Container, LinksContainer } from "./styles";

const ItemRepo = () => {
  return (
    <Container>
      <h3>Theodoro</h3>
      <p>P sol ja nasceu la na fazendinha</p>
      <LinksContainer>
        <a href="#">Acessar Repositório</a>
        <button>Remover</button>
      </LinksContainer>
      <hr />
    </Container>
  );
};

export default ItemRepo;
