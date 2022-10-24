import styled from "styled-components";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { usePercentual } from "../provider/percentual";
export default function Footer() {
  const { percentual, setTarefas, setRealizada,porcento } = usePercentual();
  
  return (
    <FooterLayout>
      <Link to="/habitos">
        <TextoAzul>Hábitos</TextoAzul>
      </Link>
      <Link to="/hoje">
        <Bola>
      <CircularProgressbar value={porcento} maxValue={1} text={"Hoje"} />;
        </Bola>
      </Link>
      <Link to="/historico">
        <TextoAzul>Histórico</TextoAzul>
      </Link>
    </FooterLayout>
  );
}
// styles={buildStyles({width:'91px', height:'91px', textcolor:'#FFFFFF',pathColor:'#FFFFFF', textSize:'18px', backgroundColor:'#52B6FF' })}

const FooterLayout = styled.footer`
  width: 375px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  position: absolute;
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
