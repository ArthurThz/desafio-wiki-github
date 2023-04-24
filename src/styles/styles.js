import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin: 20px 0 0 0;
`;

export const Row = styled.div`
  display:flex;

  align-items:center;
  justify-content:space-between;
  width:100%;

  max-width:80%;

  gap:15px;
  
`

export const Title = styled.h1`
    font-size:2em;
    color:#ffff;
`
