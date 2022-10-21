import styled from "styled-components";
import logoTipo from "../assets/images/logo.png";

export default function Logo() {
  return (
    <Imagem>
      <img src={logoTipo} alt="" />
    </Imagem>
  );
}

const Imagem = styled.div`
  width: 180px;
  height: 180px;
`;
