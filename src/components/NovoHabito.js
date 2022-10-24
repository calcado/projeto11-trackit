import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
const [dias, setDias] = useState(["D", "S", "T", "Q", "Q", "S", "S"]);
const [clicado, setClick] = useState([]);
const [cor, setCor] = useState("#FFFFFF");
const cinza = "#D4D4D4"


export default function NovoHabito() {
  let i = 0;

  return (
    <Habito>
      <input type="text" placeholder="nome do hábito" onChage="" />
      <DiasDaSemanas>
        {dias.map((dia) => {
          return <DiaBox>{dia}</DiaBox>;
        })}
        <Buttons>
          <Cancelar onClick="">Cancelar</Cancelar>
          <Salvar onClick="">Salvar</Salvar>
        </Buttons>
      </DiasDaSemanas>
    </Habito>
  );
}

const Habito = styled.div`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
const DiasDaSemanas = styled.div`
  display: flex;
`;
const DiaBox = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 25px;
`;

const Cancelar = styled.button`
  background-color: #ffffff;
  color: #52b6ff;
  font-family: "Lexenda Deca", cursive;
  font-weight: 400;
  font-size: 16px;
`;

const Salvar = styled.button`
  background-color: #52b6ff;
  color: #ffffff;
  font-family: "Lexenda Deca", cursive;
  font-weight: 400;
  font-size: 16px;
`;
