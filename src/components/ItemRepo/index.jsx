import { Container, LinksContainer } from "./styles";

const ItemRepo = ({name, language, url}) => {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{language}</p>
      <LinksContainer>
        <a href={url}>Clique para acessar</a>
      </LinksContainer>
      <hr />
    </Container>
  );
};

export default ItemRepo;
