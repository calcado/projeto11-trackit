import styled from "styled-components";
import React from "react";
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"

export default function Habits() {
  const texto = "Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!"
  return (
    <HabitPage>
      <Navbar />
      <Habitos>
        <p>Meus hábitos</p>
        <Button></Button>
      </Habitos>
      <Span>
        {texto}
      </Span>
      <Footer />
    </HabitPage>
  );
}

const HabitPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  width: 100%;
  height: auto;
`;

const Habitos = styled.div`
  margin-top: 100px;
  margin-bottom: 28px;
  margin-left: 17px;
  margin-right: 18px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: "Lexend Deca", cursive;
    font-weight: 400;
    font-size: 23px;
    color: #126ba5;
  }
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
