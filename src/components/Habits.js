import styled from "styled-components";
import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import NovoHabito from "./NovoHabito.js";
import { useAuth } from "../provider/auth.js";
export default function Habits() {
  const { user } = useAuth();
  const texto =
    "Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!";
  if (user === undefined){
    return(
      <div>Carregando</div>
    )
  }
    return (
      <HabitPage>
        <Navbar />
        <Habitos>
          <Titulo>Meus hábitos</Titulo>
          <Criar>+</Criar>
        </Habitos>
        <NovoHabito />
        <Span>{texto}</Span>
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
  height: 100%;
  position: relative;
`;
const Titulo = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-size: 23px;
  font-weight: 400;
  color: #126ba5;
`;

const Habitos = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-right: 30px;
  height: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Criar = styled.button`
  background-color: #52b6ff;
  color: #ffffff;
  height: 35px;
  width: 40px;
  font-size: 20px;
`;

const Span = styled.span`
  width: 338px;
  height: 74px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #666666;
`;
