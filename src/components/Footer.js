import styled from "styled-components";
import React from "react";

export default function Footer() {
  return (
    <Footer>
      <TextoAzul>Hábitos</TextoAzul>
      <Bola>
        <TextoBranco>Hoje</TextoBranco>
      </Bola>
      <TextoAzul>Histórico</TextoAzul>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
`;

const TextoAzul = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #52b6ff;
`;

const TextoBranco = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;

const Bola = styled.div`
  background-color: #52b6ff;
  width: 91px;
  height: 91px;
  border-radius: 100px;
  border: 1px solid #52b6ff;
`;
