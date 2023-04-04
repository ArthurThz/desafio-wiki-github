import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  padding: 1em;

  h3 {
    font-size: 32px;
    color: #ffff;
  }

  p {
    font-size: 16px;
    color: #fafafa90;
    margin-bottom: 20px;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  a {
    text-decoration: none;
    font-size: 15px;
    color: #ffff;
  }

  button {
    color: #d60404;
    background-color: transparent;
    border: none;

    font-size: 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;
