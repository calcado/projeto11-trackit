import styled from "styled-components";
import React from "react";

export default function () {
  const texto =
    "Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!";

  return (
    <HabitPage>
      <Habitos>
        <p>Meus hábitos</p>
        <Button></Button>
      </Habitos>
      <Span>{texto}</Span>
    </HabitPage>
  );
}

const HabitPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

const Habitos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #52b6ff;
  color: #ffffff;
  height: 35px;
  width: 40px;
`;

const Span = styled.span`
  width: 338px;
  height: 74px;
  font-family: "Lexend Deca", cursive;
  font-weight: 400;
  font-size: 18px;
  color: #666666;
`;

const NovoHabito = styled.div`
  background-color: #ffffff;
  width: 340px;
  height: 180px;
  border-radius: 5px;
`;


