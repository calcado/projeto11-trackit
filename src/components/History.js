import styled from "styled-components";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../provider/auth";


export default function History() {
  const {user} = useAuth();
  if (user === undefined) {
    return <div>Carregando</div>;
  }
  return (
    <HistoryPage>
      <Navbar />
      <Titulo>Histórico</Titulo>
      <Span>Em breve você poderá ver o histórico dos seus hábitos aqui</Span>
      <Footer />
    </HistoryPage>
  );
}

const HistoryPage = styled.main`
  display: flex;
  flex-direction: column;

  align-items: left;
  position: relative;
  background-color: #e5e5e5;
  width: 100%;
  height: 667px;
`;

const Span = styled.span`
  width: 338px;
  height: 74px;
  font-family: "Lexend Deca", cursive;
  font-weight: 400;
  font-size: 18px;
  color: #666666;
  margin-left: 17px;
`;
const Titulo = styled.h1`
  font-family: "Lexend Deca", cursive;
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;
  margin-bottom: 20px;
  margin-top: 100px;
  margin-left: 17px;
`;
