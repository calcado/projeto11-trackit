import styled from "styled-components";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Today(){
    
    return(
        <TodayPage>
          <Navbar/>
          <Hoje>Dia de hoje</Hoje>
          <Percentual>Nenhum hábito concluído ainda</Percentual>
          <Atividades>

          </Atividades>
          
          <Footer/>
        </TodayPage>
    )
}

const TodayPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  position: relative;
`;

const Hoje = styled.span`
color:#126BA5;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 23px;
margin-top: 28px;
`

const Percentual = styled.span`
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 18px;
color:#BABABA;
margin-bottom: 28px;
`
const Atividades = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

// const Atividade = styled.div`
// width: ;

// `