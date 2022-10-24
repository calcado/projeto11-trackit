import styled from "styled-components";
import React from "react";

export default function Footer() {
  return (
    <FooterLayout>
      <TextoAzul>Hábitos</TextoAzul>
      <Bola>
        <TextoBranco>Hoje</TextoBranco>
      </Bola>
      <TextoAzul>Histórico</TextoAzul>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  width: 375px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  position: relative;
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
  position: absolute;
 
`;

const Bola = styled.div`
  background-color: #52b6ff;
  width: 91px;
  height: 91px;
  border-radius: 50%;
  border: 1px solid #52b6ff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
